function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

function formatDate() {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function LoginFormHeader() {
  return (
    <div className="lp-form-header">
      <div className="lp-greeting-row">
        <div className="lp-greeting-date">{formatDate()}</div>
      </div>
      <span className="lp-form-eyebrow">Student Portal</span>
      <h1 className="lp-form-title">
        {getGreeting()}&nbsp;
        <span className="lp-form-wave">👋</span>
      </h1>
      <p className="lp-form-sub">
        Sign in to access your courses, grades and schedule.
      </p>
    </div>
  );
}
