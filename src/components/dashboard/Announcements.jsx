import { ANNOUNCEMENTS } from './dashboardData';

const PRIORITY_CONFIG = {
  high:   { label: 'Urgent',  cls: 'ann-priority--high'   },
  medium: { label: 'Notice',  cls: 'ann-priority--medium' },
  low:    { label: 'Info',    cls: 'ann-priority--low'    },
};

function AnnouncementCard({ item }) {
  const priority = PRIORITY_CONFIG[item.priority];
  return (
    <div className="ann-card">
      <div className="ann-card-top">
        <div className="ann-badges">
          <span className={`ann-priority ${priority.cls}`}>{priority.label}</span>
          <span className="ann-category">{item.category}</span>
        </div>
        <span className="ann-date">{item.date}</span>
      </div>
      <h4 className="ann-title">{item.title}</h4>
      <p className="ann-excerpt">{item.excerpt}</p>
      <div className="ann-footer">
        <div className="ann-author">
          <div className={`ann-author-avatar ${item.authorColor}`}>{item.authorInitials}</div>
          <span className="ann-author-name">{item.author}</span>
        </div>
        <button className="ann-read-more">
          Read more
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Announcements() {
  return (
    <div className="dash-card">
      <div className="dash-card-header">
        <h3 className="dash-card-title">Announcements</h3>
        <button className="dash-card-action">See all</button>
      </div>
      <div className="dash-card-body ann-body">
        {ANNOUNCEMENTS.map((item) => (
          <AnnouncementCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
