// GradeCharts.jsx — Analytics tab: GPA trend SVG line, grade distribution donut, semester bars.
import { SEMESTER_SUMMARIES, GRADE_DISTRIBUTION } from './gradesData';

/* ── GPA Trend line chart ─────────────────────────────────────────────── */
function GpaTrend() {
  const W = 460, H = 150, PL = 36, PR = 16, PT = 16, PB = 28;
  const data   = SEMESTER_SUMMARIES.filter((s) => s.gpa !== null);
  const minGpa = 3.0, maxGpa = 4.0;
  const toX    = (i) => PL + (i / (data.length - 1)) * (W - PL - PR);
  const toY    = (g) => PT + ((maxGpa - g) / (maxGpa - minGpa)) * (H - PT - PB);
  const pts    = data.map((d, i) => ({ x: toX(i), y: toY(d.gpa), ...d }));
  const poly   = pts.map((p) => `${p.x},${p.y}`).join(' ');
  const area   = `M ${pts[0].x},${H - PB} ` + pts.map((p) => `L ${p.x},${p.y}`).join(' ') + ` L ${pts[pts.length-1].x},${H-PB} Z`;
  const gridVals = [3.0, 3.25, 3.5, 3.75, 4.0];

  return (
    <div className="gch-card">
      <div className="gch-card-header">
        <h3 className="gch-title">GPA Trend</h3>
        <span className="gch-badge">6 semesters</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="gch-svg" role="img" aria-label="GPA trend">
        <defs>
          <linearGradient id="gchGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.01"/>
          </linearGradient>
        </defs>
        {gridVals.map((v) => {
          const y = toY(v);
          return (
            <g key={v}>
              <line x1={PL} y1={y} x2={W-PR} y2={y} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 3"/>
              <text x={PL-4} y={y+4} textAnchor="end" fontSize="8" fill="#94a3b8" fontFamily="Inter, sans-serif">{v.toFixed(2)}</text>
            </g>
          );
        })}
        <path d={area} fill="url(#gchGrad)"/>
        <polyline points={poly} fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {pts.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="5" fill="#fff" stroke="#3b82f6" strokeWidth="2.5"/>
            <text x={p.x} y={p.y-10} textAnchor="middle" fontSize="8" fontWeight="700" fill="#1e40af" fontFamily="Plus Jakarta Sans, sans-serif">{p.gpa.toFixed(2)}</text>
            <text x={p.x} y={H-PB+14} textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="Inter, sans-serif">{p.short}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ── Grade distribution donut ─────────────────────────────────────────── */
function GradeDonut() {
  const SIZE = 120, STROKE = 18, R = (SIZE - STROKE) / 2;
  const total = GRADE_DISTRIBUTION.reduce((s, d) => s + d.count, 0);
  const circ  = 2 * Math.PI * R;
  let cumPct  = 0;

  const slices = GRADE_DISTRIBUTION.map((d) => {
    const pct    = d.count / total;
    const offset = circ - pct * circ;
    const rotate = cumPct * 360 - 90;
    cumPct += pct;
    return { ...d, offset, rotate };
  });

  return (
    <div className="gch-card">
      <div className="gch-card-header">
        <h3 className="gch-title">Grade Distribution</h3>
        <span className="gch-badge">{total} grades</span>
      </div>
      <div className="gch-donut-row">
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} role="img" aria-label="Grade distribution donut">
          {slices.map((s, i) => (
            <circle key={i} cx={SIZE/2} cy={SIZE/2} r={R} fill="none"
              stroke={s.color} strokeWidth={STROKE} strokeLinecap="butt"
              strokeDasharray={`${2*Math.PI*R*(s.count/total) - 2} ${circ}`}
              transform={`rotate(${s.rotate} ${SIZE/2} ${SIZE/2})`}/>
          ))}
          <text x="50%" y="48%" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="800" fill="#0f172a" fontFamily="Plus Jakarta Sans, sans-serif">{total}</text>
          <text x="50%" y="62%" textAnchor="middle" dominantBaseline="middle" fontSize="7" fill="#94a3b8" fontFamily="Inter, sans-serif">GRADES</text>
        </svg>
        <div className="gch-donut-legend">
          {GRADE_DISTRIBUTION.map((d) => (
            <div key={d.grade} className="gch-legend-item">
              <span className="gch-legend-dot" style={{ background: d.color }}/>
              <span className="gch-legend-label">{d.grade}</span>
              <span className="gch-legend-count">{d.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Semester bar comparison ──────────────────────────────────────────── */
function SemesterBars() {
  const data    = SEMESTER_SUMMARIES.filter((s) => s.gpa !== null);
  const maxGpa  = 4.0;
  const barH    = 22;
  return (
    <div className="gch-card gch-card--full">
      <div className="gch-card-header">
        <h3 className="gch-title">Semester Comparison</h3>
      </div>
      <div className="gch-bars">
        {data.map((s) => {
          const pct = Math.round((s.gpa / maxGpa) * 100);
          return (
            <div key={s.short} className="gch-bar-row">
              <span className="gch-bar-label">{s.short}</span>
              <div className="gch-bar-track">
                <div className="gch-bar-fill" style={{ width: `${pct}%` }}/>
                <span className="gch-bar-val">{s.gpa.toFixed(2)}</span>
              </div>
              <span className="gch-bar-cr">{s.credits} cr</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function GradeCharts() {
  return (
    <div className="gch-root">
      <div className="gch-top-row">
        <GpaTrend />
        <GradeDonut />
      </div>
      <SemesterBars />
    </div>
  );
}
