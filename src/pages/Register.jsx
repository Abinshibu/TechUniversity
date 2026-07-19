import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { programs, enrollmentTerms } from '../data/programs';

const STEPS = [
  { id: 1, label: 'Personal' },
  { id: 2, label: 'Academic' },
  { id: 3, label: 'Contact' },
  { id: 4, label: 'Security' },
];
const COUNTRIES = ['United States', 'United Kingdom', 'India', 'Canada', 'Australia', 'Germany', 'France', 'Singapore', 'UAE', 'Brazil', 'South Africa', 'Other'];
const NATIONALITIES = ['American', 'British', 'Indian', 'Canadian', 'Australian', 'German', 'French', 'Singaporean', 'Emirati', 'Brazilian', 'South African', 'Other'];
const EDU = ["High School Diploma", "Associate Degree", "Bachelor's Degree", "Master's Degree", "PhD", "Other"];

function getStrength(pw) {
  if (!pw) return 0;
  let s = 0;
  if (pw.length >= 8) s++;
  if (pw.length >= 12) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return Math.min(s, 4);
}
const STR_LABEL = ['', 'Weak', 'Fair', 'Good', 'Strong'];
const STR_CLS = ['', 'rg-str-1', 'rg-str-2', 'rg-str-3', 'rg-str-4'];

