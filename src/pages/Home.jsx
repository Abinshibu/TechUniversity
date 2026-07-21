import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  Zap,
} from 'lucide-react';
import { programs } from '../data/programs';
import posts from '../data/posts';

/* ─── Data ─────────────────────────────────────────── */
const heroStats = [
  { value: 150, suffix: '+',  label: 'Programs',    icon: BookOpen },
  { value: 12,  suffix: 'k+', label: 'Students',    icon: Users },
  { value: 98,  suffix: '%',  label: 'Placement',   icon: TrendingUp },
  { value: 4.9, suffix: '/5', label: 'Satisfaction', icon: Star },
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
  { title: 'Shape your edge',        copy: 'Specialized studio work aligns with AI, cloud, security, and product paths.' },
  { title: 'Lead in industry',       copy: 'Capstones and employer networks create opportunities before graduation.' },
];

const faculty = [
  { name: 'Dr. Maya Chen',   title: 'Director of AI Systems',   bio: 'Transforms applied research into product strategy for ambitious founders.',                    icon: BrainCircuit },
  { name: 'Prof. Aisha Quinn', title: 'Dean of Applied Sciences', bio: 'Builds interdisciplinary learning experiences that keep students ahead of the curve.',       icon: Microscope },
  { name: 'Dr. Noah Ortiz',  title: 'Head of Cyber Practice',   bio: 'Leads real-world security studios for enterprise and startup teams at scale.',                 icon: ShieldCheck },
];

const testimonials = [
  { quote: 'The experience felt as premium as the outcomes. I found career clarity before the end of my second year.', name: 'Sarah Jenkins',    role: 'Product Engineer · Stripe' },
  { quote: 'The faculty and studio model changed how I think about building. I left with confidence and a portfolio that stood out.',            name: 'Michael Chen',    role: 'Research Scientist · OpenAI' },
  { quote: 'The global network turned my capstone into an internship and then a full-time role within six months.',    name: 'Emily Rodriguez', role: 'Security Analyst · Google' },
];

const faqs = [
  { question: 'How selective is admissions?',             answer: 'The program is intentionally selective, balancing academic strength, portfolio evidence, and personal fit to build cohesive cohorts.' },
  { question: 'Can I transfer into the university?',      answer: 'Yes. We review transfer applications case by case, with advanced standing possible for equivalent coursework completed elsewhere.' },
  { question: 'What support is available for students?',  answer: 'Students receive academic advising, wellness coaching, career mentoring, and startup support all within one connected ecosystem.' },
  { question: 'Are there scholarship opportunities?',     answer: 'Merit-based scholarships, need-based grants, and employer-sponsored tracks are available across all flagship programs.' },
];

/* ─── Animated counter ────────────────────────────── */
function AnimatedCounter({ value, suffix = '' }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let rafId;
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const ease = 1 - Math.pow(1 - t, 3);
      setDisplay(parseFloat((ease * value).toFixed(value % 1 !== 0 ? 1 : 0)));
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [value]);

  return <span>{display}{suffix}</span>;
}

/* ─── Fade-in-up variant ──────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 20 },
  animate:   { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeInView = (delay = 0) => ({
  initial:   { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true, amount: 0.18 },
  transition: { duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ─── Inline PostCard ─────────────────────────────── */
function HomePostCard({ post }) {
  function formatDate(ds) {
    return new Date(ds).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }
  return (
    <article className="home-post-card">
      <div className="home-post-card__image" style={{ background: post.image.gradient }}>
        <span>{post.image.label}</span>
      </div>
      <div className="home-post-card__body">
        <div className="home-post-card__meta">
          <time className="home-post-card__date" dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="home-post-card__dot" />
          <span className="home-post-card__read">{post.readingTime}</span>
        </div>
        <h3>{post.title}</h3>
        <div className="home-post-card__tags">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="home-post-card__tag">{tag}</span>
          ))}
        </div>
        <p>{post.excerpt}</p>
        <div className="home-post-card__footer">
          <span className="home-post-card__author">By {post.author}</span>
          <span className="home-post-card__link">
            Read more <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </article>
  );
}

