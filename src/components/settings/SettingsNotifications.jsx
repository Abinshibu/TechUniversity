// SettingsNotifications.jsx — Email / SMS / Push notification preferences.
import { useState } from 'react';
import { SettingsCard, SettingsRow, Toggle } from './SettingsShared';

const GROUPS = [
  {
    group: 'Academic',
    items: [
      { id: 'grade_pub',   label: 'Grades Published',         sub: 'When a grade is posted for your submission' },
      { id: 'assign_due',  label: 'Assignment Reminders',      sub: '24 hours before a deadline' },
      { id: 'assign_grade',label: 'Assignment Graded',         sub: 'When feedback is available' },
      { id: 'course_update',label: 'Course Updates',           sub: 'Schedule changes or new materials' },
    ],
  },
  {
    group: 'Campus',
    items: [
      { id: 'announce',    label: 'University Announcements',  sub: 'Important notices from the admin office' },
      { id: 'exam_sched',  label: 'Exam Schedule',             sub: 'When exam timetables are released' },
      { id: 'scholarship', label: 'Scholarship Alerts',        sub: 'New opportunities and deadlines' },
    ],
  },
  {
    group: 'Account',
    items: [
      { id: 'login_alert', label: 'Login Alerts',              sub: 'When your account is accessed from a new device' },
      { id: 'pass_change', label: 'Password Changed',          sub: 'Confirmation when your password is updated' },
      { id: 'newsletter',  label: 'Monthly Newsletter',        sub: 'News, events, and highlights from TechUniversity' },
    ],
  },
];

const CHANNELS = ['email', 'sms', 'push'];
const CHANNEL_LABELS = { email: 'Email', sms: 'SMS', push: 'Push' };

// Build initial state: all email on, sms/push selective
function buildInit() {
  const state = {};
  GROUPS.forEach((g) => g.items.forEach((item) => {
    state[item.id] = { email: true, sms: ['grade_pub', 'login_alert', 'pass_change'].includes(item.id), push: ['grade_pub', 'assign_due'].includes(item.id) };
  }));
  return state;
}

export default function SettingsNotifications({ onDirty }) {
  const [prefs, setPrefs] = useState(buildInit);
  const [digest, setDigest] = useState('immediate'); // immediate | daily | weekly

  const toggle = (id, channel) => {
    setPrefs((p) => ({ ...p, [id]: { ...p[id], [channel]: !p[id][channel] } }));
    onDirty();
  };

  return (
    <>
      <SettingsCard id="notifications" title="Notification Preferences" description="Choose what you're notified about and how.">
        {/* Column headers */}
        <div className="stn-header-row">
          <div className="stn-header-label">Notification Type</div>
          <div className="stn-header-channels">
            {CHANNELS.map((c) => <span key={c} className="stn-channel-head">{CHANNEL_LABELS[c]}</span>)}
          </div>
        </div>

        {GROUPS.map((g) => (
          <div key={g.group} className="stn-group">
            <div className="stn-group-label">{g.group}</div>
            {g.items.map((item) => (
              <div key={item.id} className="stn-item-row">
                <div className="stn-item-info">
                  <span className="stn-item-label">{item.label}</span>
                  <span className="stn-item-sub">{item.sub}</span>
                </div>
                <div className="stn-item-channels">
                  {CHANNELS.map((c) => (
                    <Toggle
                      key={c}
                      checked={prefs[item.id][c]}
                      onChange={() => toggle(item.id, c)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </SettingsCard>

      <SettingsCard id="digest" title="Digest Frequency" description="How often to bundle non-urgent notifications.">
        <SettingsRow label="Email Digest" sub="Group low-priority emails into a single digest">
          <div className="st-segmented">
            {['immediate', 'daily', 'weekly'].map((v) => (
              <button
                key={v}
                type="button"
                className={`st-seg-btn ${digest === v ? 'st-seg-btn--active' : ''}`}
                onClick={() => { setDigest(v); onDirty(); }}
              >
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>
        </SettingsRow>
      </SettingsCard>
    </>
  );
}
