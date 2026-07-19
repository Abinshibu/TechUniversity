import { useState, useRef, useEffect } from 'react';

// ── Helpers ───────────────────────────────────────────────────────────────
function formatDue(iso) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function getCountdown(iso) {
  const now  = Date.now();
  const due  = new Date(iso).getTime();
  const diff = due - now;
  if (diff <= 0) return { label: 'Past due', urgent: true };
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  if (d > 6)  return { label: `${d}d left`,       urgent: false };
  if (d >= 1) return { label: `${d}d ${h}h left`, urgent: d <= 2 };
  return { label: `${h}h left`, urgent: true };
}

// ── Badges ────────────────────────────────────────────────────────────────
const STATUS_CFG = {
  pending:   { label: 'Pending',   cls: 'atr-status--pending'   },
  submitted: { label: 'Submitted', cls: 'atr-status--submitted' },
  graded:    { label: 'Graded',    cls: 'atr-status--graded'    },
  late:      { label: 'Late',      cls: 'atr-status--late'      },
  overdue:   { label: 'Overdue',   cls: 'atr-status--overdue'   },
};

const PRIORITY_CFG = {
  high:   { label: 'High',   cls: 'atr-pri--high'   },
  medium: { label: 'Med',    cls: 'atr-pri--medium' },
  low:    { label: 'Low',    cls: 'atr-pri--low'    },
};

// ── Action menu ───────────────────────────────────────────────────────────
function ActionMenu({ assignment, onClose }) {
  const menuRef = useRef(null);
  useEffect(() => {
    function handler(e) { if (menuRef.current && !menuRef.current.contains(e.target)) onClose(); }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);

  const actions = [
    { label: 'View Details',       icon: 'eye',      show: true },
    { label: 'Submit Assignment',  icon: 'upload',   show: ['pending', 'overdue'].includes(assignment.status) },
    { label: 'Edit Submission',    icon: 'edit',     show: assignment.status === 'submitted' },
    { label: 'Download Files',     icon: 'download', show: assignment.files?.length > 0 },
    { label: 'View Feedback',      icon: 'feedback', show: !!assignment.feedback },
  ].filter((a) => a.show);

  const icons = {
    eye:      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>,
    upload:   <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>,
    edit:     <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>,
    download: <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>,
    feedback: <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>,
  };

  return (
    <div className="atr-action-menu" ref={menuRef} role="menu" onClick={(e) => e.stopPropagation()}>
      {actions.map((a) => (
        <button
          key={a.label}
          className="atr-action-item"
          role="menuitem"
          onClick={() => { alert(`${a.label}: ${assignment.title}`); onClose(); }}
          type="button"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            {icons[a.icon]}
          </svg>
          {a.label}
        </button>
      ))}
    </div>
  );
}

// ── Table row ─────────────────────────────────────────────────────────────
function TableRow({ assignment }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const status   = STATUS_CFG[assignment.status]   || STATUS_CFG.pending;
  const priority = PRIORITY_CFG[assignment.priority] || PRIORITY_CFG.medium;
  const countdown = ['pending', 'overdue', 'late'].includes(assignment.status)
    ? getCountdown(assignment.dueDate)
    : null;

  const gradeDisplay = assignment.marks !== null
    ? `${assignment.marks}/${assignment.totalMarks}`
    : '—';
  const gradePct = assignment.marks !== null
    ? Math.round((assignment.marks / assignment.totalMarks) * 100)
    : null;

  return (
    <tr className={`atr-row atr-row--${assignment.status}`}>
      {/* Assignment info */}
      <td className="atr-cell atr-cell--main">
        <div className={`atr-dot ${assignment.color}`} aria-hidden="true"/>
        <div className="atr-info">
          <span className="atr-title">{assignment.title}</span>
          <div className="atr-meta">
            <span className="atr-course-badge">{assignment.courseCode}</span>
            <span className="atr-type">{assignment.type}</span>
          </div>
        </div>
      </td>

      {/* Course */}
      <td className="atr-cell atr-cell--course">
        <div className="atr-course-info">
          <div className={`atr-instr-avatar ${assignment.color}`}>{assignment.instructorInitials}</div>
          <div>
            <div className="atr-course-name">{assignment.course}</div>
            <div className="atr-instr-name">{assignment.instructor}</div>
          </div>
        </div>
      </td>

      {/* Due date + countdown */}
      <td className="atr-cell atr-cell--due">
        <div className="atr-due-wrap">
          <span className="atr-due-date">{formatDue(assignment.dueDate)}</span>
          {countdown && (
            <span className={`atr-countdown ${countdown.urgent ? 'atr-countdown--urgent' : ''}`}>
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {countdown.label}
            </span>
          )}
          {assignment.submittedDate && (
            <span className="atr-submitted-date">
              Submitted {formatDue(assignment.submittedDate)}
            </span>
          )}
        </div>
      </td>

      {/* Priority */}
      <td className="atr-cell atr-cell--priority">
        <span className={`atr-priority ${priority.cls}`}>{priority.label}</span>
      </td>

      {/* Status */}
      <td className="atr-cell atr-cell--status">
        <span className={`atr-status ${status.cls}`}>{status.label}</span>
      </td>

      {/* Marks */}
      <td className="atr-cell atr-cell--marks">
        {gradePct !== null ? (
          <div className="atr-marks-wrap">
            <span className="atr-marks-num">{gradeDisplay}</span>
            <div className="atr-marks-bar-track">
              <div
                className={`atr-marks-bar-fill ${gradePct >= 80 ? 'atr-marks--good' : gradePct >= 60 ? 'atr-marks--ok' : 'atr-marks--low'}`}
                style={{ width: `${gradePct}%` }}
              />
            </div>
          </div>
        ) : (
          <span className="atr-marks-na">—</span>
        )}
      </td>

      {/* Actions */}
      <td className="atr-cell atr-cell--actions">
        <div className="atr-actions-wrap">
          {(assignment.status === 'pending' || assignment.status === 'overdue') && (
            <button
              className="atr-submit-btn"
              type="button"
              onClick={() => alert(`Submit: ${assignment.title}`)}
            >
              Submit
            </button>
          )}
          <div style={{ position: 'relative' }}>
            <button
              className="atr-menu-btn"
              type="button"
              aria-label="More actions"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>
              </svg>
            </button>
            {menuOpen && (
              <ActionMenu assignment={assignment} onClose={() => setMenuOpen(false)} />
            )}
          </div>
        </div>
      </td>
    </tr>
  );
}

// ── Table ─────────────────────────────────────────────────────────────────
export default function AssignmentTable({ assignments }) {
  if (assignments.length === 0) {
    return (
      <div className="at-empty">
        <svg width="48" height="48" fill="none" stroke="#cbd5e1" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        </svg>
        <p>No assignments match your current filters.</p>
      </div>
    );
  }

  return (
    <div className="at-table-wrap">
      <table className="at-table" role="table">
        <thead>
          <tr className="at-thead-row">
            <th className="at-th">Assignment</th>
            <th className="at-th">Course</th>
            <th className="at-th">Due Date</th>
            <th className="at-th">Priority</th>
            <th className="at-th">Status</th>
            <th className="at-th">Marks</th>
            <th className="at-th at-th--right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((a) => <TableRow key={a.id} assignment={a} />)}
        </tbody>
      </table>
    </div>
  );
}
