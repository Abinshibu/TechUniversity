// SettingsSecurity.jsx — Password, 2FA, and active sessions.
import { useState } from 'react';
import { SettingsCard, SettingsRow, StInput, Toggle, ConfirmDialog } from './SettingsShared';

const SESSIONS = [
  { id: 's1', device: 'Chrome on Windows',       location: 'Austin, TX',   time: 'Active now',     current: true  },
  { id: 's2', device: 'Safari on iPhone 15',      location: 'Austin, TX',   time: '2 hours ago',    current: false },
  { id: 's3', device: 'Firefox on MacBook Pro',   location: 'New York, NY', time: '3 days ago',     current: false },
];

export default function SettingsSecurity({ onDirty, showToast }) {
  const [current,  setCurrent]  = useState('');
  const [newPass,  setNewPass]  = useState('');
  const [confirm,  setConfirm]  = useState('');
  const [passErr,  setPassErr]  = useState('');
  const [twoFA,    setTwoFA]    = useState(false);
  const [sessions, setSessions] = useState(SESSIONS);
  const [dialog,   setDialog]   = useState(null); // { type: 'session'|'allSessions', id }

  function handlePasswordSave() {
    if (!current)                   { setPassErr('Enter your current password.'); return; }
    if (newPass.length < 8)         { setPassErr('New password must be at least 8 characters.'); return; }
    if (newPass !== confirm)        { setPassErr('Passwords do not match.'); return; }
    setPassErr('');
    showToast('Password updated successfully.', 'success');
    setCurrent(''); setNewPass(''); setConfirm('');
  }

  function revokeSession(id) {
    setSessions((s) => s.filter((x) => x.id !== id));
    showToast('Session revoked.', 'success');
    setDialog(null);
  }

  function revokeAll() {
    setSessions((s) => s.filter((x) => x.current));
    showToast('All other sessions signed out.', 'success');
    setDialog(null);
  }

  // Password strength
  const strength = !newPass ? 0
    : newPass.length >= 12 && /[A-Z]/.test(newPass) && /[0-9]/.test(newPass) && /[^A-Za-z0-9]/.test(newPass) ? 4
    : newPass.length >= 10 && /[A-Z]/.test(newPass) && /[0-9]/.test(newPass) ? 3
    : newPass.length >= 8 ? 2 : 1;
  const STRENGTH_LABELS = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  const STRENGTH_COLORS = ['', 'st-str-1', 'st-str-2', 'st-str-3', 'st-str-4'];

  return (
    <>
      {/* Password */}
      <SettingsCard id="password" title="Change Password" description="Use a strong, unique password you don't use elsewhere.">
        <SettingsRow label="Current Password" borderless>
          <StInput type="password" value={current} onChange={(e) => { setCurrent(e.target.value); onDirty(); }} placeholder="••••••••"/>
        </SettingsRow>
        <SettingsRow label="New Password">
          <StInput type="password" value={newPass} onChange={(e) => { setNewPass(e.target.value); onDirty(); }} placeholder="••••••••"/>
          {newPass && (
            <div className="st-strength-bar">
              {[1,2,3,4].map((n) => (
                <div key={n} className={`st-strength-seg ${n <= strength ? STRENGTH_COLORS[strength] : ''}`}/>
              ))}
              <span className="st-strength-label">{STRENGTH_LABELS[strength]}</span>
            </div>
          )}
        </SettingsRow>
        <SettingsRow label="Confirm Password">
          <StInput type="password" value={confirm} onChange={(e) => { setConfirm(e.target.value); onDirty(); }} placeholder="••••••••" error={confirm && newPass !== confirm ? 'Passwords do not match' : ''}/>
        </SettingsRow>
        {passErr && <div className="st-form-error">{passErr}</div>}
        <div className="st-row-actions">
          <button type="button" className="st-btn-primary" onClick={handlePasswordSave}>Update Password</button>
        </div>
      </SettingsCard>

      {/* 2FA */}
      <SettingsCard id="2fa" title="Two-Factor Authentication" description="Add an extra layer of security to your account.">
        <SettingsRow label="Enable 2FA" sub={twoFA ? 'Authenticator app is active.' : 'Protect your account with TOTP or SMS.'}>
          <Toggle checked={twoFA} onChange={(v) => { setTwoFA(v); showToast(v ? '2FA enabled.' : '2FA disabled.', 'success'); }}/>
        </SettingsRow>
        {twoFA && (
          <div className="st-2fa-setup">
            <div className="st-2fa-qr" aria-label="QR code placeholder">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="#e2e8f0"><rect width="64" height="64" rx="6"/><text x="32" y="36" textAnchor="middle" fontSize="10" fill="#94a3b8" fontFamily="Inter,sans-serif">QR Code</text></svg>
            </div>
            <div className="st-2fa-info">
              <div className="st-2fa-label">Scan with your authenticator app</div>
              <div className="st-2fa-code">JBSWY3DPEHPK3PXP</div>
              <div className="st-2fa-hint">Or enter this code manually in your app.</div>
            </div>
          </div>
        )}
      </SettingsCard>

      {/* Sessions */}
      <SettingsCard id="sessions" title="Active Sessions" description="Manage devices that are currently signed in to your account.">
        <div className="st-sessions-list">
          {sessions.map((s) => (
            <div key={s.id} className="st-session-row">
              <div className="st-session-icon">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div className="st-session-info">
                <div className="st-session-device">
                  {s.device}
                  {s.current && <span className="st-session-current">Current</span>}
                </div>
                <div className="st-session-meta">{s.location} · {s.time}</div>
              </div>
              {!s.current && (
                <button className="st-session-revoke" onClick={() => setDialog({ type: 'session', id: s.id })}>Revoke</button>
              )}
            </div>
          ))}
        </div>
        {sessions.filter((s) => !s.current).length > 0 && (
          <div className="st-row-actions">
            <button type="button" className="st-btn-danger-outline" onClick={() => setDialog({ type: 'allSessions' })}>Sign Out All Other Devices</button>
          </div>
        )}
      </SettingsCard>

      {/* Confirm dialogs */}
      <ConfirmDialog
        open={dialog?.type === 'session'}
        title="Revoke Session"
        message="This device will be signed out immediately. Are you sure?"
        confirmLabel="Revoke"
        onConfirm={() => dialog && revokeSession(dialog.id)}
        onCancel={() => setDialog(null)}
        danger
      />
      <ConfirmDialog
        open={dialog?.type === 'allSessions'}
        title="Sign Out All Devices"
        message="All other active sessions will be ended. You'll stay signed in on this device."
        confirmLabel="Sign Out All"
        onConfirm={revokeAll}
        onCancel={() => setDialog(null)}
        danger
      />
    </>
  );
}
