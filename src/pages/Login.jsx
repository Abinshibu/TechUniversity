/**
 * Login.jsx — orchestrator only.
 *
 * Owns all state and submit logic.
 * Delegates every piece of UI to a focused sub-component.
 *
 * Sub-components live in src/components/login/:
 *   LoginLeftPanel   — dark branding panel (logo, hero, feature cards, stats)
 *   LoginFormHeader  — dynamic greeting, date, eyebrow label
 *   LoginAlert       — error alert with shake animation
 *   LoginFields      — email, password, remember-me
 *   LoginSocial      — divider, Google / GitHub buttons, sign-up link
 *   LoginSuccess     — success ring, progress bar, redirect message
 *   LoginTrustBar    — SSL / GDPR / uptime trust signals
 */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginLeftPanel  from '../components/login/LoginLeftPanel';
import LoginFormHeader from '../components/login/LoginFormHeader';
import LoginAlert      from '../components/login/LoginAlert';
import LoginFields     from '../components/login/LoginFields';
import LoginSocial     from '../components/login/LoginSocial';
import LoginSuccess    from '../components/login/LoginSuccess';
import LoginTrustBar   from '../components/login/LoginTrustBar';

export default function Login() {
  const navigate = useNavigate();

  // ── Form state ──────────────────────────────────────────────────────────
  const [email,      setEmail]      = useState('');
  const [password,   setPassword]   = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [status,     setStatus]     = useState('idle'); // idle | loading | success
  const [errorMsg,   setErrorMsg]   = useState('');
  const [loadingDots, setLoadingDots] = useState('');

  // Animate "Authenticating..." dots while loading
  useEffect(() => {
    if (status !== 'loading') { setLoadingDots(''); return; }
    const id = setInterval(
      () => setLoadingDots((d) => (d.length >= 3 ? '' : d + '.')),
      400,
    );
    return () => clearInterval(id);
  }, [status]);

  // ── Handlers ────────────────────────────────────────────────────────────
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !password) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setStatus('loading');

    // TODO: replace with real API call when backend is ready
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => navigate('/dashboard'), 1400);
    }, 1500);
  };

  const handleSocialLogin = (platform) => {
    // TODO: wire up OAuth when backend is ready
    alert(`Mock OAuth with ${platform} — wire up when backend is ready.`);
  };

  const handleForgot = () => {
    // TODO: navigate to /forgot-password when page is built
    alert('Password reset — wire up when backend is ready.');
  };

  const isLoading = status === 'loading';

  // ── Render ──────────────────────────────────────────────────────────────
  return (
    <div className="lp-root">

      {/* Left: branding / feature panel */}
      <LoginLeftPanel />

      {/* Right: form panel */}
      <div className="lp-right">
        <div className="lp-form-wrap">

          {/* ── Success state ── */}
          {status === 'success' && <LoginSuccess />}

          {/* ── Idle / Loading state ── */}
          {status !== 'success' && (
            <>
              <LoginFormHeader />

              <LoginAlert message={errorMsg} />

              <form onSubmit={handleSubmit} noValidate>
                <LoginFields
                  email={email}
                  onEmailChange={(e) => setEmail(e.target.value)}
                  password={password}
                  onPasswordChange={(e) => setPassword(e.target.value)}
                  rememberMe={rememberMe}
                  onRememberChange={(e) => setRememberMe(e.target.checked)}
                  disabled={isLoading}
                  onForgot={handleForgot}
                />

                {/* Submit button — stays in Login.jsx because it needs
                    loadingDots state and the form's disabled context */}
                <button
                  type="submit"
                  className={`lp-submit ${isLoading ? 'lp-submit--loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="lp-submit-inner">
                      <span className="lp-spinner" aria-hidden="true" />
                      Authenticating{loadingDots}
                    </span>
                  ) : (
                    <span className="lp-submit-inner">
                      Sign In
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>

              <LoginSocial onSocialLogin={handleSocialLogin} disabled={isLoading} />

              <LoginTrustBar />
            </>
          )}

        </div>
      </div>
    </div>
  );
}
