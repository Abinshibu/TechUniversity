import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BookOpen,
  BrainCircuit,
  Building2,
  CalendarDays,
  ChevronDown,
  Compass,
  GraduationCap,
  Globe2,
  Microscope,
  PlayCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';
import { programs } from '../data/programs';
import posts from '../data/posts';
import PostCard from '../components/PostCard';

const heroStats = [
  { value: 150, suffix: '+', label: 'Programs' },
  { value: 12, suffix: 'k+', label: 'Students' },
  { value: 98, suffix: '%', label: 'Placement' },
  { value: 4.9, suffix: '/5', label: 'Satisfaction' },
];

const partnerLogos = ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'IBM'];

const experiencePillars = [
  {
    title: 'Applied learning',
    copy: 'Studio labs and rapid sprints turn theory into product-ready thinking.',
    icon: BookOpen,
  },
  {
    title: 'Global mentors',
    copy: 'Industry leaders join classrooms, critiques, and capstone reviews.',
    icon: Users,
  },
  {
    title: 'Career momentum',
    copy: 'Internships, placement support, and founder networks accelerate outcomes.',
    icon: TrendingUp,
  },
];

const campusHighlights = [
  'AI research labs with live experimentation',
  'Immersive studios across product, security, and data',
  'Global exchange and startup partnerships',
];

const timelineEvents = [
  { title: 'Launch your foundation', copy: 'Design thinking, systems, and leadership begin in the first term.' },
  { title: 'Shape your edge', copy: 'Specialized studio work aligns with AI, cloud, security, and product paths.' },
  { title: 'Lead in industry', copy: 'Capstones and employer networks create opportunities before graduation.' },
];

const faculty = [
  { name: 'Dr. Maya Chen', title: 'Director of AI Systems', bio: 'Transforms applied research into product strategy for ambitious founders.', icon: BrainCircuit },
  { name: 'Prof. Aisha Quinn', title: 'Dean of Applied Sciences', bio: 'Builds interdisciplinary learning experiences that keep students ahead.', icon: Microscope },
  { name: 'Dr. Noah Ortiz', title: 'Head of Cyber Practice', bio: 'Leads real-world security studios for enterprise and startup teams.', icon: ShieldCheck },
];

const faqs = [
  { question: 'How selective is admissions?', answer: 'The program is intentionally selective, with a balance of academic strength, portfolio evidence, and personal fit.' },
  { question: 'Can I transfer into the university?', answer: 'Yes. We review transfer applications case by case, with advanced standing possible for equivalent coursework.' },
  { question: 'What support is available for students?', answer: 'Students receive academic advising, wellness coaching, career mentoring, and startup support in one ecosystem.' },
];

function AnimatedCounter({ value, suffix = '' }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frameId;
    const duration = 1100;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const nextValue = Math.round(progress * value);
      setDisplayValue(nextValue);
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return <span>{displayValue}{suffix}</span>;
}

