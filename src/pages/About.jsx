const leaders = [
  {
    initials: 'AT',
    name: 'Dr. Aris Thorne',
    role: 'President & Vice Chancellor',
    bio: 'Pioneering educationist with 25+ years leading high-tech academic programs across four continents.',
    color: 'leader-indigo',
  },
  {
    initials: 'ER',
    name: 'Prof. Elena Rostova',
    role: 'Provost & VP of Academics',
    bio: 'Renowned computer scientist focused on modern industry-aligned curriculum design and student outcomes.',
    color: 'leader-sky',
  },
  {
    initials: 'MV',
    name: 'Dr. Marcus Vance',
    role: 'Dean of Research',
    bio: 'Leading aerospace researcher with $40M+ in grants from global technology foundations.',
    color: 'leader-emerald',
  },
  {
    initials: 'SJ',
    name: 'Sarah Jenkins',
    role: 'Director of Student Affairs',
    bio: 'Committed advocate for student wellbeing, campus inclusivity, and equitable access to resources.',
    color: 'leader-amber',
  },
];

const values = [
  {
    title: 'Academic Excellence',
    desc: 'A rigorous curriculum co-designed with industry experts, prioritising critical thinking, technical depth, and high-impact scholarship.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    accent: 'about-value-blue',
  },
  {
    title: 'Innovative Research',
    desc: 'Tackling global challenges in AI, aerospace, and biotech — bridging pure theory with transformative real-world applications.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    accent: 'about-value-purple',
  },
  {
    title: 'Inclusivity & Community',
    desc: 'An open campus that celebrates diverse perspectives and ensures every student has equitable access to opportunity.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    accent: 'about-value-green',
  },
];

const timeline = [
  {
    year: '1998',
    title: 'The Foundation',
    desc: 'Established with a vision to integrate computing disciplines with industrial business models. Welcomed an inaugural class of 200 students.',
  },
  {
    year: '2006',
    title: 'Research Hub Initiative',
    desc: 'Launched the Aerospace & Robotics Innovation Lab, securing major government grants and forging international corporate sponsorships.',
  },
  {
    year: '2015',
    title: 'Smart Campus Expansion',
    desc: 'Inaugurated our 100-acre modern campus with green buildings, specialised AI labs, and high-performance cleanroom facilities.',
  },
  {
    year: 'Today',
    title: 'Global Innovation Leader',
    desc: 'Home to 12,000+ students from 80+ countries, ranked top-tier for graduate employment and industry career transitions worldwide.',
  },
];

const rankings = [
  {
    badge: '#1',
    label: 'in Innovation',
    desc: 'Nationally recognised for pioneering educational models and student-led startup incubators.',
    color: 'rank-gold',
  },
  {
    badge: 'Top 50',
    label: 'Global Tech University',
    desc: 'Ranked among the top 50 institutions worldwide for computer science and engineering.',
    color: 'rank-blue',
  },
  {
    badge: 'ABET',
    label: 'Fully Accredited',
    desc: 'All engineering and computing programs carry full accreditation from leading global boards.',
    color: 'rank-green',
  },
];

