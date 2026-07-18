// Renders the animated error alert.
// Receives the error message string as a prop; renders nothing when empty.

export default function LoginAlert({ message }) {
  if (!message) return null;

  return (
    <div className="lp-alert" role="alert" aria-live="assertive">
      <svg
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <span>{message}</span>
    </div>
  );
}
