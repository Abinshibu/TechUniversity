/**
 * Settings.jsx — orchestrator.
 *
 * Owns dirty state, toast queue, and save logic.
 * Delegates every section to a focused sub-component.
 *
 * src/components/settings/
 *   SettingsShared.jsx         — Toggle, SettingsCard, SettingsRow, StInput, StSelect,
 *                                Segmented, DangerBtn, ConfirmDialog, Toast
 *   SettingsAccount.jsx        — Account info, email/phone, language/timezone
 *   SettingsSecurity.jsx       — Password, 2FA, active sessions
 *   SettingsNotifications.jsx  — Email/SMS/Push prefs, digest frequency
 *   SettingsAppearance.jsx     — Theme, accent, density, font
 *   SettingsPrivacy.jsx        — Privacy controls, accessibility, connected services, danger zone
 */

import { useState, useCallback, useRef, useId } from 'react';
import SettingsAccount       from '../components/settings/SettingsAccount';
import SettingsSecurity      from '../components/settings/SettingsSecurity';
import SettingsNotifications from '../components/settings/SettingsNotifications';
import SettingsAppearance    from '../components/settings/SettingsAppearance';
import SettingsPrivacy       from '../components/settings/SettingsPrivacy';
import { Toast }             from '../components/settings/SettingsShared';

const NAV = [
  { id: 'account',       label: 'Account',       icon: <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg> },
  { id: 'security',      label: 'Security',      icon: <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg> },
  { id: 'notifications', label: 'Notifications', icon: <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg> },
  { id: 'appearance',    label: 'Appearance',    icon: <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg> },
  { id: 'privacy',       label: 'Privacy',       icon: <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg> },
];

let toastCounter = 0;

export default function Settings() {
  const [activeSection, setActiveSection] = useState('account');
  const [dirty,         setDirty]         = useState(false);
  const [saving,        setSaving]         = useState(false);
  const [toasts,        setToasts]         = useState([]);

  const markDirty = useCallback(() => setDirty(true), []);

  const showToast = useCallback((message, type = 'success') => {
    const id = ++toastCounter;
    setToasts((t) => [...t, { id, message, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4000);
  }, []);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setDirty(false);
      showToast('All changes saved successfully.', 'success');
    }, 900);
  };

  const handleDiscard = () => {
    setDirty(false);
    showToast('Changes discarded.', 'error');
  };

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="stp-root">

      {/* ── Page title ── */}
      <div className="stp-heading">
        <h1 className="stp-title">Settings</h1>
        <p className="stp-sub">Manage your account, security, and preferences.</p>
      </div>

      <div className="stp-layout">

        {/* ── Sticky left nav ── */}
        <aside className="stp-sidebar">
          <nav className="stp-nav" aria-label="Settings navigation">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`stp-nav-btn ${activeSection === item.id ? 'stp-nav-btn--active' : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                <span className="stp-nav-icon" aria-hidden="true">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* ── Content area ── */}
        <div className="stp-content">
          {activeSection === 'account'       && <SettingsAccount       onDirty={markDirty} showToast={showToast}/>}
          {activeSection === 'security'      && <SettingsSecurity      onDirty={markDirty} showToast={showToast}/>}
          {activeSection === 'notifications' && <SettingsNotifications onDirty={markDirty} showToast={showToast}/>}
          {activeSection === 'appearance'    && <SettingsAppearance    onDirty={markDirty} showToast={showToast}/>}
          {activeSection === 'privacy'       && <SettingsPrivacy       onDirty={markDirty} showToast={showToast}/>}
        </div>

      </div>

      {/* ── Sticky save bar ── */}
      {dirty && (
        <div className="stp-save-bar" role="status">
          <span className="stp-save-msg">You have unsaved changes</span>
          <div className="stp-save-actions">
            <button type="button" className="stp-discard-btn" onClick={handleDiscard} disabled={saving}>Discard</button>
            <button type="button" className="stp-save-btn" onClick={handleSave} disabled={saving}>
              {saving ? (
                <>
                  <span className="stp-spinner" aria-hidden="true"/>
                  Saving…
                </>
              ) : (
                <>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* ── Toast stack ── */}
      <Toast toasts={toasts}/>

    </div>
  );
}