const EyeOpen = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);
const EyeOff = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
  </svg>
);
const Tick = () => (
  <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

function Field({ label, required, error, children }) {
  return (
    <div className="rg-field">
      <label className="rg-label">{label}{required && <span className="rg-req"> *</span>}</label>
      {children}
      {error && <span className="rg-err" role="alert">{error}</span>}
    </div>
  );
}

function RgInput({ icon, error, ...props }) {
  return (
    <div className={`rg-iw${error ? ' rg-iw--err' : ''}`}>
      {icon && <span className="rg-ii">{icon}</span>}
      <input className={`rg-in${icon ? ' rg-in--ic' : ''}`} {...props} />
    </div>
  );
}

function RgSel({ error, children, ...props }) {
  return (
    <div className={`rg-iw rg-iw--sel${error ? ' rg-iw--err' : ''}`}>
      <select className="rg-in rg-sel" {...props}>{children}</select>
      <svg className="rg-sc" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}

function PwField({ label, value, onChange, error, showStrength }) {
  const [show, setShow] = useState(false);
  const s = getStrength(value);
  return (
    <Field label={label} required error={error}>
      <div className={`rg-iw rg-iw--pw${error ? ' rg-iw--err' : ''}`}>
        <span className="rg-ii">
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </span>
        <input
          type={show ? 'text' : 'password'}
          className="rg-in rg-in--ic rg-in--ey"
          value={value}
          onChange={onChange}
          placeholder="••••••••••"
          autoComplete="new-password"
        />
        <button type="button" className="rg-eye" onClick={() => setShow(v => !v)}>
          {show ? <EyeOff /> : <EyeOpen />}
        </button>
      </div>
      {showStrength && value && (
        <div className="rg-srow">
          {[1, 2, 3, 4].map(n => <div key={n} className={`rg-ss${n <= s ? ' ' + STR_CLS[s] : ''}`} />)}
          <span className={`rg-sl ${STR_CLS[s]}`}>{STR_LABEL[s]}</span>
        </div>
      )}
    </Field>
  );
}

function StepBar({ current }) {
  return (
    <div className="rg-stepbar">
      {STEPS.map((s, i) => {
        const done = s.id < current;
        const active = s.id === current;
        return (
          <div key={s.id} className="rg-step-item">
            <div className={`rg-step-dot${done ? ' rg-step-dot--done' : active ? ' rg-step-dot--active' : ''}`}>
              {done ? <Tick /> : s.id}
            </div>
            <span className={`rg-step-lbl${active ? ' rg-step-lbl--active' : ''}`}>{s.label}</span>
            {i < STEPS.length - 1 && (
              <div className={`rg-step-line${done ? ' rg-step-line--done' : ''}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function LeftPanel() {
  return (
    <div className="rg-left" aria-hidden="true">
      <div className="rg-left-bg" /><div className="rg-left-grid" />
      <div className="rg-left-orb rg-left-orb1" /><div className="rg-left-orb rg-left-orb2" />
      <div className="rg-left-content">
        <Link to="/" className="rg-logo" tabIndex={-1}>
          <span className="rg-logo-accent">Tech</span>University
        </Link>
        <div className="rg-left-hero">
          <div className="rg-left-pill"><span className="rg-left-dot" />Admissions Open · Fall 2026</div>
          <h2 className="rg-left-h">Begin your academic journey today.</h2>
          <p className="rg-left-sub">Join 12,000+ students from 80 countries in world-class technology programs.</p>
        </div>
        <div className="rg-left-progs">
          {programs.map(p => (
            <div key={p.id} className="rg-left-prog">
              <span className="rg-left-prog-icon">{p.icon}</span>
              <div>
                <div className="rg-left-prog-name">{p.title}</div>
                <div className="rg-left-prog-rate">{p.rate}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="rg-left-stats">
          {[['12K+', 'Students'], ['98%', 'Graduation'], ['Top 10', 'Tech Academy']].map(([v, l]) => (
            <div key={l} className="rg-left-stat">
              <span className="rg-left-sv">{v}</span>
              <span className="rg-left-sl">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Step1({ d, set, errors }) {
  return (
    <div className="rg-step-body">
      <div className="rg-sec-head">
        <div className="rg-sec-icon rg-sec-icon--blue">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </div>
        <div><h3 className="rg-sec-title">Personal Information</h3><p className="rg-sec-sub">Your identity details for university records.</p></div>
      </div>
      <div className="rg-2col">
        <Field label="First Name" required error={errors.firstName}><RgInput value={d.firstName} onChange={e => set('firstName', e.target.value)} placeholder="First name" error={errors.firstName} /></Field>
        <Field label="Last Name" required error={errors.lastName}><RgInput value={d.lastName} onChange={e => set('lastName', e.target.value)} placeholder="Last name" error={errors.lastName} /></Field>
      </div>
      <div className="rg-2col">
        <Field label="Date of Birth" required error={errors.dob}><RgInput type="date" value={d.dob} onChange={e => set('dob', e.target.value)} error={errors.dob} /></Field>
        <Field label="Gender" required error={errors.gender}>
          <RgSel value={d.gender} onChange={e => set('gender', e.target.value)} error={errors.gender}>
            <option value="">Select…</option>
            {['Male', 'Female', 'Non-binary', 'Prefer not to say'].map(g => <option key={g} value={g}>{g}</option>)}
          </RgSel>
        </Field>
      </div>
      <div className="rg-2col">
        <Field label="Nationality" required error={errors.nationality}>
          <RgSel value={d.nationality} onChange={e => set('nationality', e.target.value)} error={errors.nationality}>
            <option value="">Select…</option>{NATIONALITIES.map(n => <option key={n} value={n}>{n}</option>)}
          </RgSel>
        </Field>
        <Field label="Country" required error={errors.country}>
          <RgSel value={d.country} onChange={e => set('country', e.target.value)} error={errors.country}>
            <option value="">Select…</option>{COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
          </RgSel>
        </Field>
      </div>
    </div>
  );
}

function Step2({ d, set, errors }) {
  const prog = programs.find(p => p.id === d.program);
  return (
    <div className="rg-step-body">
      <div className="rg-sec-head">
        <div className="rg-sec-icon rg-sec-icon--purple">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
        </div>
        <div><h3 className="rg-sec-title">Academic Details</h3><p className="rg-sec-sub">Choose your program, term, and prior education.</p></div>
      </div>
      <Field label="Degree Program" required error={errors.program}>
        <RgSel value={d.program} onChange={e => set('program', e.target.value)} error={errors.program}>
          <option value="">Choose a program…</option>
          {programs.map(p => <option key={p.id} value={p.id}>{p.title} — {p.degree}</option>)}
        </RgSel>
      </Field>
      {prog && (
        <div className="rg-prog-card">
          <div className="rg-prog-icon">{prog.icon}</div>
          <div className="rg-prog-body">
            <div className="rg-prog-title">{prog.title}</div>
            <div className="rg-prog-desc">{prog.description}</div>
            <div className="rg-prog-tags">
              {[prog.duration, prog.credits, prog.rate].map(t => (
                <span key={t} className={`rg-ptag${t.includes('%') ? ' rg-ptag--green' : ''}`}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="rg-2col">
        <Field label="Enrollment Term" required error={errors.term}>
          <RgSel value={d.term} onChange={e => set('term', e.target.value)} error={errors.term}>
            <option value="">Select term…</option>
            {enrollmentTerms.map(t => <option key={t} value={t}>{t}</option>)}
          </RgSel>
        </Field>
        <Field label="Study Mode">
          <RgSel value={d.mode} onChange={e => set('mode', e.target.value)}>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="online">Online</option>
          </RgSel>
        </Field>
      </div>
      <Field label="Education Level">
        <RgSel value={d.education} onChange={e => set('education', e.target.value)}>
          <option value="">Select…</option>
          {EDU.map(e => <option key={e} value={e}>{e}</option>)}
        </RgSel>
      </Field>
    </div>
  );
}

function Step3({ d, set, errors }) {
  return (
    <div className="rg-step-body">
      <div className="rg-sec-head">
        <div className="rg-sec-icon rg-sec-icon--emerald">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        </div>
        <div><h3 className="rg-sec-title">Contact Information</h3><p className="rg-sec-sub">How we will reach you during admissions.</p></div>
      </div>
      <Field label="Email Address" required error={errors.email}>
        <RgInput type="email" value={d.email} onChange={e => set('email', e.target.value)} placeholder="you@email.com" error={errors.email} />
      </Field>
      <Field label="Phone Number" required error={errors.phone}>
        <RgInput type="tel" value={d.phone} onChange={e => set('phone', e.target.value)} placeholder="+1 (555) 000-0000" error={errors.phone} />
      </Field>
      <Field label="Street Address" required error={errors.address}>
        <RgInput value={d.address} onChange={e => set('address', e.target.value)} placeholder="123 Main Street" error={errors.address} />
      </Field>
      <div className="rg-2col">
        <Field label="City" required error={errors.city}>
          <RgInput value={d.city} onChange={e => set('city', e.target.value)} placeholder="City" error={errors.city} />
        </Field>
        <Field label="ZIP Code">
          <RgInput value={d.zip} onChange={e => set('zip', e.target.value)} placeholder="ZIP or postal code" />
        </Field>
      </div>
      <Field label="Emergency Contact Name">
        <RgInput value={d.emergencyName} onChange={e => set('emergencyName', e.target.value)} placeholder="Full name" />
      </Field>
      <Field label="Emergency Contact Phone">
        <RgInput type="tel" value={d.emergencyPhone} onChange={e => set('emergencyPhone', e.target.value)} placeholder="+1 (555) 000-0000" />
      </Field>
    </div>
  );
}

function Step4({ d, set, errors }) {
  const pwMatch = d.password && d.confirmPassword && d.password === d.confirmPassword;
  return (
    <div className="rg-step-body">
      <div className="rg-sec-head">
        <div className="rg-sec-icon rg-sec-icon--amber">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        </div>
        <div><h3 className="rg-sec-title">Account Security</h3><p className="rg-sec-sub">Create a strong password for your student account.</p></div>
      </div>
      <PwField label="Password" value={d.password} onChange={e => set('password', e.target.value)} error={errors.password} showStrength />
      <PwField label="Confirm Password" value={d.confirmPassword} onChange={e => set('confirmPassword', e.target.value)} error={errors.confirmPassword} />
      {pwMatch && (
        <div className="rg-pwmatch">
          <Tick /> Passwords match
        </div>
      )}
      <div className="rg-terms">
        <label className="rg-terms-lbl">
          <input type="checkbox" className="rg-terms-cb" checked={d.acceptTerms} onChange={e => set('acceptTerms', e.target.checked)} />
          <span className="rg-terms-custom">{d.acceptTerms && <Tick />}</span>
          I agree to the TechUniversity{' '}
          <a href="#" className="rg-terms-link" onClick={e => e.preventDefault()}>Enrollment Agreement</a>,{' '}
          <a href="#" className="rg-terms-link" onClick={e => e.preventDefault()}>Terms of Service</a>, and{' '}
          <a href="#" className="rg-terms-link" onClick={e => e.preventDefault()}>Privacy Policy</a>.
        </label>
        {errors.acceptTerms && <span className="rg-err">{errors.acceptTerms}</span>}
      </div>
    </div>
  );
}

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    nationality: '',
    country: '',
    program: '',
    term: '',
    mode: 'full-time',
    education: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    emergencyName: '',
    emergencyPhone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const updateField = (key, val) => {
    setFormData(prev => ({ ...prev, [key]: val }));
    if (errors[key]) {
      setErrors(prev => ({ ...prev, [key]: '' }));
    }
  };

  const validateStep = (currentStep) => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
      if (!formData.dob) newErrors.dob = 'Date of birth is required.';
      if (!formData.gender) newErrors.gender = 'Gender selection is required.';
      if (!formData.nationality) newErrors.nationality = 'Nationality selection is required.';
      if (!formData.country) newErrors.country = 'Country selection is required.';
    } else if (currentStep === 2) {
      if (!formData.program) newErrors.program = 'Please select a program.';
      if (!formData.term) newErrors.term = 'Please select an enrollment term.';
    } else if (currentStep === 3) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
      if (!formData.address.trim()) newErrors.address = 'Street address is required.';
      if (!formData.city.trim()) newErrors.city = 'City is required.';
    } else if (currentStep === 4) {
      if (!formData.password) {
        newErrors.password = 'Password is required.';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters.';
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password.';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match.';
      }
      if (!formData.acceptTerms) {
        newErrors.acceptTerms = 'You must accept the terms & conditions.';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(step)) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const selectedProgram = programs.find(p => p.id === formData.program);

  return (
    <div className="rg-root">
      <LeftPanel />
      <div className="rg-right">
        <div className="rg-form-wrap">
          {status === 'success' ? (
            <div className="rg-success" role="status" aria-live="polite">
              <div className="rg-success-ring" aria-hidden="true">
                <div className="rg-success-icon">
                  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h2 className="rg-success-title">Application Submitted!</h2>
              <p className="rg-success-sub">
                Congratulations, <strong>{formData.firstName} {formData.lastName}</strong>! Your application for the <strong>{selectedProgram?.title}</strong> program ({formData.term}) has been successfully submitted. We will email details to <strong>{formData.email}</strong> shortly.
              </p>
              <div className="rg-success-bar" aria-hidden="true">
                <div className="rg-success-bar-fill" />
              </div>
              <button onClick={() => navigate('/login')} className="rg-submit" style={{ marginTop: '1.5rem' }}>
                Sign In to Portal
              </button>
            </div>
          ) : (
            <>
              <div className="rg-head">
                <span className="rg-head-badge">Student Portal Registration</span>
                <h1 className="rg-head-title">Begin your journey</h1>
                <p className="rg-head-sub">Join world-class engineering &amp; technology programs today.</p>
              </div>

              <StepBar current={step} />

              <form onSubmit={step === 4 ? handleSubmit : handleNext} noValidate>
                {step === 1 && <Step1 d={formData} set={updateField} errors={errors} />}
                {step === 2 && <Step2 d={formData} set={updateField} errors={errors} />}
                {step === 3 && <Step3 d={formData} set={updateField} errors={errors} />}
                {step === 4 && <Step4 d={formData} set={updateField} errors={errors} />}

                <div className="rg-nav-btns">
                  {step > 1 && (
                    <button type="button" onClick={handleBack} className="rg-btn-back" disabled={status === 'loading'}>
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className={`rg-submit-btn ${step === 4 ? 'rg-submit-btn--finish' : ''}`}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <span className="rg-spinner-wrap">
                        <span className="rg-spinner" aria-hidden="true" />
                        Submitting...
                      </span>
                    ) : step === 4 ? (
                      'Submit Registration'
                    ) : (
                      'Continue'
                    )}
                  </button>
                </div>
              </form>

              <p className="rg-footer-text">
                Already have an account?{' '}
                <Link to="/login" className="rg-footer-link">
                  Sign In
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
