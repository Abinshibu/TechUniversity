import { ASSIGNMENTS } from './assignmentsData';

function statIcon(type) {
  const icons = {
    total: (
      <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
      </svg>
    ),
    pending: (
      <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    submitted: (
      <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    graded: (
      <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
      </svg>
    ),
    overdue: (
      <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
      </svg>
    ),
  };
  return icons[type];
}

const STAT_CONFIG = [
  { key: 'total',     label: 'Total',     accent: 'as-default', filterFn: () => true              },
  { key: 'pending',   label: 'Pending',   accent: 'as-blue',    filterFn: (a) => a.status === 'pending'   },
  { key: 'submitted', label: 'Submitted', accent: 'as-emerald', filterFn: (a) => a.status === 'submitted' },
  { key: 'graded',    label: 'Graded',    accent: 'as-purple',  filterFn: (a) => a.status === 'graded'    },
  { key: 'overdue',   label: 'Overdue',   accent: 'as-rose',    filterFn: (a) => a.status === 'overdue' || a.status === 'late' },
];

export default function AssignmentStats({ onStatClick }) {
  return (
    <div className="as-stats-bar">
      {STAT_CONFIG.map((s) => {
        const count = ASSIGNMENTS.filter(s.filterFn).length;
        return (
          <button
            key={s.key}
            className={`as-stat-card ${s.accent}`}
            onClick={() => onStatClick(s.key)}
            type="button"
          >
            <div className="as-stat-icon">{statIcon(s.key)}</div>
            <div className="as-stat-info">
              <span className="as-stat-value">{count}</span>
              <span className="as-stat-label">{s.label}</span>
            </div>
            {s.key === 'overdue' && count > 0 && (
              <span className="as-stat-alert" aria-hidden="true">!</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
