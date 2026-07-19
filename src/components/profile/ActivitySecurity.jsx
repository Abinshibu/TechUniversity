// ActivitySecurity.jsx — Recent activity timeline + security settings panel.
import { useState } from 'react';
import { ACTIVITY, STUDENT } from './profileData';

const ACT_ICONS = {
  grade:    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>,
  submit:   <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>,
  enroll:   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>,
  attend:   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>,
  announce: <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>,
};

function RecentActivity() {
  return (
    <div className="pf-section-card">
      <div className="pf-section-header">
        <span className="pf-section-icon">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </span>
        <h3 className="pf-section-title">Recent Activity</h3>
      </div>
      <div className="pf-act-list">
        {ACTIVITY.map((a, i) => (
          <div key={a.id} className={`pf-act-item ${i < ACTIVITY.length - 1 ? 'pf-act-item--lined' : ''}`}>
            <div className="pf-act-icon-col">
              <div className={`pf-act-icon ${a.color}`}>
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                  {ACT_ICONS[a.type]}
                </svg>
              </div>
              {i < ACTIVITY.length - 1 && <div className="pf-act-connector"/>}
            </div>
            <div className="pf-act-content">
              <span className="pf-act-title">{a.title}</span>
              <span className="pf-act-detail">{a.detail}</span>
              <span className="pf-act-time">{a.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SecurityPanel() {
  const [show, setShow] = useState(false);
  const [twoFA, setTwoFA] = useState(false);
  return (
    <div className="pf-section-card">
      <div className="pf-section-header">
        <span className="pf-section-icon">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
        </span>
        <h3 className="pf-section-title">Security & Account</h3>
      </div>

      {/* Change password */}
      <div className="pf-sec-block">
        <div className="pf-sec-row">
          <div>
            <div className="pf-sec-label">Password</div>
            <div className="pf-sec-sub">Last changed 3 months ago</div>
          </div>
          <button className="pf-sec-btn" onClick={() => setShow((v) => !v)}>
            {show ? 'Cancel' : 'Change Password'}
          </button>
        </div>
        {show && (
          <div className="pf-sec-form">
            <input type="password" className="pf-sec-input" placeholder="Current password"/>
            <input type="password" className="pf-sec-input" placeholder="New password"/>
            <input type="password" className="pf-sec-input" placeholder="Confirm new password"/>
            <button className="pf-sec-save" onClick={() => { alert('Password update — wire to backend.'); setShow(false); }}>
              Update Password
            </button>
          </div>
        )}
      </div>

      {/* 2FA toggle */}
      <div className="pf-sec-block pf-sec-block--border">
        <div className="pf-sec-row">
          <div>
            <div className="pf-sec-label">Two-Factor Authentication</div>
            <div className="pf-sec-sub">{twoFA ? 'Enabled · Using authenticator app' : 'Disabled · Add extra login protection'}</div>
          </div>
          <button
            className={`pf-toggle ${twoFA ? 'pf-toggle--on' : ''}`}
            onClick={() => setTwoFA((v) => !v)}
            role="switch" aria-checked={twoFA} aria-label="Toggle 2FA"
          >
            <span className="pf-toggle-thumb"/>
          </button>
        </div>
      </div>

      {/* Session */}
      <div className="pf-sec-block pf-sec-block--border">
        <div className="pf-sec-row">
          <div>
            <div className="pf-sec-label">Active Sessions</div>
            <div className="pf-sec-sub">2 devices · Last login from Chrome on Windows</div>
          </div>
          <button className="pf-sec-btn pf-sec-btn--danger" onClick={() => alert('All other sessions ended.')}>
            Sign Out All
          </button>
        </div>
      </div>

      {/* Delete account */}
      <div className="pf-sec-block pf-sec-block--border">
        <div className="pf-sec-row">
          <div>
            <div className="pf-sec-label pf-sec-label--danger">Delete Account</div>
            <div className="pf-sec-sub">This action is irreversible. Contact admin to proceed.</div>
          </div>
          <button className="pf-sec-btn pf-sec-btn--danger" onClick={() => alert('Contact admin to delete your account.')}>
            Request Deletion
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ActivitySecurity() {
  return (
    <div className="pf-act-sec-grid">
      <RecentActivity />
      <SecurityPanel />
    </div>
  );
}
