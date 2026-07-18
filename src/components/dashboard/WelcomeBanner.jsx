import { Link } from 'react-router-dom';

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

function formatDate() {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
  });
}

const MOTIVATIONAL = [
  'Keep pushing — great things take time.',
  'Every lecture is a step closer to your goal.',
  'Consistency is the foundation of excellence.',
  'Your effort today shapes your future tomorrow.',
];

function getMotivation() {
  return MOTIVATIONAL[new Date().getDay() % MOTIVATIONAL.length];
}

export default function WelcomeBanner() {
  return (
    <div className="wb-root">
      {/* Background decoration */}
      <div className="wb-bg" aria-hidden="true" />
      <div className="wb-orb wb-orb--1" aria-hidden="true" />
      <div className="wb-orb wb-orb--2" aria-hidden="true" />

      <div className="wb-content">
        {/* Left: text */}
        <div className="wb-text">
          <div className="wb-meta-row">
            <span className="wb-semester-pill">
              <span className="wb-semester-dot" aria-hidden="true" />
              Fall Semester 2026 · Week 8 of 16
            </span>
            <span className="wb-date">{formatDate()}</span>
          </div>

          <h2 className="wb-heading">
            {getGreeting()}, Alex&nbsp;
            <span className="wb-wave" aria-hidden="true">👋</span>
          </h2>

          <p className="wb-sub">{getMotivation()}</p>

          <div className="wb-actions">
            <Link to="/dashboard/courses" className="wb-btn-primary">
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Enrol in Course
            </Link>
            <Link to="/dashboard/schedule" className="wb-btn-ghost">
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              View Schedule
            </Link>
          </div>
        </div>

        {/* Right: quick-stat chips */}
        <div className="wb-chips" aria-label="Quick stats">
          <div className="wb-chip">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="wb-chip-value">6</span>
            <span className="wb-chip-label">Active courses</span>
          </div>
          <div className="wb-chip">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="wb-chip-value">3</span>
            <span className="wb-chip-label">Due this week</span>
          </div>
          <div className="wb-chip">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="wb-chip-value">3.82</span>
            <span className="wb-chip-label">Current GPA</span>
          </div>
          <div className="wb-chip">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="wb-chip-value">74</span>
            <span className="wb-chip-label">Credits done</span>
          </div>
        </div>
      </div>
    </div>
  );
}
