import { Link } from 'react-router-dom';

const FEATURES = [
  {
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    label: '150+ Courses',
    sub: 'Across 6 disciplines',
    color: 'lf-blue',
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    label: 'Live Grade Tracking',
    sub: 'Real-time GPA updates',
    color: 'lf-emerald',
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Smart Scheduling',
    sub: 'AI-assisted timetables',
    color: 'lf-purple',
  },
];

const STATS = [
  { value: '12K+', label: 'Students' },
  { value: '98%',  label: 'Graduation' },
  { value: 'Top 10', label: 'Tech University' },
];

export default function LoginLeftPanel() {
  return (
    <div className="lp-left" aria-hidden="true">
      {/* Background layers */}
      <div className="lp-left-bg" />
      <div className="lp-left-grid" />
      <div className="lp-left-orb lp-left-orb--1" />
      <div className="lp-left-orb lp-left-orb--2" />

      <div className="lp-left-content">
        {/* Logo */}
        <Link to="/" className="lp-logo" tabIndex={-1}>
          <span className="lp-logo-accent">Tech</span>University
        </Link>

        {/* Hero text */}
        <div className="lp-left-hero">
          <div className="lp-left-pill">
            <span className="lp-pill-dot" />
            Student Portal · Fall 2026
          </div>
          <h2 className="lp-left-heading">
            Your academic<br />journey, unified.
          </h2>
          <p className="lp-left-sub">
            Access courses, grades, schedules, and resources — all in one beautifully designed portal.
          </p>
        </div>

        {/* Feature cards */}
        <div className="lp-features">
          {FEATURES.map((f) => (
            <div key={f.label} className={`lp-feature-card ${f.color}`}>
              <div className="lp-feature-icon">{f.icon}</div>
              <div>
                <div className="lp-feature-label">{f.label}</div>
                <div className="lp-feature-sub">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="lp-stats-row">
          {STATS.map((s, i) => (
            <div key={s.label} className="lp-stat">
              <span className="lp-stat-value">{s.value}</span>
              <span className="lp-stat-label">{s.label}</span>
              {i < STATS.length - 1 && (
                <span className="lp-stat-divider" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
