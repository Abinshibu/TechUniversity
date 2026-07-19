// ProfileHeader.jsx — Cover banner, avatar, name, quick actions, status badges.
import { STUDENT } from './profileData';

const STATUS_COLOURS = {
  'Active':    { bg: '#dcfce7', text: '#15803d' },
  'On Leave':  { bg: '#fef3c7', text: '#b45309' },
  'Graduated': { bg: '#eff6ff', text: '#1d4ed8' },
  'Suspended': { bg: '#fee2e2', text: '#dc2626' },
};

export default function ProfileHeader() {
  const s  = STUDENT;
  const st = STATUS_COLOURS[s.status] || STATUS_COLOURS['Active'];

  return (
    <div className="ph-root">
      {/* ── Cover banner ── */}
      <div className="ph-cover" aria-hidden="true">
        <div className="ph-cover-gradient"/>
        <div className="ph-cover-grid"/>
        <div className="ph-cover-orb ph-cover-orb--1"/>
        <div className="ph-cover-orb ph-cover-orb--2"/>
      </div>

      {/* ── Bottom card ── */}
      <div className="ph-card">
        {/* Avatar */}
        <div className="ph-avatar-wrap">
          <div className="ph-avatar">
            {s.avatar
              ? <img src={s.avatar} alt={s.name} className="ph-avatar-img"/>
              : <span className="ph-avatar-initials">{s.initials}</span>
            }
          </div>
          <div className="ph-avatar-status-dot" title={s.status}/>
        </div>

        {/* Info + actions */}
        <div className="ph-info">
          <div className="ph-info-left">
            <div className="ph-name-row">
              <h1 className="ph-name">{s.name}</h1>
              <span className="ph-status-pill" style={{ background: st.bg, color: st.text }}>
                {s.status}
              </span>
              {s.standing && (
                <span className="ph-standing-pill">
                  <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                  </svg>
                  {s.standing}
                </span>
              )}
            </div>

            <div className="ph-meta-row">
              <span className="ph-meta-item">
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2"/>
                </svg>
                {s.id}
              </span>
              <span className="ph-meta-sep" aria-hidden="true">·</span>
              <span className="ph-meta-item">{s.program}</span>
              <span className="ph-meta-sep" aria-hidden="true">·</span>
              <span className="ph-meta-item">{s.department}</span>
              <span className="ph-meta-sep" aria-hidden="true">·</span>
              <span className="ph-meta-item">{s.semester}</span>
            </div>

            <div className="ph-advisor-row">
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              Advisor: <a href={`mailto:${s.advisorEmail}`} className="ph-advisor-link">{s.advisor}</a>
            </div>
          </div>

          {/* Quick actions */}
          <div className="ph-actions">
            <button className="ph-btn ph-btn--primary" onClick={() => alert('Edit Profile — wire up when backend is ready.')}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
              Edit Profile
            </button>
            <button className="ph-btn ph-btn--ghost" onClick={() => alert('Downloading Student ID…')}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Download ID
            </button>
            <button className="ph-btn ph-btn--icon" onClick={() => alert('Share Profile — wire up when backend is ready.')} aria-label="Share profile" title="Share">
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
