// SettingsAccount.jsx — Account Information & Profile Editing section.
import { useState } from 'react';
import { SettingsCard, SettingsRow, StInput, StSelect } from './SettingsShared';

const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English (US)' },
  { value: 'en-gb', label: 'English (UK)' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
];

const TIMEZONE_OPTIONS = [
  { value: 'UTC-5', label: '(UTC-5) Eastern Time' },
  { value: 'UTC-6', label: '(UTC-6) Central Time' },
  { value: 'UTC-7', label: '(UTC-7) Mountain Time' },
  { value: 'UTC-8', label: '(UTC-8) Pacific Time' },
  { value: 'UTC+0', label: '(UTC+0) Greenwich Mean Time' },
  { value: 'UTC+1', label: '(UTC+1) Central European Time' },
  { value: 'UTC+5:30', label: '(UTC+5:30) India Standard Time' },
];

export default function SettingsAccount({ onDirty }) {
  const [firstName, setFirstName]   = useState('Alex');
  const [lastName,  setLastName]    = useState('Johnson');
  const [preferred, setPreferred]   = useState('Alex');
  const [bio,       setBio]         = useState('');
  const [email,     setEmail]       = useState('alex.johnson@student.techuniversity.edu');
  const [personal,  setPersonal]    = useState('alex.j2005@gmail.com');
  const [phone,     setPhone]       = useState('+1 (555) 234-7890');
  const [language,  setLanguage]    = useState('en');
  const [timezone,  setTimezone]    = useState('UTC-5');

  const dirty = (fn) => (v) => { fn(v); onDirty(); };

  return (
    <>
      <SettingsCard id="account" title="Account Information" description="Update your name, contact details, and locale preferences.">
        {/* Avatar upload */}
        <div className="st-row st-row--borderless">
          <div className="st-row-label">
            <div className="st-row-label-text">Profile Photo</div>
            <div className="st-row-label-sub">JPG or PNG, max 5 MB</div>
          </div>
          <div className="st-row-control">
            <div className="st-avatar-row">
              <div className="st-avatar-preview">AJ</div>
              <div className="st-avatar-btns">
                <button type="button" className="st-btn-outline" onClick={() => alert('Upload — wire to backend.')}>Upload Photo</button>
                <button type="button" className="st-btn-ghost-sm">Remove</button>
              </div>
            </div>
          </div>
        </div>

        <div className="st-two-col">
          <div>
            <label className="st-label" htmlFor="st-fn">First Name</label>
            <StInput id="st-fn" value={firstName} onChange={(e) => dirty(setFirstName)(e.target.value)} placeholder="First name"/>
          </div>
          <div>
            <label className="st-label" htmlFor="st-ln">Last Name</label>
            <StInput id="st-ln" value={lastName} onChange={(e) => dirty(setLastName)(e.target.value)} placeholder="Last name"/>
          </div>
        </div>

        <SettingsRow label="Preferred Name" sub="Shown in greetings and notifications">
          <StInput value={preferred} onChange={(e) => dirty(setPreferred)(e.target.value)} placeholder="Nickname or preferred name"/>
        </SettingsRow>

        <SettingsRow label="Short Bio" sub="Brief description shown on your profile">
          <textarea
            className="st-textarea"
            value={bio}
            onChange={(e) => { dirty(setBio)(e.target.value); }}
            placeholder="Tell us a bit about yourself…"
            rows={3}
            maxLength={160}
          />
          <div className="st-char-count">{bio.length}/160</div>
        </SettingsRow>
      </SettingsCard>

      <SettingsCard id="contact" title="Email & Phone" description="Manage your contact addresses and phone number.">
        <SettingsRow label="University Email" sub="Used for all official communications (read-only)">
          <StInput value={email} onChange={() => {}} disabled/>
          <span className="st-badge-verified">✓ Verified</span>
        </SettingsRow>
        <SettingsRow label="Personal Email" sub="Backup address for password recovery">
          <StInput value={personal} onChange={(e) => dirty(setPersonal)(e.target.value)} type="email" placeholder="personal@email.com"/>
        </SettingsRow>
        <SettingsRow label="Phone Number" sub="Used for SMS notifications and 2FA">
          <StInput value={phone} onChange={(e) => dirty(setPhone)(e.target.value)} type="tel" placeholder="+1 (555) 000-0000"/>
        </SettingsRow>
      </SettingsCard>

      <SettingsCard id="locale" title="Language & Timezone" description="Set your preferred language and local timezone.">
        <SettingsRow label="Display Language">
          <StSelect value={language} onChange={dirty(setLanguage)} options={LANGUAGE_OPTIONS}/>
        </SettingsRow>
        <SettingsRow label="Timezone" sub="All dates and times will display in this zone">
          <StSelect value={timezone} onChange={dirty(setTimezone)} options={TIMEZONE_OPTIONS}/>
        </SettingsRow>
      </SettingsCard>
    </>
  );
}
