import { SCHEDULE } from './dashboardData';
import { Link } from 'react-router-dom';

const TYPE_ICONS = {
  Lecture: (
    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
    </svg>
  ),
  Lab: (
    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  Seminar: (
    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
    </svg>
  ),
};

function ScheduleItem({ item, isLast }) {
  return (
    <div className={`us-item ${!isLast ? 'us-item--lined' : ''}`}>
      {/* Timeline dot */}
      <div className="us-timeline-col">
        <div className={`us-dot ${item.color}`} />
        {!isLast && <div className="us-line" />}
      </div>

      {/* Card */}
      <div className={`us-card ${item.color}`}>
        {/* Left accent bar */}
        <div className="us-card-accent" />

        <div className="us-card-body">
          {/* Top: code + type badge + time */}
          <div className="us-card-top">
            <div className="us-card-codes">
              <span className="us-code">{item.code}</span>
              <span className={`us-type-badge us-type-badge--${item.type.toLowerCase()}`}>
                {TYPE_ICONS[item.type]}
                {item.type}
              </span>
            </div>
            <span className="us-time-badge">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {item.time}
            </span>
          </div>

          {/* Course name */}
          <h4 className="us-course-name">{item.course}</h4>

          {/* Bottom meta */}
          <div className="us-card-meta">
            <div className="us-instructor">
              <div className="us-instructor-avatar">{item.instructorInitials}</div>
              <span>{item.instructor}</span>
            </div>
            <div className="us-room">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {item.room}
            </div>
            <div className="us-duration">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {item.duration}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UpcomingSchedule() {
  return (
    <div className="dash-card">
      <div className="dash-card-header">
        <div className="us-header-left">
          <h3 className="dash-card-title">Today's Schedule</h3>
          <span className="us-count-pill">{SCHEDULE.length} classes</span>
        </div>
        <Link to="/dashboard/schedule" className="dash-card-action">
          Full calendar →
        </Link>
      </div>

      <div className="dash-card-body us-body">
        {SCHEDULE.length === 0 ? (
          <div className="dash-empty-state">
            <svg width="36" height="36" fill="none" stroke="#cbd5e1" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p>No classes scheduled for today.</p>
          </div>
        ) : (
          <div className="us-list">
            {SCHEDULE.map((item, i) => (
              <ScheduleItem key={item.id} item={item} isLast={i === SCHEDULE.length - 1} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
