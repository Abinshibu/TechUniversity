import { useState } from 'react';

// Icons
function IconEmail() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function IconEyeOff() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
    </svg>
  );
}

function IconEyeOn() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="10" height="10" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

// ── EmailField ────────────────────────────────────────────────────────────
function EmailField({ value, onChange, disabled }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`lp-field ${focused ? 'lp-field--focus' : ''} ${value ? 'lp-field--filled' : ''}`}>
      <label htmlFor="login-email" className="lp-label">
        Email Address
      </label>
      <div className="lp-input-wrap">
        <span className="lp-input-icon" aria-hidden="true">
          <IconEmail />
        </span>
        <input
          id="login-email"
          type="email"
          className="lp-input"
          placeholder="student@techuniversity.edu"
          required
          autoComplete="email"
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

// ── PasswordField ─────────────────────────────────────────────────────────
function PasswordField({ value, onChange, disabled, onForgot }) {
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className={`lp-field ${focused ? 'lp-field--focus' : ''} ${value ? 'lp-field--filled' : ''}`}>
      <div className="lp-label-row">
        <label htmlFor="login-password" className="lp-label">
          Password
        </label>
        <button type="button" className="lp-forgot" onClick={onForgot}>
          Forgot password?
        </button>
      </div>
      <div className="lp-input-wrap">
        <span className="lp-input-icon" aria-hidden="true">
          <IconLock />
        </span>
        <input
          id="login-password"
          type={show ? 'text' : 'password'}
          className="lp-input lp-input--padded"
          placeholder="••••••••••"
          required
          autoComplete="current-password"
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={disabled}
        />
        <button
          type="button"
          className="lp-eye-btn"
          onClick={() => setShow((v) => !v)}
          aria-label={show ? 'Hide password' : 'Show password'}
          disabled={disabled}
        >
          {show ? <IconEyeOff /> : <IconEyeOn />}
        </button>
      </div>
    </div>
  );
}

// ── RememberMe ────────────────────────────────────────────────────────────
function RememberMe({ checked, onChange, disabled }) {
  return (
    <div className="lp-remember-row">
      <label className="lp-checkbox-label">
        <input
          type="checkbox"
          className="lp-checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <span className="lp-checkbox-custom" aria-hidden="true">
          {checked && <IconCheck />}
        </span>
        Keep me signed in for 30 days
      </label>
    </div>
  );
}

// ── Public export: bundles all three field components ─────────────────────
export default function LoginFields({
  email,
  onEmailChange,
  password,
  onPasswordChange,
  rememberMe,
  onRememberChange,
  disabled,
  onForgot,
}) {
  return (
    <>
      <EmailField
        value={email}
        onChange={onEmailChange}
        disabled={disabled}
      />
      <PasswordField
        value={password}
        onChange={onPasswordChange}
        disabled={disabled}
        onForgot={onForgot}
      />
      <RememberMe
        checked={rememberMe}
        onChange={onRememberChange}
        disabled={disabled}
      />
    </>
  );
}
