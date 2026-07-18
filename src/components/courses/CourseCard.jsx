import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Status badge config
const STATUS = {
  ongoing:   { label: 'Ongoing',   cls: 'cc-status--ongoing'   },
  completed: { label: 'Completed', cls: 'cc-status--completed' },
  upcoming:  { label: 'Upcoming',  cls: 'cc-status--upcoming'  },
};

// ── Grid card ────────────────────────────────────────────────────────────
function GridCard({ course }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const st = STATUS[course.status];

  return (
    <div className="cc-card cc-card--grid">
      {/* Thumbnail */}
      <div className="cc-thumb" style={{ background: course.gradient }}>
        <span className="cc-thumb-abbr">{course.abbr}</span>
        <span className={`cc-status ${st.cls}`}>{st.label}</span>
        {course.status === 'ongoing' && (
          <button
            className="cc-menu-btn"
            onClick={(e) => { e.stopPropagation(); setMenuOpen((v) => !v); }}
            aria-label="Course actions"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="5"  r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>
            </svg>
          </button>
        )}
        {menuOpen && (
          <div className="cc-menu" role="menu">
            {[
              { label: 'View Course',       action: () => {} },
              { label: 'Continue Learning', action: () => {} },
              { label: 'Assignments',       action: () => {} },
              { label: 'Grades',            action: () => {} },
              { label: 'Resources',         action: () => {} },
            ].map((item) => (
              <button key={item.label} className="cc-menu-item" role="menuitem"
                onClick={(e) => { e.stopPropagation(); setMenuOpen(false); item.action(); }}>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="cc-body">
        <div className="cc-meta-row">
          <span className="cc-code">{course.code}</span>
          <span className="cc-credits">{course.credits} cr</span>
        </div>
        <h3 className="cc-title">{course.title}</h3>

        <div className="cc-instructor">
          <div className={`cc-instr-avatar ${course.color}`}>{course.instructorInitials}</div>
          <span>{course.instructor}</span>
        </div>

        {/* Progress */}
        {course.status !== 'upcoming' && (
          <div className="cc-progress-block">
            <div className="cc-progress-row">
              <span className="cc-progress-label">Progress</span>
              <span className="cc-progress-pct">{course.progress}%</span>
            </div>
            <div className="cc-progress-track">
              <div className={`cc-progress-fill ${course.color}`} style={{ width: `${course.progress}%` }} />
            </div>
          </div>
        )}

        {/* Info chips */}
        <div className="cc-chips">
          <span className="cc-chip">
            <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            {course.nextClass}
          </span>
          {course.assignments.pending > 0 && (
            <span className="cc-chip cc-chip--warn">
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
              {course.assignments.pending} due
            </span>
          )}
          <span className="cc-chip">
            <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
            </svg>
            {course.grade}
          </span>
        </div>
      </div>

      {/* Footer actions */}
      <div className="cc-footer">
        {course.status === 'completed' ? (
          <button className="cc-action-btn cc-action-btn--ghost">View Grades</button>
        ) : course.status === 'upcoming' ? (
          <button className="cc-action-btn cc-action-btn--ghost">View Details</button>
        ) : (
          <>
            <button className="cc-action-btn cc-action-btn--primary">Continue</button>
            <button className="cc-action-btn cc-action-btn--ghost">Assignments</button>
          </>
        )}
      </div>
    </div>
  );
}

// ── List row ─────────────────────────────────────────────────────────────
function ListRow({ course }) {
  const st = STATUS[course.status];
  return (
    <div className="cc-list-row">
      <div className={`cc-list-thumb ${course.color}`}>{course.abbr}</div>
      <div className="cc-list-info">
        <div className="cc-list-top">
          <span className="cc-code">{course.code}</span>
          <span className={`cc-status cc-status--sm ${st.cls}`}>{st.label}</span>
        </div>
        <h3 className="cc-list-title">{course.title}</h3>
        <span className="cc-list-instr">{course.instructor}</span>
      </div>
      <div className="cc-list-progress">
        {course.status !== 'upcoming' ? (
          <>
            <div className="cc-progress-track cc-progress-track--slim">
              <div className={`cc-progress-fill ${course.color}`} style={{ width: `${course.progress}%` }} />
            </div>
            <span className="cc-progress-pct cc-progress-pct--sm">{course.progress}%</span>
          </>
        ) : <span className="cc-list-na">—</span>}
      </div>
      <div className="cc-list-meta">
        <span className="cc-chip">{course.credits} credits</span>
        <span className="cc-chip">{course.semester}</span>
      </div>
      <div className="cc-list-grade">{course.grade}</div>
      <div className="cc-list-actions">
        {course.status === 'ongoing' && (
          <button className="cc-action-btn cc-action-btn--primary cc-action-btn--sm">Continue</button>
        )}
        <button className="cc-action-btn cc-action-btn--ghost cc-action-btn--sm">
          {course.status === 'completed' ? 'Grades' : 'View'}
        </button>
      </div>
    </div>
  );
}

export { GridCard, ListRow };