export default function Home() {
  const featuredPosts = posts.slice(0, 3);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__ambient home-hero__ambient--one" />
        <div className="home-hero__ambient home-hero__ambient--two" />
        <div className="container home-hero__inner">
          <div className="home-hero__content">
            <div className="home-hero__chip">
              <Sparkles size={16} />
              <span>Applications open for the next generation of builders</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              A premium university experience for ambitious minds.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Join a future-facing campus where world-class faculty, industry-led studios, and venture-ready research create momentum from day one.
            </motion.p>
            <motion.div
              className="home-hero__actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link to="/register" className="home-hero__button home-hero__button--primary">
                Apply now
                <ArrowRight size={18} />
              </Link>
              <Link to="/courses" className="home-hero__button home-hero__button--secondary">
                Explore programs
              </Link>
            </motion.div>
            <div className="home-hero__meta">
              {heroStats.map((stat) => (
                <div key={stat.label} className="home-hero__meta-card">
                  <strong><AnimatedCounter value={stat.value} suffix={stat.suffix} /></strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="home-hero__visual"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="home-hero__art">
              <div className="home-hero__panel">
                <div className="home-hero__panel-top">
                  <div className="home-hero__panel-label">
                    <Compass size={16} />
                    <span>Campus intelligence</span>
                  </div>
                  <div className="home-hero__panel-badge">Live</div>
                </div>
                <div className="home-hero__panel-grid">
                  <div className="home-hero__panel-card">
                    <div className="home-hero__panel-card-top">
                      <Award size={16} />
                      <span>Placement</span>
                    </div>
                    <strong>97%</strong>
                  </div>
                  <div className="home-hero__panel-card home-hero__panel-card--accent">
                    <div className="home-hero__panel-card-top">
                      <Building2 size={16} />
                      <span>Research</span>
                    </div>
                    <strong>18 labs</strong>
                  </div>
                </div>
                <div className="home-hero__chart">
                  <div className="home-hero__chart-bar" style={{ height: '36%' }} />
                  <div className="home-hero__chart-bar" style={{ height: '72%' }} />
                  <div className="home-hero__chart-bar" style={{ height: '92%' }} />
                  <div className="home-hero__chart-bar" style={{ height: '64%' }} />
                </div>
              </div>
              <div className="home-hero__floating home-hero__floating--top">
                <GraduationCap size={18} />
                <span>Top 1% faculty</span>
              </div>
              <div className="home-hero__floating home-hero__floating--bottom">
                <PlayCircle size={18} />
                <span>Immersive studios</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="home-stats-bar">
        <div className="container">
          <div className="home-stats-grid">
            {heroStats.map((stat) => (
              <div key={stat.label} className="home-stat-card">
                <strong><AnimatedCounter value={stat.value} suffix={stat.suffix} /></strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-partners">
        <div className="container">
          <p className="home-partners__label">Trusted by teams shaping the next era</p>
          <div className="home-partners__logos">
            {partnerLogos.map((partner) => (
              <span key={partner} className="home-partner-pill">{partner}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="home-section-header">
            <span className="home-eyebrow">A new standard</span>
            <h2>Designed for ambitious students and world-class outcomes.</h2>
            <p>The campus experience feels polished, welcoming, and deeply intentional, from first contact to graduation.</p>
          </div>

          <div className="home-bento-grid">
            <motion.article className="home-bento-card home-bento-card--large" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35 }}>
              <div className="home-bento-card__header">
                <div className="home-bento-icon">
                  <Microscope size={20} />
                </div>
                <div>
                  <span className="home-eyebrow">Research excellence</span>
                  <h3>Immersive labs built for fast-moving discovery.</h3>
                </div>
              </div>
              <ul className="home-bento-list">
                {campusHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>

            <motion.article className="home-bento-card home-bento-card--accent" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: 0.05 }}>
              <div className="home-bento-card__header">
                <div className="home-bento-icon">
                  <Rocket size={20} />
                </div>
                <div>
                  <span className="home-eyebrow">Career velocity</span>
                  <h3>95% of graduates move into impactful roles within months.</h3>
                </div>
              </div>
              <div className="home-bento-metric">
                <strong>6 weeks</strong>
                <span>to first internship</span>
              </div>
            </motion.article>

            <motion.article className="home-bento-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: 0.1 }}>
              <div className="home-bento-card__header">
                <div className="home-bento-icon">
                  <Globe2 size={20} />
                </div>
                <div>
                  <span className="home-eyebrow">Network</span>
                  <h3>Global partnerships that widen every opportunity.</h3>
                </div>
              </div>
              <p>From startup accelerators to Fortune 500 labs, your next chapter is supported by a remarkable professional network.</p>
            </motion.article>

            <motion.article className="home-bento-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: 0.12 }}>
              <div className="home-bento-card__header">
                <div className="home-bento-icon">
                  <CalendarDays size={20} />
                </div>
                <div>
                  <span className="home-eyebrow">Campus life</span>
                  <h3>Events, clubs, and experiences that keep the community thriving.</h3>
                </div>
              </div>
              <div className="home-bento-pills">
                <span>Hackathons</span>
                <span>Speaker series</span>
                <span>Innovation fairs</span>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="home-section home-programs-section">
        <div className="container">
          <div className="home-section-header">
            <span className="home-eyebrow">Flagship pathways</span>
            <h2>Programs shaped by technology, research, and long-term impact.</h2>
            <p>Each progression is built around modern outcomes, from product engineering to security and AI.</p>
          </div>
          <div className="home-programs-grid">
            {programs.map((program, index) => (
              <motion.article
                key={program.id}
                className={`home-prog-card ${program.accentClass}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div className="home-prog-card__top">
                  <div className="home-prog-icon">{program.icon}</div>
                  <span className="home-prog-chip home-prog-chip--dark">{program.duration}</span>
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className="home-prog-meta">
                  <span>{program.credits}</span>
                  <span>{program.rate}</span>
                </div>
                <Link to="/courses" className="home-prog-link">
                  Explore pathway
                  <ArrowRight size={15} />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-learning">
        <div className="container home-learning__grid">
          <div className="home-learning__panel">
            <span className="home-eyebrow">Why it feels different</span>
            <h2>A polished learning environment that feels as premium as the outcomes it delivers.</h2>
            <p>Our experience combines elegant spaces, deep mentorship, and a product-minded approach to education so students feel supported at every step.</p>
            <div className="home-learning__list">
              {experiencePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="home-learning__item">
                    <div className="home-learning__item-icon">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3>{pillar.title}</h3>
                      <p>{pillar.copy}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="home-learning__timeline">
            <div className="home-learning__timeline-header">
              <span className="home-eyebrow">Journey</span>
              <h3>From first semester to first role.</h3>
            </div>
            {timelineEvents.map((event, index) => (
              <div key={event.title} className="home-learning__timeline-item">
                <div className="home-learning__timeline-index">0{index + 1}</div>
                <div>
                  <h4>{event.title}</h4>
                  <p>{event.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-faculty">
        <div className="container">
          <div className="home-section-header">
            <span className="home-eyebrow">Faculty spotlight</span>
            <h2>Mentors who bring deep expertise and extraordinary care.</h2>
          </div>
          <div className="home-faculty-grid">
            {faculty.map((person) => {
              const Icon = person.icon;
              return (
                <motion.article key={person.name} className="home-faculty-card" whileHover={{ y: -6 }}>
                  <div className="home-faculty-card__icon">
                    <Icon size={18} />
                  </div>
                  <h3>{person.name}</h3>
                  <p className="home-faculty-card__title">{person.title}</p>
                  <p>{person.bio}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-section home-testimonials">
        <div className="container">
          <div className="home-section-header">
            <span className="home-eyebrow">Student stories</span>
            <h2>Voices from the people shaping the next era with us.</h2>
          </div>
          <div className="home-testimonials-grid">
            {[
              {
                quote: 'The experience felt as premium as the outcomes. I found career clarity before the end of my second year.',
                name: 'Sarah Jenkins',
                role: 'Product Engineer at Stripe',
              },
              {
                quote: 'The faculty and studio model changed how I think about building. I left with confidence and a portfolio that stood out.',
                name: 'Michael Chen',
                role: 'Research Scientist at OpenAI',
              },
              {
                quote: 'The global network turned my capstone into an internship and then a full-time role.',
                name: 'Emily Rodriguez',
                role: 'Security Analyst at Google',
              },
            ].map((story) => (
              <motion.article key={story.name} className="home-testimonial-card" whileHover={{ y: -6 }}>
                <div className="home-testimonial-card__top">
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                </div>
                <p>“{story.quote}”</p>
                <div>
                  <strong>{story.name}</strong>
                  <span>{story.role}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-news">
        <div className="container">
          <div className="home-section-header">
            <span className="home-eyebrow">Latest from campus</span>
            <h2>Fresh thinking, bold ideas, and a close look at student momentum.</h2>
          </div>
          <div className="home-news-grid">
            {featuredPosts.map((post) => (
              <div key={post.id} className="home-news-card">
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-faq">
        <div className="container home-faq__grid">
          <div className="home-faq__content">
            <span className="home-eyebrow">Questions</span>
            <h2>Everything you need to know before applying.</h2>
            <p>We keep the process clear, personal, and designed to feel calm and confident.</p>
          </div>
          <div className="home-faq__items">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item.question} className={`home-faq__item ${isOpen ? 'is-open' : ''}`}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                    <span>{item.question}</span>
                    <ChevronDown size={18} />
                  </button>
                  {isOpen && <p>{item.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-cta-section">
        <div className="container home-cta-inner">
          <div className="home-cta-card">
            <div>
              <span className="home-eyebrow home-eyebrow--light">Ready to start?</span>
              <h2>Your future begins with a single step.</h2>
              <p>Book a one-to-one admissions conversation and discover which pathway fits your ambition best.</p>
            </div>
            <div className="home-cta-actions">
              <Link to="/register" className="home-hero__button home-hero__button--primary">
                Apply for fall 2026
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="home-hero__button home-hero__button--secondary home-hero__button--secondary-dark">
                Schedule a tour
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
