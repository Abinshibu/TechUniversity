import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | loading | success
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic frontend checking
    if (!email || !password) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setStatus('loading');

    // Simulate login server authentication
    setTimeout(() => {
      setStatus('success');
      // Redirect to home page after 1.5s
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }, 1200);
  };

  const handleSocialLogin = (platform) => {
    alert(`Initiating mock authorization with ${platform}...`);
  };

  return (
    <div className="auth-container animate__animated animate__fadeIn">
      <div className="auth-wrapper">
        {/* Left Side: Illustrative Branding Panel (Desktop Only) */}
        <div className="auth-banner-panel d-none d-lg-flex">
          <div className="auth-mesh-grid"></div>

          {/* Header */}
          <div className="auth-banner-content">
            <div>
              <Link className="text-white fw-bold fs-4 text-decoration-none" to="/">
                <span style={{ color: 'var(--brand-color)' }}>Tech</span>University
              </Link>
              <h2 className="display-6 fw-extrabold text-white mt-5 lh-sm">
                Empowering the next generation of innovators.
              </h2>
              <p className="text-white-50 mt-3" style={{ maxWidth: '340px', lineHeight: '1.6' }}>
                Join a global ecosystem of engineers, researchers, and tech pioneers shaping the digital future.
              </p>
            </div>

            {/* Stats / Footer context */}
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
              <h3 className="fw-bold text-dark mb-2">Welcome Back!</h3>
              <p className="text-muted mb-0">
                Authentication successful. Redirecting you to the student portal home...
              </p>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <span className="text-primary text-uppercase fw-bold small tracking-wider">Student Portal</span>
                <h1 className="h2 fw-bold text-dark mt-1 mb-2">Welcome Back</h1>
                <p className="text-muted small">Please sign in to access your course files and lectures.</p>
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
                {/* Email Field */}
                <div className="mb-3">
                  <label htmlFor="login-email" className="form-label fw-semibold small text-dark">
                    Email Address
                  </label>
                  <input
                    id="login-email"
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
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <label htmlFor="login-password" className="form-label fw-semibold small text-dark mb-0">
                      Password
                    </label>
                    <a href="#" className="small text-decoration-none fw-medium" onClick={(e) => { e.preventDefault(); alert('Reset link sent to registered email.'); }}>
                      Forgot password?
                    </a>
                  </div>
                  <div className="auth-input-group">
                    <input
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      className="auth-input"
                      placeholder="••••••••"
                      required
                      autoComplete="current-password"
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

                {/* Remember Me Checkbox */}
                <div className="mb-4 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input cursor-pointer"
                    id="login-remember"
                    disabled={status === 'loading'}
                  />
                  <label className="form-check-label small text-muted cursor-pointer" htmlFor="login-remember">
                    Keep me signed in for 30 days
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
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>

              {/* Separator */}
              <div className="d-flex align-items-center my-4">
                <hr className="flex-grow-1 text-muted" />
                <span className="px-3 text-muted small fw-medium">Or sign in with</span>
                <hr className="flex-grow-1 text-muted" />
              </div>

              {/* Social Login buttons */}
              <div className="d-flex gap-2 mb-4">
                <button
                  type="button"
                  className="social-login-btn"
                  onClick={() => handleSocialLogin('Google')}
                  disabled={status === 'loading'}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  className="social-login-btn"
                  onClick={() => handleSocialLogin('GitHub')}
                  disabled={status === 'loading'}
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GitHub
                </button>
              </div>

              {/* Navigation Link to Register */}
              <div className="text-center">
                <span className="small text-muted">Don&apos;t have an account? </span>
                <Link to="/register" className="small text-decoration-none fw-bold">
                  Sign up
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
