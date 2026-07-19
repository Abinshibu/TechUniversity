// SettingsShared.jsx — Reusable primitives used across all settings sections.

/* ── Toggle switch ── */
export function Toggle({ checked, onChange, disabled, id }) {
  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className={`st-toggle ${checked ? 'st-toggle--on' : ''} ${disabled ? 'st-toggle--disabled' : ''}`}
      onClick={() => !disabled && onChange(!checked)}
    >
      <span className="st-toggle-thumb" />
    </button>
  );
}

/* ── Section card wrapper ── */
export function SettingsCard({ id, title, description, children, danger }) {
  return (
    <section id={id} className={`st-card ${danger ? 'st-card--danger' : ''}`}>
      <div className="st-card-head">
        <div>
          <h2 className="st-card-title">{title}</h2>
          {description && <p className="st-card-desc">{description}</p>}
        </div>
      </div>
      <div className="st-card-body">{children}</div>
    </section>
  );
}

/* ── Row with label + control ── */
export function SettingsRow({ label, sub, children, borderless }) {
  return (
    <div className={`st-row ${borderless ? 'st-row--borderless' : ''}`}>
      <div className="st-row-label">
        <div className="st-row-label-text">{label}</div>
        {sub && <div className="st-row-label-sub">{sub}</div>}
      </div>
      <div className="st-row-control">{children}</div>
    </div>
  );
}

/* ── Styled input ── */
export function StInput({ value, onChange, type = 'text', placeholder, disabled, error }) {
  return (
    <div className="st-input-wrap">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`st-input ${error ? 'st-input--error' : ''}`}
      />
      {error && <span className="st-input-error-msg">{error}</span>}
    </div>
  );
}

/* ── Select dropdown ── */
export function StSelect({ value, onChange, options, disabled }) {
  return (
    <div className="st-select-wrap">
      <select className="st-select" value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled}>
        {options.map((o) => {
          const val  = typeof o === 'object' ? o.value : o;
          const text = typeof o === 'object' ? o.label : o;
          return <option key={val} value={val}>{text}</option>;
        })}
      </select>
      <svg className="st-select-chevron" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
  );
}

/* ── Segmented control ── */
export function Segmented({ options, value, onChange }) {
  return (
    <div className="st-segmented">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          className={`st-seg-btn ${value === o.value ? 'st-seg-btn--active' : ''}`}
          onClick={() => onChange(o.value)}
        >
          {o.icon && <span className="st-seg-icon" aria-hidden="true">{o.icon}</span>}
          {o.label}
        </button>
      ))}
    </div>
  );
}

/* ── Danger button ── */
export function DangerBtn({ children, onClick }) {
  return (
    <button type="button" className="st-danger-btn" onClick={onClick}>
      {children}
    </button>
  );
}

/* ── Confirm dialog ── */
export function ConfirmDialog({ open, title, message, confirmLabel, onConfirm, onCancel, danger }) {
  if (!open) return null;
  return (
    <div className="st-dialog-overlay" role="dialog" aria-modal="true" aria-labelledby="st-dlg-title">
      <div className="st-dialog">
        <h3 className="st-dialog-title" id="st-dlg-title">{title}</h3>
        <p className="st-dialog-msg">{message}</p>
        <div className="st-dialog-actions">
          <button type="button" className="st-dialog-cancel" onClick={onCancel}>Cancel</button>
          <button type="button" className={`st-dialog-confirm ${danger ? 'st-dialog-confirm--danger' : ''}`} onClick={onConfirm}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Toast ── */
export function Toast({ toasts }) {
  return (
    <div className="st-toast-stack" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className={`st-toast st-toast--${t.type}`}>
          {t.type === 'success'
            ? <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            : <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          }
          {t.message}
        </div>
      ))}
    </div>
  );
}
