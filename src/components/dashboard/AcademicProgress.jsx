import { PROGRESS } from './dashboardData';

// SVG circular progress ring
function ProgressRing({ pct, size = 120, stroke = 9 }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      {/* Track */}
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none"
        stroke="#e2e8f0"
        strokeWidth={stroke}
      />
      {/* Progress arc */}
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none"
        stroke="url(#ringGrad)"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: 'stroke-dashoffset 1s ease' }}
      />
      <defs>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      {/* Center text */}
      <text x="50%" y="46%" textAnchor="middle" dominantBaseline="middle" fontSize="18" fontWeight="800" fill="#0f172a" fontFamily="Plus Jakarta Sans, sans-serif">
        {pct}%
      </text>
      <text x="50%" y="62%" textAnchor="middle" dominantBaseline="middle" fontSize="9" fill="#94a3b8" fontFamily="Inter, sans-serif" letterSpacing="0.5">
        COMPLETE
      </text>
    </svg>
  );
}

// Thin horizontal progress bar for each course
function CourseBar({ course }) {
  return (
    <div className="ap-course-row">
      <div className="ap-course-meta">
        <div className="ap-course-info">
          <span className="ap-course-name">{course.name}</span>
          <span className="ap-course-code">{course.code}</span>
        </div>
        <span className="ap-course-pct">{course.pct}%</span>
      </div>
      <div className="ap-bar-track">
        <div
          className={`ap-bar-fill ${course.color}`}
          style={{ width: `${course.pct}%` }}
          role="progressbar"
          aria-valuenow={course.pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

export default function AcademicProgress() {
  const { semesterCompletion, creditsCompleted, creditsTotal, courses } = PROGRESS;
  const creditsPct = Math.round((creditsCompleted / creditsTotal) * 100);

  return (
    <div className="dash-card ap-card">
      <div className="dash-card-header">
        <h3 className="dash-card-title">Academic Progress</h3>
        <span className="ap-semester-tag">Fall 2026</span>
      </div>

      <div className="dash-card-body">
        {/* Ring + credit stats */}
        <div className="ap-ring-row">
          <ProgressRing pct={semesterCompletion} />
          <div className="ap-ring-stats">
            <div className="ap-ring-stat">
              <span className="ap-ring-stat-value">{creditsCompleted}</span>
              <span className="ap-ring-stat-label">Credits Completed</span>
            </div>
            <div className="ap-ring-stat-divider" />
            <div className="ap-ring-stat">
              <span className="ap-ring-stat-value">{creditsTotal - creditsCompleted}</span>
              <span className="ap-ring-stat-label">Credits Remaining</span>
            </div>
            <div className="ap-ring-stat-divider" />
            <div className="ap-ring-stat">
              <span className="ap-ring-stat-value">{creditsPct}%</span>
              <span className="ap-ring-stat-label">Degree Progress</span>
            </div>
          </div>
        </div>

        {/* Credits overall bar */}
        <div className="ap-overall-bar">
          <div className="ap-overall-bar-track">
            <div className="ap-overall-bar-fill" style={{ width: `${creditsPct}%` }} />
          </div>
          <div className="ap-overall-bar-labels">
            <span>{creditsCompleted} completed</span>
            <span>{creditsTotal} total</span>
          </div>
        </div>

        {/* Per-course bars */}
        <div className="ap-courses">
          <div className="ap-courses-heading">Course Progress</div>
          {courses.map((c) => (
            <CourseBar key={c.code} course={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
