import { STAT_CARDS } from './dashboardData';

// Inline sparkline built from plain SVG — no charting lib required.
function Sparkline({ data, accent }) {
  const W = 80, H = 28, pad = 2;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = (W - pad * 2) / (data.length - 1);

  const points = data.map((v, i) => {
    const x = pad + i * step;
    const y = pad + ((max - v) / range) * (H - pad * 2);
    return `${x},${y}`;
  });

  const polyline = points.join(' ');
  const areaClose = `${points[points.length - 1].split(',')[0]},${H} ${pad},${H}`;
  const areaPath = `M ${points[0]} L ${polyline} L ${areaClose} Z`;

  // Colour map
  const colours = {
    'stat-blue':    { stroke: '#3b82f6', fill: 'rgba(59,130,246,0.12)' },
    'stat-amber':   { stroke: '#f59e0b', fill: 'rgba(245,158,11,0.12)'  },
    'stat-emerald': { stroke: '#10b981', fill: 'rgba(16,185,129,0.12)'  },
    'stat-purple':  { stroke: '#8b5cf6', fill: 'rgba(139,92,246,0.12)'  },
  };
  const { stroke, fill } = colours[accent] || colours['stat-blue'];

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
      <path d={areaPath} fill={fill} />
      <polyline points={polyline} fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Last data point dot */}
      <circle
        cx={points[points.length - 1].split(',')[0]}
        cy={points[points.length - 1].split(',')[1]}
        r="3"
        fill={stroke}
      />
    </svg>
  );
}

// Icon per stat card
const ICONS = {
  courses: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  assignments: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  gpa: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  attendance: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

function StatCard({ card }) {
  const isPositive = card.delta >= 0;

  return (
    <div className={`sc-card ${card.accent}`}>
      {/* Top row: icon + trend */}
      <div className="sc-top">
        <div className="sc-icon-wrap">{ICONS[card.id]}</div>
        <span className={`sc-delta ${isPositive ? 'sc-delta--up' : 'sc-delta--down'}`}>
          {isPositive ? (
            <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          ) : (
            <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          )}
          {Math.abs(card.delta)}
        </span>
      </div>

      {/* Value */}
      <div className="sc-value">{card.value}</div>
      <div className="sc-label">{card.label}</div>

      {/* Sparkline + delta label */}
      <div className="sc-bottom">
        <span className="sc-delta-label">{card.deltaLabel}</span>
        <Sparkline data={card.spark} accent={card.accent} />
      </div>
    </div>
  );
}

export default function StatCards() {
  return (
    <div className="sc-grid">
      {STAT_CARDS.map((card) => (
        <StatCard key={card.id} card={card} />
      ))}
    </div>
  );
}
