import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | loading | success
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic frontend checking
    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    if (!acceptTerms) {
      setErrorMsg('You must accept the terms and conditions to proceed.');
      return;
    }

    setStatus('loading');

    // Simulate account registration server call
    setTimeout(() => {
      setStatus('success');
      // Redirect to login page after 1.5s
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    }, 1200);
  };

  return (
    <div className="auth-container animate__animated animate__fadeIn">
      <div className="auth-wrapper">
        {/* Left Side: Illustrative Branding Panel (Desktop Only) */}
        <div className="auth-banner-panel d-none d-lg-flex">
          <div className="auth-mesh-grid"></div>
          
          <div className="auth-banner-content">
            <div>
              <Link className="text-white fw-bold fs-4 text-decoration-none" to="/">
                <span style={{ color: 'var(--brand-color)' }}>Tech</span>University
              </Link>
              <h2 className="display-6 fw-extrabold text-white mt-5 lh-sm">
                Build your skills. Shape the future.
              </h2>
              <p className="text-white-50 mt-3" style={{ maxWidth: '340px', lineHeight: '1.6' }}>
                Join our research labs, work with world-class faculty, and construct a portfolio that defines your career.
              </p>
            </div>

            <div className="mt-auto">
              <div className="d-flex gap-4 border-top border-secondary pt-4">
                <div>
                  <span className="d-block fw-bold fs-5 text-white">15k+</span>
                  <span className="text-white-50 small">Students</span>
                </div>
                <div>
                  <span className="d-block fw-bold fs-5 text-white">98%</span>
                  <span className="text-white-50 small">Graduation Rate</span>
                </div>
                <div>
                  <span className="d-block fw-bold fs-5 text-white">Top 10</span>
                  <span className="text-white-50 small">Tech Academy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Panel */}
        <div className="auth-form-panel">
          {status === 'success' ? (
            <div className="text-center py-4 success-animation">
              <div className="d-inline-flex align-items-center justify-content-center bg-success-subtle text-success rounded-circle mb-4" style={{ width: '72px', height: '72px' }}>
                <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="fw-bold text-dark mb-2">Account Created!</h3>
              <p className="text-muted mb-0">
                Your student profile has been created successfully. Redirecting you to sign in...
              </p>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <span className="text-primary text-uppercase fw-bold small tracking-wider">Registration Portal</span>
                <h1 className="h2 fw-bold text-dark mt-1 mb-2">Create Account</h1>
                <p className="text-muted small">Sign up to get access to courses and admissions guides.</p>
              </div>

              {errorMsg && (
                <div className="alert alert-danger d-flex align-items-center gap-2 py-2 px-3 rounded-3 small mb-4" role="alert">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mb-4">
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="reg-name" className="form-label fw-semibold small text-dark">
                    Full Name <span className="text-danger">*</span>
                  </label>
                  <input
                    id="reg-name"
                    type="text"
                    className="auth-input"
                    placeholder="John Doe"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={status === 'loading'}
                  />
                </div>

                {/* Email Address */}
                <div className="mb-3">
                  <label htmlFor="reg-email" className="form-label fw-semibold small text-dark">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    id="reg-email"
                    type="email"
                    className="auth-input"
                    placeholder="student@techuniversity.edu"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                  />
                </div>

                {/* Password Field */}
                <div className="mb-3">
                  <label htmlFor="reg-password" className="form-label fw-semibold small text-dark">
                    Password <span className="text-danger">*</span>
                  </label>
                  <div className="auth-input-group">
                    <input
                      id="reg-password"
                      type={showPassword ? 'text' : 'password'}
                      className="auth-input"
                      placeholder="Min. 8 characters"
                      required
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={status === 'loading'}
                      style={{ paddingRight: '2.75rem' }}
                    />
                    <button
                      type="button"
                      className="auth-input-icon-btn"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      disabled={status === 'loading'}
                    >
                      {showPassword ? (
                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                        </svg>
                      ) : (
                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label htmlFor="reg-confirm-password" className="form-label fw-semibold small text-dark">
                    Confirm Password <span className="text-danger">*</span>
                  </label>
                  <div className="auth-input-group">
                    <input
                      id="reg-confirm-password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      className="auth-input"
                      placeholder="Repeat password"
                      required
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      disabled={status === 'loading'}
                      style={{ paddingRight: '2.75rem' }}
                    />
                    <button
                      type="button"
                      className="auth-input-icon-btn"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                      disabled={status === 'loading'}
                    >
                      {showConfirmPassword ? (
                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                        </svg>
                      ) : (
                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Terms and conditions Checkbox */}
                <div className="mb-4 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input cursor-pointer"
                    id="reg-terms"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    disabled={status === 'loading'}
                  />
                  <label className="form-check-label small text-muted cursor-pointer" htmlFor="reg-terms">
                    I agree to the <a href="#" onClick={(e) => { e.preventDefault(); alert('Terms of Service dialog coming soon.'); }}>Terms of Service</a> &amp; <a href="#" onClick={(e) => { e.preventDefault(); alert('Privacy Policy dialog coming soon.'); }}>Privacy Policy</a>
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 rounded-3 fs-6 fw-semibold d-flex align-items-center justify-content-center gap-2"
                  disabled={status === 'loading'}
                  style={{ height: '48px' }}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="loading-spinner"></span>
                      Registering...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </button>
              </form>

              {/* Navigation Link to Login */}
              <div className="text-center pt-2">
                <span className="small text-muted">Already have an account? </span>
                <Link to="/login" className="small text-decoration-none fw-bold">
                  Sign in
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
