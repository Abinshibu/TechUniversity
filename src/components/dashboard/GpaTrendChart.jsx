import { GPA_TREND } from './dashboardData';

const W = 480, H = 160, PAD = { top: 16, right: 16, bottom: 32, left: 36 };
const GPA_MIN = 3.0, GPA_MAX = 4.0;

function toX(i, total) {
  return PAD.left + (i / (total - 1)) * (W - PAD.left - PAD.right);
}
function toY(gpa) {
  return PAD.top + ((GPA_MAX - gpa) / (GPA_MAX - GPA_MIN)) * (H - PAD.top - PAD.bottom);
}

export default function GpaTrendChart() {
  const data = GPA_TREND;
  const points = data.map((d, i) => ({ x: toX(i, data.length), y: toY(d.gpa), ...d }));
  const polyline = points.map((p) => `${p.x},${p.y}`).join(' ');
  const lastPt = points[points.length - 1];

  // Area fill path
  const areaPath =
    `M ${points[0].x},${H - PAD.bottom} ` +
    points.map((p) => `L ${p.x},${p.y}`).join(' ') +
    ` L ${lastPt.x},${H - PAD.bottom} Z`;

  // Y-axis grid lines at 3.0, 3.25, 3.5, 3.75, 4.0
  const gridValues = [3.0, 3.25, 3.5, 3.75, 4.0];

  return (
    <div className="dash-card">
      <div className="dash-card-header">
        <div className="gpa-header-left">
          <h3 className="dash-card-title">GPA Trend</h3>
          <span className="gpa-current-badge">Current: 3.82</span>
        </div>
        <span className="gpa-range-label">6 semesters</span>
      </div>

      <div className="dash-card-body gpa-body">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="xMidYMid meet"
          className="gpa-svg"
          role="img"
          aria-label="GPA trend chart"
        >
          <defs>
            <linearGradient id="gpaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#3b82f6" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.01" />
            </linearGradient>
          </defs>

          {/* Grid lines + Y labels */}
          {gridValues.map((v) => {
            const y = toY(v);
            return (
              <g key={v}>
                <line
                  x1={PAD.left} y1={y}
                  x2={W - PAD.right} y2={y}
                  stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 3"
                />
                <text x={PAD.left - 6} y={y + 4} textAnchor="end" fontSize="9" fill="#94a3b8" fontFamily="Inter, sans-serif">
                  {v.toFixed(2)}
                </text>
              </g>
            );
          })}

          {/* Area fill */}
          <path d={areaPath} fill="url(#gpaGrad)" />

          {/* Line */}
          <polyline
            points={polyline}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points + labels */}
          {points.map((p, i) => (
            <g key={i}>
              {/* X-axis label */}
              <text x={p.x} y={H - PAD.bottom + 14} textAnchor="middle" fontSize="9" fill="#94a3b8" fontFamily="Inter, sans-serif">
                {p.semester}
              </text>
              {/* Dot */}
              <circle cx={p.x} cy={p.y} r="5" fill="#fff" stroke="#3b82f6" strokeWidth="2.5" />
              {/* GPA label above dot */}
              <text x={p.x} y={p.y - 10} textAnchor="middle" fontSize="9" fontWeight="700" fill="#1e40af" fontFamily="Plus Jakarta Sans, sans-serif">
                {p.gpa.toFixed(2)}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
