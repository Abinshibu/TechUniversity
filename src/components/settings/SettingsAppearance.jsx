// SettingsAppearance.jsx — Theme, colour accent, density, and font size.
import { useState } from 'react';
import { SettingsCard, SettingsRow, StSelect, Segmented, Toggle } from './SettingsShared';

const ACCENT_COLORS = [
  { id: 'blue',   hex: '#2563eb' },
  { id: 'purple', hex: '#7c3aed' },
  { id: 'emerald',hex: '#059669' },
  { id: 'rose',   hex: '#e11d48' },
  { id: 'amber',  hex: '#d97706' },
  { id: 'slate',  hex: '#475569' },
];

const FONT_OPTIONS = [
  { value: 'inter',      label: 'Inter (Default)' },
  { value: 'plus-jakarta', label: 'Plus Jakarta Sans' },
  { value: 'system',     label: 'System Default' },
];

const THEME_OPTIONS = [
  {
    value: 'light',
    label: 'Light',
    icon: (
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
      </svg>
    ),
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: (
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
      </svg>
    ),
  },
  {
    value: 'system',
    label: 'System',
    icon: (
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
  },
];

export default function SettingsAppearance({ onDirty }) {
  const [theme,    setTheme]    = useState('light');
  const [accent,   setAccent]   = useState('blue');
  const [density,  setDensity]  = useState('comfortable');
  const [fontSize, setFontSize] = useState('medium');
  const [font,     setFont]     = useState('inter');
  const [animations, setAnim]   = useState(true);

  const dirty = (fn) => (v) => { fn(v); onDirty(); };

  return (
    <SettingsCard id="appearance" title="Appearance" description="Customise how the portal looks and feels.">
      <SettingsRow label="Theme" sub="Choose your preferred colour scheme" borderless>
        <Segmented options={THEME_OPTIONS} value={theme} onChange={dirty(setTheme)}/>
      </SettingsRow>

      <SettingsRow label="Accent Colour" sub="Used for highlights, buttons, and links">
        <div className="st-accent-grid">
          {ACCENT_COLORS.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`st-accent-swatch ${accent === c.id ? 'st-accent-swatch--active' : ''}`}
              style={{ background: c.hex }}
              onClick={dirty(() => setAccent)(c.id)}
              aria-label={`${c.id} accent`}
              title={c.id}
            >
              {accent === c.id && (
                <svg width="10" height="10" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      </SettingsRow>

      <SettingsRow label="Density" sub="Controls how compact the interface feels">
        <Segmented
          options={[{ value: 'compact', label: 'Compact' }, { value: 'comfortable', label: 'Comfortable' }, { value: 'spacious', label: 'Spacious' }]}
          value={density}
          onChange={dirty(setDensity)}
        />
      </SettingsRow>

      <SettingsRow label="Font Size" sub="Base text size across all pages">
        <Segmented
          options={[{ value: 'small', label: 'Small' }, { value: 'medium', label: 'Medium' }, { value: 'large', label: 'Large' }]}
          value={fontSize}
          onChange={dirty(setFontSize)}
        />
      </SettingsRow>

      <SettingsRow label="Interface Font">
        <StSelect value={font} onChange={dirty(setFont)} options={FONT_OPTIONS}/>
      </SettingsRow>

      <SettingsRow label="Animations" sub="Smooth transitions and micro-interactions">
        <Toggle checked={animations} onChange={dirty(setAnim)}/>
      </SettingsRow>
    </SettingsCard>
  );
}
