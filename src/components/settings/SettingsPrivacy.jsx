// SettingsPrivacy.jsx — Privacy, accessibility, connected services, and account deletion.
import { useState } from 'react';
import { SettingsCard, SettingsRow, Toggle, ConfirmDialog } from './SettingsShared';

const CONNECTED_SERVICES = [
  { id: 'google',  name: 'Google',  icon: '🔵', connected: true,  since: 'Sep 2024' },
  { id: 'github',  name: 'GitHub',  icon: '⚫', connected: true,  since: 'Oct 2024' },
  { id: 'ms365',   name: 'Microsoft 365', icon: '🟦', connected: false, since: null },
  { id: 'linkedin',name: 'LinkedIn',icon: '🔷', connected: false, since: null },
];

export default function SettingsPrivacy({ onDirty, showToast }) {
  // Privacy
  const [profileVisible,  setProfileVisible]  = useState(true);
  const [gradeVisible,    setGradeVisible]    = useState(false);
  const [activityVisible, setActivityVisible] = useState(true);
  const [searchable,      setSearchable]      = useState(true);

  // Accessibility
  const [highContrast,    setHighContrast]    = useState(false);
  const [reduceMotion,    setReduceMotion]    = useState(false);
  const [largeText,       setLargeText]       = useState(false);
  const [screenReader,    setScreenReader]    = useState(false);

  // Connected services
  const [services,        setServices]        = useState(CONNECTED_SERVICES);

  // Delete dialog
  const [deleteDialog,    setDeleteDialog]    = useState(false);
  const [deleteInput,     setDeleteInput]     = useState('');

  const dirty = (fn) => (v) => { fn(v); onDirty(); };

  function toggleService(id) {
    setServices((s) => s.map((sv) =>
      sv.id === id ? { ...sv, connected: !sv.connected, since: !sv.connected ? 'Just now' : null } : sv
    ));
    showToast('Service updated.', 'success');
  }

  return (
    <>
      {/* Privacy */}
      <SettingsCard id="privacy" title="Privacy Controls" description="Control who can see your information and activity.">
        <SettingsRow label="Public Profile" sub="Allow other students to view your profile" borderless>
          <Toggle checked={profileVisible} onChange={dirty(setProfileVisible)}/>
        </SettingsRow>
        <SettingsRow label="Show Grades" sub="Display your academic performance on your profile">
          <Toggle checked={gradeVisible} onChange={dirty(setGradeVisible)}/>
        </SettingsRow>
        <SettingsRow label="Activity Status" sub="Show when you were last active in the portal">
          <Toggle checked={activityVisible} onChange={dirty(setActivityVisible)}/>
        </SettingsRow>
        <SettingsRow label="Searchable" sub="Allow admins and instructors to find you by name or ID">
          <Toggle checked={searchable} onChange={dirty(setSearchable)}/>
        </SettingsRow>
      </SettingsCard>

      {/* Accessibility */}
      <SettingsCard id="accessibility" title="Accessibility" description="Configure the portal for your accessibility needs.">
        <SettingsRow label="High Contrast Mode" sub="Increase contrast for better readability" borderless>
          <Toggle checked={highContrast} onChange={dirty(setHighContrast)}/>
        </SettingsRow>
        <SettingsRow label="Reduce Motion" sub="Minimise animations and transitions">
          <Toggle checked={reduceMotion} onChange={dirty(setReduceMotion)}/>
        </SettingsRow>
        <SettingsRow label="Larger Text" sub="Increase base font size for better legibility">
          <Toggle checked={largeText} onChange={dirty(setLargeText)}/>
        </SettingsRow>
        <SettingsRow label="Screen Reader Hints" sub="Add additional ARIA labels and descriptions">
          <Toggle checked={screenReader} onChange={dirty(setScreenReader)}/>
        </SettingsRow>
      </SettingsCard>

      {/* Connected Services */}
      <SettingsCard id="services" title="Connected Services" description="Manage third-party integrations and OAuth connections.">
        <div className="st-services-list">
          {services.map((sv) => (
            <div key={sv.id} className="st-service-row">
              <div className="st-service-icon">{sv.icon}</div>
              <div className="st-service-info">
                <div className="st-service-name">{sv.name}</div>
                <div className="st-service-meta">
                  {sv.connected ? `Connected since ${sv.since}` : 'Not connected'}
                </div>
              </div>
              <button
                type="button"
                className={`st-service-btn ${sv.connected ? 'st-service-btn--disconnect' : 'st-service-btn--connect'}`}
                onClick={() => toggleService(sv.id)}
              >
                {sv.connected ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      </SettingsCard>

      {/* Danger zone */}
      <SettingsCard id="delete" title="Danger Zone" description="Irreversible and destructive actions for your account." danger>
        <div className="st-danger-row">
          <div>
            <div className="st-danger-label">Delete Account</div>
            <div className="st-danger-sub">Permanently delete your account and all associated academic data. This cannot be undone.</div>
          </div>
          <button type="button" className="st-btn-danger" onClick={() => setDeleteDialog(true)}>Delete Account</button>
        </div>
      </SettingsCard>

      <ConfirmDialog
        open={deleteDialog}
        title="Delete Your Account"
        message="This will permanently erase all your data, grades, submissions, and course history. Type DELETE to confirm."
        confirmLabel="Permanently Delete"
        onConfirm={() => { if (deleteInput === 'DELETE') { showToast('Account deletion requested. Contact admin to finalise.', 'error'); setDeleteDialog(false); } else { alert('Type DELETE to confirm.'); } }}
        onCancel={() => { setDeleteDialog(false); setDeleteInput(''); }}
        danger
      />
    </>
  );
}