/* ══════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════ */
export default function Home() {
  const featuredPosts = posts.slice(0, 3);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="home-page">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="home-hero">
        <div className="home-hero__ambient home-hero__ambient--one" />
        <div className="home-hero__ambient home-hero__ambient--two" />
        <div className="home-hero__ambient home-hero__ambient--three" />

        <div className="container home-hero__inner">
          {/* Left: copy */}
          <div className="home-hero__content">
            <motion.div {...fadeUp(0)}>
              <div className="home-hero__chip">
                <span className="home-hero__chip-dot" />
                <Sparkles size={14} />
                <span>Applications open — Fall 2026 cohort</span>
              </div>
            </motion.div>

            <motion.h1 {...fadeUp(0.05)}>
              The university built for{' '}
              <span className="home-hero__headline-grad">ambitious minds.</span>
            </motion.h1>

            <motion.p className="home-hero__sub" {...fadeUp(0.10)}>
              Join a future-facing campus where world-class faculty, industry-led studios,
              and venture-ready research create momentum from day one.
            </motion.p>

            <motion.div className="home-hero__actions" {...fadeUp(0.15)}>
              <Link to="/register" className="home-hero__button home-hero__button--primary">
                Apply now <ArrowRight size={17} />
              </Link>
              <Link to="/courses" className="home-hero__button home-hero__button--secondary">
                Explore programs
              </Link>
            </motion.div>

            <motion.div className="home-hero__meta" {...fadeUp(0.20)}>
              {heroStats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="home-hero__meta-card">
                    <Icon size={16} style={{ color: 'var(--h-brand)', flexShrink: 0 }} />
                    <span className="home-hero__meta-divider" />
                    <div>
                      <strong><AnimatedCounter value={s.value} suffix={s.suffix} /></strong>
                      <span>{s.label}</span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: visual panel */}
          <motion.div
            className="home-hero__visual"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="home-hero__art">
              <div className="home-hero__panel">
                <div className="home-hero__panel-top">
                  <div className="home-hero__panel-label">
                    <Compass size={14} /> Campus intelligence
                  </div>
                  <div className="home-hero__panel-badge">● Live</div>
                </div>

                <div className="home-hero__panel-grid">
                  <div className="home-hero__panel-card">
                    <div className="home-hero__panel-card-top">
                      <Award size={13} /> Placement
                    </div>
                    <strong>97%</strong>
                  </div>
                  <div className="home-hero__panel-card home-hero__panel-card--accent">
                    <div className="home-hero__panel-card-top">
                      <Building2 size={13} /> Research
                    </div>
                    <strong>18 labs</strong>
                  </div>
                  <div className="home-hero__panel-card">
                    <div className="home-hero__panel-card-top">
                      <Users size={13} /> Students
                    </div>
                    <strong>12k+</strong>
                  </div>
                  <div className="home-hero__panel-card home-hero__panel-card--accent">
                    <div className="home-hero__panel-card-top">
                      <Zap size={13} /> Programs
                    </div>
                    <strong>150+</strong>
                  </div>
                </div>

                <div className="home-hero__chart">
                  {[28, 45, 62, 80, 55, 92].map((h, i) => (
                    <motion.div
                      key={i}
                      className="home-hero__chart-bar"
                      style={{ height: `${h}%` }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.07, ease: [0.22, 1, 0.36, 1], transformOrigin: 'bottom' }}
                    />
                  ))}
                </div>
              </div>

              <div className="home-hero__floating home-hero__floating--top">
                <GraduationCap size={16} style={{ color: 'var(--h-brand)' }} />
                <span>Top 1% faculty</span>
              </div>
              <div className="home-hero__floating home-hero__floating--bottom">
                <PlayCircle size={16} style={{ color: 'var(--h-violet)' }} />
                <span>Immersive studios</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────── */}
      <section className="home-stats-bar">
        <div className="container">
          <div className="home-stats-grid">
            {heroStats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.label} className="home-stat-card" {...fadeInView(i * 0.06)}>
                  <div className="home-stat-card__icon">
                    <Icon size={18} />
                  </div>
                  <div className="home-stat-card__body">
                    <strong><AnimatedCounter value={s.value} suffix={s.suffix} /></strong>
                    <span>{s.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PARTNER LOGOS ────────────────────────────── */}
      <section className="home-partners">
        <div className="container">
          <div className="home-partners__inner">
            <p className="home-partners__label">Trusted by teams shaping the next era</p>
            <div className="home-partners__logos">
              {partnerLogos.map((p) => (
                <span key={p} className="home-partner-pill">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENTO — "A new standard" ─────────────────── */}
      <section className="home-section">
        <div className="container">
          <div className="home-section-header">
            <span className="home-eyebrow">A new standard</span>
            <h2>Designed for ambitious students and world-class outcomes.</h2>
            <p>Every detail of the campus experience is crafted to feel polished, welcoming, and deeply intentional — from first contact to graduation day.</p>
          </div>

          <div className="home-bento-grid">
            <motion.article className="home-bento-card home-bento-card--large" {...fadeInView(0)}>
              <div className="home-bento-card__header">
                <div className="home-bento-icon"><Microscope size={20} /></div>
                <div>
                  <span className="home-eyebrow">Research excellence</span>
                  <h3>Immersive labs built for fast-moving discovery.</h3>
                </div>
              </div>
              <ul className="home-bento-list">
                {campusHighlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </motion.article>

            <motion.article className="home-bento-card home-bento-card--accent" {...fadeInView(0.06)}>
              <div className="home-bento-card__header">
                <div className="home-bento-icon"><Rocket size={20} /></div>
                <div>
                  <span className="home-eyebrow">Career velocity</span>
                  <h3>95% of graduates land impactful roles within months.</h3>
                </div>
              </div>
              <div className="home-bento-metric">
                <strong>6 weeks</strong>
                <span>to first internship</span>
              </div>
            </motion.article>

            <motion.article className="home-bento-card" {...fadeInView(0.10)}>
              <div className="home-bento-card__header">
                <div className="home-bento-icon"><Globe2 size={20} /></div>
                <div>
                  <span className="home-eyebrow">Network</span>
                  <h3>Global partnerships that widen every opportunity.</h3>
                </div>
              </div>
              <p>From startup accelerators to Fortune 500 labs, your next chapter is supported by a remarkable professional network.</p>
            </motion.article>

            <motion.article className="home-bento-card" {...fadeInView(0.13)}>
              <div className="home-bento-card__header">
                <div className="home-bento-icon"><CalendarDays size={20} /></div>
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

      {/* ── PROGRAMS ─────────────────────────────────── */}
      <section className="home-section home-programs-section">
        <div className="container">
          <div className="home-section-header">
            <span className="home-eyebrow">Flagship pathways</span>
            <h2>Programs shaped by technology, research, and long-term impact.</h2>
            <p>Each progression is built around modern outcomes — from product engineering to security and AI.</p>
          </div>

          <div className="home-programs-grid">
            {programs.map((program, i) => (
              <motion.article
                key={program.id}
                className={`home-prog-card ${program.accentClass}`}
                {...fadeInView(i * 0.07)}
                whileHover={{ y: -6 }}
              >
                <div className="home-prog-card__top">
                  <div className="home-prog-icon">{program.icon}</div>
                  <span className="home-prog-chip--dark">{program.duration}</span>
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className="home-prog-meta">
                  <span>{program.credits}</span>
                  <span>{program.rate}</span>
                </div>
                <Link to="/courses" className="home-prog-link">
                  Explore pathway <ArrowRight size={14} />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEARNING + TIMELINE ──────────────────────── */}
      <section className="home-section home-learning">
        <div className="container home-learning__grid">
          <motion.div className="home-learning__panel" {...fadeInView(0)}>
            <span className="home-eyebrow">Why it feels different</span>
            <h2>A polished learning environment that delivers premium outcomes.</h2>
            <p>Our experience combines elegant spaces, deep mentorship, and a product-minded approach to education — so students feel supported at every step.</p>
            <div className="home-learning__list">
              {experiencePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="home-learning__item">
                    <div className="home-learning__item-icon"><Icon size={18} /></div>
                    <div>
                      <h3>{pillar.title}</h3>
                      <p>{pillar.copy}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div className="home-learning__timeline" {...fadeInView(0.08)}>
            <div className="home-learning__timeline-header">
              <span className="home-eyebrow">Journey</span>
              <h3>From first semester to first role.</h3>
            </div>
            {timelineEvents.map((event, i) => (
              <div key={event.title} className="home-learning__timeline-item">
                <div className="home-learning__timeline-index">0{i + 1}</div>
                <div>
                  <h4>{event.title}</h4>
                  <p>{event.copy}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FACULTY ──────────────────────────────────── */}
      <section className="home-section home-faculty">
        <div className="container">
          <div className="home-section-header">
            <span className="home-eyebrow">Faculty spotlight</span>
            <h2>Mentors who bring deep expertise and extraordinary care.</h2>
          </div>
          <div className="home-faculty-grid">
            {faculty.map((person, i) => {
              const Icon = person.icon;
              return (
                <motion.article
                  key={person.name}
                  className="home-faculty-card"
                  {...fadeInView(i * 0.07)}
                  whileHover={{ y: -5 }}
                >
                  <div className="home-faculty-card__icon"><Icon size={20} /></div>
                  <h3>{person.name}</h3>
                  <p className="home-faculty-card__title">{person.title}</p>
                  <p>{person.bio}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="home-section home-testimonials">
        <div className="container">
          <div className="home-section-header">
            <span className="home-eyebrow">Student stories</span>
            <h2>Voices from the people shaping the next era with us.</h2>
          </div>
          <div className="home-testimonials-grid">
            {testimonials.map((story, i) => (
              <motion.article
                key={story.name}
                className="home-testimonial-card"
                {...fadeInView(i * 0.07)}
                whileHover={{ y: -5 }}
              >
                <div className="home-testimonial-card__top">
                  {[...Array(5)].map((_, k) => <Star key={k} size={14} fill="currentColor" />)}
                </div>
                <p>"{story.quote}"</p>
                <div className="home-testimonial-card__author">
                  <strong>{story.name}</strong>
                  <span>{story.role}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWS / BLOG ──────────────────────────────── */}
      <section className="home-section home-news">
        <div className="container">
          <div className="home-section-header">
            <span className="home-eyebrow">Latest from campus</span>
            <h2>Fresh thinking, bold ideas, and a close look at student momentum.</h2>
          </div>
          <div className="home-news-grid">
            {featuredPosts.map((post, i) => (
              <motion.div key={post.id} className="home-news-card" {...fadeInView(i * 0.07)}>
                <HomePostCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="home-section home-faq">
        <div className="container home-faq__grid">
          <motion.div className="home-faq__content" {...fadeInView(0)}>
            <span className="home-eyebrow">Questions</span>
            <h2>Everything you need to know before applying.</h2>
            <p>We keep the process clear, personal, and designed to feel calm and confident throughout.</p>
          </motion.div>

          <div className="home-faq__items">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={item.question}
                  className={`home-faq__item${isOpen ? ' is-open' : ''}`}
                  {...fadeInView(i * 0.05)}
                >
                  <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : i)}>
                    <span>{item.question}</span>
                    <ChevronDown size={17} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        key="answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {item.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <section className="home-cta-section">
        <div className="container home-cta-inner">
          <motion.div
            className="home-cta-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <span className="home-eyebrow home-eyebrow--light">Ready to start?</span>
              <h2>Your future begins with a single step.</h2>
              <p>Book a one-to-one admissions conversation and discover which pathway fits your ambition best.</p>
            </div>
            <div className="home-cta-actions">
              <Link to="/register" className="home-hero__button home-hero__button--primary">
                Apply for Fall 2026 <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="home-hero__button home-hero__button--secondary home-hero__button--secondary-dark">
                Schedule a tour
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
