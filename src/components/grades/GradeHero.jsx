// GradeHero.jsx — Top banner with CGPA ring, key stats, and quick actions.

import { STUDENT_SUMMARY } from './gradesData';

function GpaRing({ gpa, max = 4.0, size = 130, stroke = 10 }) {
  const pct    = (gpa / max) * 100;
  const r      = (size - stroke) / 2;
  const circ   = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-label={`CGPA ${gpa}`}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth={stroke}/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="url(#heroGrad)"
        strokeWidth={stroke} strokeLinecap="round"
        strokeDasharray={circ} strokeDashoffset={offset}
        transform={`rotate(-90 ${size/2} ${size/2})`}
        style={{ transition: 'stroke-dashoffset 1s ease' }}/>
      <defs>
        <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60a5fa"/><stop offset="100%" stopColor="#a5b4fc"/>
        </linearGradient>
      </defs>
      <text x="50%" y="44%" textAnchor="middle" dominantBaseline="middle"
        fontSize="22" fontWeight="900" fill="#ffffff" fontFamily="Plus Jakarta Sans, sans-serif">
        {gpa}
      </text>
      <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle"
        fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="Inter, sans-serif" letterSpacing="0.8">
        CGPA
      </text>
    </svg>
  );
}

const STATS = [
  { label: 'Current GPA',    value: '3.82', sub: 'Fall 2026 (projected)' },
  { label: 'Credits Earned', value: '37',   sub: 'of 120 required'       },
  { label: 'Class Rank',     value: '#12',  sub: 'of 280 students'        },
  { label: 'Standing',       value: "Dean's List", sub: 'Top 5%'          },
];

export default function GradeHero() {
  const s = STUDENT_SUMMARY;
  const creditsPct = Math.round((s.totalCredits / s.requiredCredits) * 100);

  return (
    <div className="gh-root">
      <div className="gh-bg"  aria-hidden="true"/>
      <div className="gh-orb gh-orb--1" aria-hidden="true"/>
      <div className="gh-orb gh-orb--2" aria-hidden="true"/>

      <div className="gh-content">
        {/* Left: ring + program */}
        <div className="gh-left">
          <GpaRing gpa={s.cgpa} />
          <div className="gh-program">
            <div className="gh-program-name">{s.program}</div>
            <div className="gh-program-sem">{s.currentSemester}</div>
          </div>
        </div>

        {/* Centre: stat chips */}
        <div className="gh-stats">
          {STATS.map((st) => (
            <div key={st.label} className="gh-stat-chip">
              <span className="gh-stat-value">{st.value}</span>
              <span className="gh-stat-label">{st.label}</span>
              <span className="gh-stat-sub">{st.sub}</span>
            </div>
          ))}
        </div>

        {/* Right: credit bar + actions */}
        <div className="gh-right">
          <div className="gh-credit-block">
            <div className="gh-credit-row">
              <span className="gh-credit-label">Degree Progress</span>
              <span className="gh-credit-pct">{creditsPct}%</span>
            </div>
            <div className="gh-credit-track">
              <div className="gh-credit-fill" style={{ width: `${creditsPct}%` }}/>
            </div>
            <div className="gh-credit-sub">{s.totalCredits} of {s.requiredCredits} credits completed</div>
          </div>

          <div className="gh-actions">
            <button className="gh-action-btn gh-action-btn--primary" onClick={() => alert('Downloading grade report…')}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Download Report
            </button>
            <button className="gh-action-btn gh-action-btn--ghost" onClick={() => alert('Opening transcript…')}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              View Transcript
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
