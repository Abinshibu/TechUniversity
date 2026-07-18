// Security & compliance trust signals shown at the bottom of the form.

const ITEMS = [
  {
    label: '256-bit SSL',
    icon: (
      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    label: 'GDPR Compliant',
    icon: (
      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: '99.9% Uptime',
    icon: (
      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function LoginTrustBar() {
  return (
    <div className="lp-trust-bar">
      {ITEMS.map((item, i) => (
        <span key={item.label} className="lp-trust-item-group">
          <span className="lp-trust-item">
            {item.icon}
            {item.label}
          </span>
          {i < ITEMS.length - 1 && (
            <span className="lp-trust-dot" aria-hidden="true" />
          )}
        </span>
      ))}
    </div>
  );
}