export default function About() {
  return (
    <div className="about-page">

      {/* ── 1. HERO ── */}
      <section className="about-hero">
        <div className="about-hero-bg" aria-hidden="true" />
        <div className="container about-hero-content">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="about-eyebrow">About Our Institution</span>
              <h1 className="about-hero-heading">
                Fostering Excellence,<br />
                <span className="about-hero-brand">Driving Innovation</span>
              </h1>
              <p className="about-hero-sub">
                Founded at the intersection of technology and humanity, Tech University is a leading global institution committed to cutting-edge education, world-changing research, and an inclusive environment where tomorrow's leaders are empowered to thrive.
              </p>
              <div className="about-hero-stats">
                <div className="about-hero-stat">
                  <span className="about-hero-stat-value">1998</span>
                  <span className="about-hero-stat-label">Founded</span>
                </div>
                <div className="about-hero-stat-divider" />
                <div className="about-hero-stat">
                  <span className="about-hero-stat-value">12K+</span>
                  <span className="about-hero-stat-label">Students</span>
                </div>
                <div className="about-hero-stat-divider" />
                <div className="about-hero-stat">
                  <span className="about-hero-stat-value">850+</span>
                  <span className="about-hero-stat-label">Faculty</span>
                </div>
                <div className="about-hero-stat-divider" />
                <div className="about-hero-stat">
                  <span className="about-hero-stat-value">80+</span>
                  <span className="about-hero-stat-label">Countries</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-hero-img-wrap">
                <img
                  src="/campus_map.png"
                  alt="Tech University campus aerial view"
                  className="about-hero-img"
                />
                <div className="about-hero-badge">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Top 50 Global University</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. RANKINGS ── */}
      <section className="about-section">
        <div className="container">
          <div className="about-section-header">
            <span className="about-eyebrow">Recognition</span>
            <h2 className="about-section-title">Rankings & Accreditation</h2>
          </div>
          <div className="row g-4">
            {rankings.map((r) => (
              <div key={r.label} className="col-md-4">
                <div className={`about-rank-card ${r.color}`}>
                  <div className="about-rank-badge">{r.badge}</div>
                  <div className="about-rank-label">{r.label}</div>
                  <p className="about-rank-desc">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. MISSION & VALUES ── */}
      <section className="about-section about-values-section">
        <div className="container">
          <div className="about-section-header">
            <span className="about-eyebrow">Our Core Purpose</span>
            <h2 className="about-section-title">Mission & Values</h2>
            <p className="about-section-sub">
              Everything we do is guided by a commitment to rigorous academics, breakthrough research, and a community where every student belongs.
            </p>
          </div>
          <div className="row g-4">
            {values.map((v) => (
              <div key={v.title} className="col-md-4">
                <div className={`about-value-card ${v.accent}`}>
                  <div className="about-value-icon">{v.icon}</div>
                  <h5 className="about-value-title">{v.title}</h5>
                  <p className="about-value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. LEADERSHIP ── */}
      <section className="about-section">
        <div className="container">
          <div className="about-section-header">
            <span className="about-eyebrow">Meet Our Team</span>
            <h2 className="about-section-title">University Leadership</h2>
            <p className="about-section-sub">
              Visionary academics and administrators who have dedicated their careers to advancing education and research.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {leaders.map((l) => (
              <div key={l.name} className="col-sm-6 col-lg-3">
                <div className="about-leader-card">
                  <div className={`about-leader-avatar ${l.color}`}>{l.initials}</div>
                  <h6 className="about-leader-name">{l.name}</h6>
                  <span className="about-leader-role">{l.role}</span>
                  <p className="about-leader-bio">{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CAMPUS LIFE ── */}
      <section className="about-section about-campus-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 order-lg-2">
              <div className="about-campus-img-wrap">
                <img
                  src="/campus_life.png"
                  alt="Students on Tech University campus"
                  className="about-campus-img"
                />
                <div className="about-campus-chip">
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  60+ Student Clubs
                </div>
              </div>
            </div>
            <div className="col-lg-7 order-lg-1">
              <span className="about-eyebrow">Beyond the Classroom</span>
              <h2 className="about-section-title mt-2">Vibrant Campus Life</h2>
              <p className="about-body-text">
                Growth at Tech University happens everywhere — not just in lecture halls. Our students run over 60 active clubs and societies, from competitive coding leagues and aerospace design teams to music ensembles, sports squads, and community volunteering groups.
              </p>
              <div className="about-campus-features">
                {[
                  'Modern sports & recreation complex',
                  'Student-run innovation hubs',
                  'Collaborative co-working spaces',
                  'Global exchange programs',
                ].map((item) => (
                  <div key={item} className="about-campus-feature-item">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="about-campus-check">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. TIMELINE ── */}
      <section className="about-section about-timeline-section">
        <div className="container">
          <div className="about-section-header">
            <span className="about-eyebrow about-eyebrow--light">Our Journey</span>
            <h2 className="about-section-title about-section-title--light">History & Milestones</h2>
          </div>
          <div className="about-timeline">
            {timeline.map((item, i) => (
              <div key={item.year} className={`about-timeline-item ${i % 2 === 0 ? 'about-timeline-item--left' : 'about-timeline-item--right'}`}>
                <div className="about-timeline-card">
                  <div className="about-timeline-year">{item.year}</div>
                  <h6 className="about-timeline-title">{item.title}</h6>
                  <p className="about-timeline-desc">{item.desc}</p>
                </div>
                <div className="about-timeline-dot" />
              </div>
            ))}
            <div className="about-timeline-line" aria-hidden="true" />
          </div>
        </div>
      </section>

    </div>
  );
}
