// Shown after successful authentication while the redirect delay runs.

export default function LoginSuccess() {
  return (
    <div className="lp-success" role="status" aria-live="polite">
      {/* Animated green ring */}
      <div className="lp-success-ring" aria-hidden="true">
        <div className="lp-success-icon">
          <svg
            width="32"
            height="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <h2 className="lp-success-title">Welcome back!</h2>
      <p className="lp-success-sub">
        Authentication successful. Redirecting to your dashboard…
      </p>

      {/* Animated progress bar */}
      <div className="lp-success-bar" aria-hidden="true">
        <div className="lp-success-bar-fill" />
      </div>
    </div>
  );
}
