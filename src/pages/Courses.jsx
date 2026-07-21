import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  BrainCircuit,
  CalendarRange,
  ChevronRight,
  Compass,
  DollarSign,
  GraduationCap,
  Lock,
  PlayCircle,
  Rocket,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';
import { programs } from '../data/programs';

const categoryFilters = ['all', 'software-engineering', 'data-science', 'cyber-security'];

const partnerLogos = ['OpenAI', 'Stripe', 'Vercel', 'Notion', 'Linear', 'Google'];

const premiumStats = [
  { value: 97, suffix: '%', label: 'placement rate' },
  { value: 18, suffix: 'k+', label: 'industry mentors' },
  { value: 4.9, suffix: '/5', label: 'student satisfaction' },
  { value: 6, suffix: ' weeks', label: 'to first internship' },
];

const outcomeTimeline = [
  { title: 'Launch your foundation', text: 'Hands-on projects begin in the first term with mentorship from product and research teams.' },
  { title: 'Shape your niche', text: 'Specialized studio work introduces you to AI, platform, security, and cloud systems.' },
  { title: 'Step into the market', text: 'Capstones and employer-led workshops prepare you for high-impact internships and roles.' },
];

const studentStories = [
  {
    quote: 'The studio-based experience felt like joining a world-class product team, not a traditional university class.',
    name: 'Mina Patel',
    role: 'ML Engineer @ Anthropic',
  },
  {
    quote: 'The faculty access and career support helped me turn my capstone into a full-time role before graduation.',
    name: 'Daniel Ruiz',
    role: 'Security Analyst @ Stripe',
  },
];

