import { useState } from 'react';
import { Link } from 'react-router-dom';
import { programs, enrollmentTerms } from '../data/programs';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  course: '',
  term: '',
  acceptTerms: false,
};

const nextSteps = [
  {
    step: '1',
    title: 'Confirm your email',
    description: 'Check your inbox for a verification link to activate your student account.',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: '2',
    title: 'Complete your profile',
    description: 'Sign in to the student portal and upload any required documents.',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    step: '3',
    title: 'Attend orientation',
    description: 'Review your welcome packet and register for the new-student orientation session.',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Register() {
  const [form, setForm] = useState(initialFormState);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const selectedProgram = programs.find((program) => program.id === form.course);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setForm(initialFormState);
    setShowPassword(false);
    setShowConfirmPassword(false);
    setErrorMsg('');
    setStatus('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (form.password.length < 8) {
      setErrorMsg('Password must be at least 8 characters long.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    if (!form.course) {
      setErrorMsg('Please select a course program.');
      return;
    }

    if (!form.term) {
      setErrorMsg('Please select an enrollment term.');
      return;
    }

    if (!form.acceptTerms) {
      setErrorMsg('You must accept the enrollment agreement to proceed.');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <div className="auth-container animate__animated animate__fadeIn">
      <div className="auth-wrapper auth-wrapper--register">
        <div className="auth-banner-panel d-none d-lg-flex">
          <div className="auth-mesh-grid" />

          <div className="auth-banner-content">
            <div>
              <Link className="text-white fw-bold fs-4 text-decoration-none" to="/">
                <span style={{ color: 'var(--brand-color)' }}>Tech</span>University
              </Link>
              <h2 className="display-6 fw-extrabold text-white mt-5 lh-sm">
                Start your journey with industry-ready programs.
              </h2>
              <p className="text-white-50 mt-3" style={{ maxWidth: '360px', lineHeight: '1.6' }}>
                Join thousands of students building portfolios with real-world projects, mentorship from top tech companies, and career-focused curricula.
              </p>

              <div className="register-banner-highlights mt-4">
                {programs.map((program) => (
                  <div key={program.id} className="register-banner-pill">
                    <span className="register-banner-pill-icon">{program.icon}</span>
                    <span>{program.title}</span>
                  </div>
                ))}
              </div>
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

        <div className="auth-form-panel auth-form-panel--scroll">
          {status === 'success' ? (
            <div className="register-success success-animation">
              <div className="text-center mb-4">
                <div className="register-success-icon d-inline-flex align-items-center justify-content-center mb-4">
                  <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="fw-bold text-dark mb-2">Registration submitted!</h3>
                <p className="text-muted mb-0" style={{ lineHeight: '1.65', maxWidth: '420px', margin: '0 auto' }}>
                  Thank you, <strong>{form.name}</strong>. Your application for{' '}
                  <strong>{selectedProgram?.title}</strong> starting <strong>{form.term}</strong> has been received.
                  We&apos;ve sent a confirmation to <strong>{form.email}</strong>.
                </p>
              </div>

              <div className="register-success-summary rounded-4 p-3 p-md-4 mb-4">
                <div className="row g-3 text-center text-md-start">
                  <div className="col-md-4">
                    <span className="register-summary-label d-block">Program</span>
                    <span className="fw-semibold text-dark">{selectedProgram?.title}</span>
                  </div>
                  <div className="col-md-4">
                    <span className="register-summary-label d-block">Enrollment Term</span>
                    <span className="fw-semibold text-dark">{form.term}</span>
                  </div>
                  <div className="col-md-4">
                    <span className="register-summary-label d-block">Reference ID</span>
                    <span className="fw-semibold text-dark font-monospace">TU-{Date.now().toString().slice(-8)}</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="h6 fw-bold text-dark mb-3">What happens next?</h4>
                <div className="d-flex flex-column gap-3">
                  {nextSteps.map((item) => (
                    <div key={item.step} className="register-next-step">
                      <div className="register-next-step-icon">{item.icon}</div>
                      <div>
                        <span className="register-next-step-badge">Step {item.step}</span>
                        <h5 className="fw-semibold text-dark mb-1 fs-6">{item.title}</h5>
                        <p className="text-muted small mb-0">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2 justify-content-center">
                <Link to="/login" className="btn btn-primary px-4 rounded-3 fw-semibold">
                  Sign In to Portal
                </Link>
                <Link to="/courses" className="btn btn-outline-primary px-4 rounded-3 fw-semibold">
                  Explore Courses
                </Link>
                <button type="button" className="btn btn-light px-4 rounded-3 fw-semibold border" onClick={resetForm}>
                  Register Another
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <span className="text-primary text-uppercase fw-bold small tracking-wider">Admissions Portal</span>
                <h1 className="h2 fw-bold text-dark mt-1 mb-2">Student Registration</h1>
                <p className="text-muted small mb-0">
                  Complete the form below to apply for your preferred program. All fields marked with * are required.
                </p>
              </div>

              {errorMsg && (
                <div className="alert alert-danger d-flex align-items-center gap-2 py-2 px-3 rounded-3 small mb-4" role="alert">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="register-form mb-3" noValidate>
                <div className="mb-3">
                  <label htmlFor="reg-name" className="form-label fw-semibold small text-dark">
                    Full Name <span className="text-danger">*</span>
                  </label>
                  <input
                    id="reg-name"
                    type="text"
                    className="auth-input"
                    placeholder="Jane Doe"
                    required
                    value={form.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    disabled={status === 'loading'}
                  />
                </div>

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
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
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
                        minLength={8}
                        autoComplete="new-password"
                        value={form.password}
                        onChange={(e) => updateField('password', e.target.value)}
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
                          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                          </svg>
                        ) : (
                          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="col-md-6">
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
                        value={form.confirmPassword}
                        onChange={(e) => updateField('confirmPassword', e.target.value)}
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
                          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                          </svg>
                        ) : (
                          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-7">
                    <label htmlFor="reg-course" className="form-label fw-semibold small text-dark">
                      Select Course <span className="text-danger">*</span>
                    </label>
                    <select
                      id="reg-course"
                      className="auth-input auth-select"
                      required
                      value={form.course}
                      onChange={(e) => updateField('course', e.target.value)}
                      disabled={status === 'loading'}
                    >
                      <option value="">Choose a program...</option>
                      {programs.map((program) => (
                        <option key={program.id} value={program.id}>
                          {program.title} — {program.degree}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-5">
                    <label htmlFor="reg-term" className="form-label fw-semibold small text-dark">
                      Enrollment Term <span className="text-danger">*</span>
                    </label>
                    <select
                      id="reg-term"
                      className="auth-input auth-select"
                      required
                      value={form.term}
                      onChange={(e) => updateField('term', e.target.value)}
                      disabled={status === 'loading'}
                    >
                      <option value="">Select term...</option>
                      {enrollmentTerms.map((term) => (
                        <option key={term} value={term}>
                          {term}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {selectedProgram && (
                  <div className="register-program-preview rounded-4 p-3 mb-3">
                    <div className="d-flex align-items-start gap-3">
                      <div className="register-program-preview-icon">{selectedProgram.icon}</div>
                      <div>
                        <h6 className="fw-bold text-dark mb-1">{selectedProgram.title}</h6>
                        <p className="text-muted small mb-2">{selectedProgram.description}</p>
                        <div className="d-flex flex-wrap gap-2">
                          <span className="register-program-tag">{selectedProgram.duration}</span>
                          <span className="register-program-tag">{selectedProgram.credits}</span>
                          <span className="register-program-tag register-program-tag--success">{selectedProgram.rate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="register-agreement mb-4">
                  <input
                    type="checkbox"
                    className="register-agreement-input"
                    id="reg-terms"
                    checked={form.acceptTerms}
                    onChange={(e) => updateField('acceptTerms', e.target.checked)}
                    disabled={status === 'loading'}
                  />
                  <label className="register-agreement-label" htmlFor="reg-terms">
                    I agree to the TechUniversity{' '}
                    <a href="#" onClick={(e) => { e.preventDefault(); alert('Enrollment Agreement coming soon.'); }}>
                      Enrollment Agreement
                    </a>
                    ,{' '}
                    <a href="#" onClick={(e) => { e.preventDefault(); alert('Terms of Service coming soon.'); }}>
                      Terms of Service
                    </a>
                    , and{' '}
                    <a href="#" onClick={(e) => { e.preventDefault(); alert('Privacy Policy coming soon.'); }}>
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 rounded-3 fs-6 fw-semibold d-flex align-items-center justify-content-center gap-2 register-submit-btn"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="loading-spinner" />
                      Submitting registration...
                    </>
                  ) : (
                    'Submit Registration'
                  )}
                </button>
              </form>

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
