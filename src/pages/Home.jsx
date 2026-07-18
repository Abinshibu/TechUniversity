import { Link } from 'react-router-dom';
import { programs } from '../data/programs';
import posts from '../data/posts';
import PostCard from '../components/PostCard';

const stats = [
  {
    value: '150+',
    label: 'Academic Programs',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    value: '12K+',
    label: 'Active Students',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    value: '850+',
    label: 'Expert Faculty',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    value: '98%',
    label: 'Employment Rate',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const features = [
  {
    title: 'Industry-Led Curriculum',
    description:
      "Courses co-designed with leading tech companies so every skill maps directly to what today's market demands.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    color: 'feature-blue',
  },
  {
    title: 'World-Class Research Labs',
    description:
      'Hands-on access to drone platforms, cleanrooms, supercomputing terminals, and cutting-edge robotics suites.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: 'feature-purple',
  },
  {
    title: 'Global Career Networks',
    description:
      'Exchange programs, internship pipelines, and 50K+ alumni across 80 countries open doors worldwide.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    color: 'feature-green',
  },
];

const admissionSteps = [
  { number: '01', title: 'Submit Application', desc: 'Fill out the online form and pay the portal processing fee.' },
  { number: '02', title: 'Upload Documents', desc: 'Provide transcripts, language tests, and recommendation letters.' },
  { number: '03', title: 'Interview & Assessment', desc: 'Attend an online portfolio review or sit the entrance assessment.' },
  { number: '04', title: 'Secure Enrollment', desc: 'Receive your offer letter and confirm your seat with the tuition deposit.' },
];

const testimonials = [
  {
    initials: 'SJ',
    name: 'Sarah Jenkins',
    role: "CS Graduate '24",
    quote:
      'Tech University gave me the perfect blend of theory and practice. The AI lab and mentorship helped me land a software engineering role before graduation.',
    color: 'avatar-indigo',
  },
  {
    initials: 'MC',
    name: 'Michael Chen',
    role: 'Aerospace Senior',
    quote:
      'Incredibly hands-on. Working on drone aerodynamics with top researchers was the highlight of my academic journey.',
    color: 'avatar-sky',
  },
  {
    initials: 'ER',
    name: 'Emily Rodriguez',
    role: 'Analytics Alumna',
    quote:
      'The business analytics curriculum is highly relevant. Skills I learned here are things I use every single day.',
    color: 'avatar-emerald',
  },
];

const partnerLogos = ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'IBM'];

export default function Home() {
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="home-page">

      {/* ── 1. HERO ── */}
      <section className="home-hero">
        <div className="home-hero-bg" aria-hidden="true" />
        <div className="container home-hero-content">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="home-hero-pill mb-3 d-inline-flex align-items-center gap-2">
                <span className="home-hero-pill-dot" />
                Applications Open — Fall 2026
              </span>
              <h1 className="home-hero-heading">
                Shape Your Future at{' '}
                <span className="home-hero-brand">Tech University</span>
              </h1>
              <p className="home-hero-sub">
                Explore state-of-the-art programs, conduct world-changing research alongside expert faculty, and join a vibrant global community of tomorrow's innovators.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/register" className="btn home-btn-primary btn-lg">
                  Apply Now
                  <svg className="ms-2" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg>
                </Link>
                <Link to="/courses" className="btn home-btn-ghost btn-lg">
                  Explore Courses
                </Link>
              </div>
              <div className="home-hero-trust mt-5">
                <div className="home-hero-avatars">
                  {['A', 'B', 'C', 'D'].map((l) => (
                    <span key={l} className="home-hero-avatar">{l}</span>
                  ))}
                </div>
                <p className="home-hero-trust-text">
                  <strong>12,000+</strong> students already enrolled this year
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="home-hero-img-wrap">
                <img
                  src="/university_hero.png"
                  alt="Tech University campus"
                  className="home-hero-img"
                />
                <div className="home-float-card home-float-card--top">
                  <div className="home-float-icon home-float-icon--blue">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="home-float-label">Accredited University</div>
                    <div className="home-float-sub">Top 50 Global Ranking</div>
                  </div>
                </div>
                <div className="home-float-card home-float-card--bottom">
                  <div className="home-float-icon home-float-icon--green">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="home-float-label">98% Employment Rate</div>
                    <div className="home-float-sub">Within 6 months of graduation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS BAR ── */}
      <section className="home-stats-bar">
        <div className="container">
          <div className="row g-0">
            {stats.map((s, i) => (
              <div key={i} className="col-6 col-lg-3 home-stat-item">
                <div className="home-stat-icon">{s.icon}</div>
                <div className="home-stat-value">{s.value}</div>
                <div className="home-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PARTNER LOGOS ── */}
      <section className="home-partners">
        <div className="container">
          <p className="home-partners-label">Our graduates work at</p>
          <div className="home-partners-strip">
            {partnerLogos.map((name) => (
              <span key={name} className="home-partner-logo">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY TECH UNIVERSITY ── */}
      <section className="home-section">
        <div className="container">
          <div className="home-section-header">
            <span className="home-eyebrow">Why Tech University</span>
            <h2 className="home-section-title">Built for the Next Generation of Innovators</h2>
            <p className="home-section-sub">
              We bridge academic theory with industry standards, nurturing a space where students design modern solutions to global problems.
            </p>
          </div>
          <div className="row g-4">
            {features.map((f) => (
              <div key={f.title} className="col-md-4">
                <div className={`home-feature-card ${f.color}`}>
                  <div className="home-feature-icon">{f.icon}</div>
                  <h5 className="home-feature-title">{f.title}</h5>
                  <p className="home-feature-desc">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TOP PROGRAMS ── */}
      <section className="home-section home-programs-section">
        <div className="container">
          <div className="home-section-header">
            <span className="home-eyebrow">Top Programs</span>
            <h2 className="home-section-title">Explore Our Flagship Degrees</h2>
            <p className="home-section-sub">
              Earn a degree designed with leading companies, taught by active researchers, and proven by our graduate outcomes.
            </p>
          </div>
          <div className="row g-4 mb-4">
            {programs.map((prog) => (
              <div key={prog.id} className="col-lg-4">
                <div className={`home-prog-card ${prog.accentClass}`}>
                  <div className="home-prog-icon">{prog.icon}</div>
                  <h5 className="home-prog-title">{prog.title}</h5>
                  <p className="home-prog-desc">{prog.description}</p>
                  <div className="home-prog-meta">
                    <span className="home-prog-chip">
                      <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="me-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {prog.duration}
                    </span>
                    <span className="home-prog-chip">
                      <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="me-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {prog.rate}
                    </span>
                  </div>
                  <Link to="/courses" className="home-prog-link">
                    View Curriculum
                    <svg className="ms-1" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/courses" className="btn home-btn-outline">
              Browse All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. ADMISSIONS PROCESS ── */}
      <section className="home-section home-admissions-section">
        <div className="container home-admissions-inner">
          <div className="home-section-header">
            <span className="home-eyebrow home-eyebrow--light">How to Join</span>
            <h2 className="home-section-title home-section-title--light">Your Path to Enrollment</h2>
            <p className="home-section-sub home-section-sub--light">
              Four clear steps stand between you and a seat at Tech University.
            </p>
          </div>
          <div className="row g-4">
            {admissionSteps.map((step, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="home-step-card">
                  <div className="home-step-number">{step.number}</div>
                  <h6 className="home-step-title">{step.title}</h6>
                  <p className="home-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/register" className="btn home-btn-white btn-lg">
              Start Your Application
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS ── */}
      <section className="home-section">
        <div className="container">
          <div className="home-section-header">
            <span className="home-eyebrow">Student Stories</span>
            <h2 className="home-section-title">Hear From Our Community</h2>
          </div>
          <div className="row g-4">
            {testimonials.map((t) => (
              <div key={t.name} className="col-md-4">
                <div className="home-testimonial-card">
                  <svg className="home-quote-icon" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="home-testimonial-quote">{t.quote}</p>
                  <div className="home-testimonial-author">
                    <div className={`home-testimonial-avatar ${t.color}`}>{t.initials}</div>
                    <div>
                      <div className="home-testimonial-name">{t.name}</div>
                      <div className="home-testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. LATEST NEWS ── */}
      <section className="home-section">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-end mb-5">
            <div>
              <span className="home-eyebrow">Latest News</span>
              <h2 className="home-section-title mb-0 mt-1">From the Campus</h2>
            </div>
            <Link to="/blog" className="home-view-all-link">
              View all posts
              <svg className="ms-1" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </Link>
          </div>
          <div className="row g-4">
            {featuredPosts.map((post) => (
              <div key={post.id} className="col-md-4">
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CTA BANNER ── */}
      <section className="home-cta-section">
        <div className="container home-cta-inner">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="home-eyebrow home-eyebrow--light mb-2">Ready to start?</span>
              <h2 className="home-cta-heading">Your Future Begins Here</h2>
              <p className="home-cta-sub">
                Join 12,000+ students from 80 countries building careers in technology, science, and business at Tech University.
              </p>
            </div>
            <div className="col-lg-5 d-flex flex-wrap gap-3 justify-content-lg-end">
              <Link to="/register" className="btn home-btn-white btn-lg">
                Apply for Fall 2026
              </Link>
              <Link to="/contact" className="btn home-btn-ghost-light btn-lg">
                Book a Campus Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