function AnimatedCounter({ value, suffix = '' }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frameId;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setDisplayValue(Math.round(progress * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return <span>{displayValue}{suffix}</span>;
}

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  const enrichedPrograms = useMemo(
    () =>
      programs.map((program, index) => {
        const profileMap = {
          se: {
            badge: 'AI-first product engineering',
            skills: ['Cloud', 'Systems Design', 'Product Thinking'],
            placement: '96%',
            salary: '$108k',
            rating: '4.9',
            faculty: 'Dr. Maya Chen',
            facultyRole: 'Principal Engineer',
            accent: 'course-card--sky',
          },
          ds: {
            badge: 'Research + applied ML',
            skills: ['Statistics', 'Deep Learning', 'Analytics'],
            placement: '98%',
            salary: '$112k',
            rating: '4.95',
            faculty: 'Prof. Aisha Quinn',
            facultyRole: 'Applied AI Lead',
            accent: 'course-card--violet',
          },
          cs: {
            badge: 'Security at scale',
            skills: ['Cloud Security', 'Threat Modeling', 'Forensics'],
            placement: '99%',
            salary: '$120k',
            rating: '4.97',
            faculty: 'Dr. Noah Ortiz',
            facultyRole: 'Head of Security',
            accent: 'course-card--emerald',
          },
        };

        const profile = profileMap[program.id] ?? {
          badge: 'Emerging discipline',
          skills: ['Leadership', 'Strategy', 'Innovation'],
          placement: '95%',
          salary: '$100k',
          rating: '4.8',
          faculty: 'Prof. Jordan Lee',
          facultyRole: 'Faculty Lead',
          accent: 'course-card--neutral',
        };

        return {
          ...program,
          index,
          badge: profile.badge,
          skills: profile.skills,
          placement: profile.placement,
          salary: profile.salary,
          rating: profile.rating,
          faculty: profile.faculty,
          facultyRole: profile.facultyRole,
          accent: profile.accent,
        };
      }),
    [],
  );

  const filteredPrograms = useMemo(() => {
    const query = search.trim().toLowerCase();

    return enrichedPrograms.filter((program) => {
      const matchesCategory = activeFilter === 'all' || program.category === activeFilter;
      const searchableText = `${program.title} ${program.degree} ${program.skills.join(' ')} ${program.faculty}`.toLowerCase();
      const matchesSearch = !query || searchableText.includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, enrichedPrograms, search]);

  return (
    <div className="courses-page">
      <div className="courses-shell">
        <motion.section
          className="courses-hero"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="courses-hero__content">
            <div className="courses-hero__badge">
              <Sparkles size={16} />
              <span>New • premium admissions experience • 2.1k scholars enrolled</span>
            </div>
            <h1>Build a future in technology with programs shaped for global impact.</h1>
            <p>
              Discover immersive degree pathways that blend elite faculty, live industry projects, and career outcomes that feel more like a venture-backed launchpad than a traditional campus catalog.
            </p>
            <div className="courses-hero__actions">
              <a href="#catalog" className="courses-hero__button courses-hero__button--primary">
                Explore programs
                <ArrowRight size={18} />
              </a>
              <a href="/contact" className="courses-hero__button courses-hero__button--secondary">
                Book a strategy call
              </a>
            </div>
            <div className="courses-hero__mini-stats">
              <div>
                <strong><AnimatedCounter value={97} suffix="%" /></strong>
                <span>Placement rate</span>
              </div>
              <div>
                <strong><AnimatedCounter value={4} suffix="x" /></strong>
                <span>More internships</span>
              </div>
              <div>
                <strong><AnimatedCounter value={180} /></strong>
                <span>Global partners</span>
              </div>
            </div>
          </div>

          <motion.div
            className="courses-hero__visual"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="courses-hero__cluster">
              <div className="courses-hero__panel">
                <div className="courses-hero__panel-top">
                  <div className="courses-hero__panel-label">
                    <Compass size={16} />
                    <span>Career velocity</span>
                  </div>
                  <span className="courses-hero__panel-score">+21%</span>
                </div>
                <div className="courses-hero__panel-metrics">
                  <div>
                    <strong>6 weeks</strong>
                    <span>to first offer</span>
                  </div>
                  <div>
                    <strong>$112k</strong>
                    <span>avg. starting salary</span>
                  </div>
                </div>
              </div>
              <div className="courses-hero__floating courses-hero__floating--top">
                <GraduationCap size={18} />
                <span>Industry-led studios</span>
              </div>
              <div className="courses-hero__floating courses-hero__floating--bottom">
                <ShieldCheck size={18} />
                <span>Trusted by 180+ partners</span>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="courses-toolbar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
        >
          <label className="courses-toolbar__search" htmlFor="program-search">
            <Search size={18} />
            <input
              id="program-search"
              type="search"
              placeholder="Search programs, skills, or faculty"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <div className="courses-toolbar__filters" role="tablist" aria-label="Program categories">
            <div className="courses-toolbar__filters-title">
              <SlidersHorizontal size={16} />
              <span>Filter</span>
            </div>
            {categoryFilters.map((filter) => {
              const label = filter === 'all' ? 'All programs' : filter.replace('-', ' ');
              return (
                <button
                  key={filter}
                  className={`courses-chip ${activeFilter === filter ? 'courses-chip--active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </motion.section>

        <section className="courses-partners" aria-label="Industry partners">
          <p>Trusted by ambitious teams from</p>
          <div className="courses-partners__logos">
            {partnerLogos.map((partner) => (
              <div key={partner} className="courses-partner-pill">
                {partner}
              </div>
            ))}
          </div>
        </section>

        <section className="courses-grid-section" id="catalog">
          <div className="courses-section-heading">
            <div>
              <span className="courses-eyebrow">Curated pathways</span>
              <h2>Programs built for modern builders and future founders.</h2>
            </div>
            <p>Each pathway pairs elite academics with applied delivery, giving students the depth to thrive and the momentum to launch quickly.</p>
          </div>

          <div className="courses-grid">
            {filteredPrograms.map((program, index) => (
              <motion.article
                key={program.id}
                className={`course-card ${program.accent}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <div className="course-card__top">
                  <div className="course-card__icon">
                    {program.icon}
                  </div>
                  <span className="course-card__badge">{program.badge}</span>
                </div>

                <div className="course-card__content">
                  <div className="course-card__headline">
                    <h3>{program.title}</h3>
                    <p>{program.degree}</p>
                  </div>

                  <div className="course-card__metrics">
                    <div>
                      <CalendarRange size={14} />
                      <span>{program.duration}</span>
                    </div>
                    <div>
                      <GraduationCap size={14} />
                      <span>{program.credits}</span>
                    </div>
                    <div>
                      <BriefcaseBusiness size={14} />
                      <span>{program.placement} placement</span>
                    </div>
                  </div>

                  <p className="course-card__description">{program.description}</p>

                  <div className="course-card__tags">
                    {program.skills.map((skill) => (
                      <span key={skill} className="course-card__tag">{skill}</span>
                    ))}
                  </div>

                  <div className="course-card__faculty">
                    <div className="course-card__avatar">{program.faculty.split(' ').map((item) => item[0]).join('').slice(0, 2)}</div>
                    <div>
                      <strong>{program.faculty}</strong>
                      <span>{program.facultyRole}</span>
                    </div>
                  </div>

                  <div className="course-card__footer">
                    <div className="course-card__footer-stats">
                      <div>
                        <DollarSign size={15} />
                        <span>{program.salary}</span>
                      </div>
                      <div>
                        <Star size={15} />
                        <span>{program.rating}</span>
                      </div>
                    </div>
                    <div className="course-card__actions">
                      <button type="button" className="course-card__button course-card__button--primary">
                        Enroll now
                      </button>
                      <button type="button" className="course-card__button course-card__button--ghost">
                        View outline
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="courses-empty-state">
              <p>No programs match that search yet. Try a broader keyword or switch filters.</p>
            </div>
          )}
        </section>

        <section className="courses-showcase">
          <div className="courses-showcase__stories">
            <div className="courses-section-heading courses-section-heading--tight">
              <div>
                <span className="courses-eyebrow">Student outcomes</span>
                <h2>Stories from graduates who moved fast after campus.</h2>
              </div>
            </div>
            <div className="courses-story-list">
              {studentStories.map((story) => (
                <div key={story.name} className="courses-story-card">
                  <p>“{story.quote}”</p>
                  <div>
                    <strong>{story.name}</strong>
                    <span>{story.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="courses-timeline">
            <div className="courses-section-heading courses-section-heading--tight">
              <div>
                <span className="courses-eyebrow">Career path</span>
                <h2>From launch to leadership in three clear stages.</h2>
              </div>
            </div>
            <div className="courses-timeline__items">
              {outcomeTimeline.map((item, index) => (
                <div key={item.title} className="courses-timeline__item">
                  <div className="courses-timeline__index">0{index + 1}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="courses-stats" aria-label="Program highlights">
          {premiumStats.map((item) => (
            <div key={item.label} className="courses-stat-card">
              <strong><AnimatedCounter value={item.value} suffix={item.suffix} /></strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <motion.section
          className="courses-cta"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <div className="courses-cta__content">
            <div className="courses-cta__eyebrow">
              <Rocket size={18} />
              <span>Next intake opens this fall</span>
            </div>
            <h2>Ready to shape your future with a premium university experience?</h2>
            <p>Meet our admissions team and receive tailored guidance for your next chapter.</p>
            <div className="courses-cta__actions">
              <a href="/contact" className="courses-hero__button courses-hero__button--primary">
                Apply now
                <ArrowRight size={18} />
              </a>
              <a href="#catalog" className="courses-hero__button courses-hero__button--secondary">
                View highlights
              </a>
            </div>
          </div>
          <div className="courses-cta__orb" />
          <div className="courses-cta__orb courses-cta__orb--secondary" />
        </motion.section>
      </div>
    </div>
  );
}
