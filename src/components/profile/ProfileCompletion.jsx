// ProfileCompletion.jsx — Profile completion progress card.
import { STUDENT } from './profileData';
import { Link } from 'react-router-dom';

export default function ProfileCompletion() {
  const { completionPct, completionItems } = STUDENT;
  const done  = completionItems.filter((i) => i.done).length;
  const total = completionItems.length;

  return (
    <div className="pfc-card">
      <div className="pfc-header">
        <div>
          <h3 className="pfc-title">Profile Completion</h3>
          <p className="pfc-sub">Complete your profile to unlock all portal features.</p>
        </div>
        <div className="pfc-pct-badge">{completionPct}%</div>
      </div>

      {/* Progress bar */}
      <div className="pfc-bar-track">
        <div className="pfc-bar-fill" style={{ width: `${completionPct}%` }}/>
      </div>
      <div className="pfc-bar-labels">
        <span>{done} of {total} items completed</span>
        <span>{100 - completionPct}% remaining</span>
      </div>

      {/* Checklist */}
      <div className="pfc-checklist">
        {completionItems.map((item) => (
          <div key={item.label} className={`pfc-check-item ${item.done ? 'pfc-check-item--done' : ''}`}>
            <div className={`pfc-check-dot ${item.done ? 'pfc-check-dot--done' : ''}`}>
              {item.done && (
                <svg width="9" height="9" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              )}
            </div>
            <span className="pfc-check-label">{item.label}</span>
            {!item.done && (
              <button className="pfc-add-btn" onClick={() => alert(`Add: ${item.label}`)} type="button">
                Add
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
