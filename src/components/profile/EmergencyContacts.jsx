// EmergencyContacts.jsx — Parents & Emergency Contacts + Documents sections.
import { EMERGENCY_CONTACTS, DOCUMENTS } from './profileData';

const DOC_STATUS = {
  verified: { label: 'Verified', cls: 'pf-doc-verified' },
  pending:  { label: 'Pending',  cls: 'pf-doc-pending'  },
};

const DOC_ICONS = {
  id: (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0"/>
    </svg>
  ),
  cert: (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  ),
  transcript: (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>
  ),
  medical: (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
    </svg>
  ),
  award: (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  ),
};

function SectionCard({ title, icon, children }) {
  return (
    <div className="pf-section-card">
      <div className="pf-section-header">
        <span className="pf-section-icon">{icon}</span>
        <h3 className="pf-section-title">{title}</h3>
      </div>
      {children}
    </div>
  );
}

export default function EmergencyContacts() {
  return (
    <div className="pf-ec-root">

      {/* Emergency Contacts */}
      <SectionCard title="Parents & Emergency Contacts" icon={
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      }>
        <div className="pf-ec-list">
          {EMERGENCY_CONTACTS.map((c) => (
            <div key={c.id} className="pf-ec-card">
              <div className={`pf-ec-avatar ${c.color}`}>{c.initials}</div>
              <div className="pf-ec-info">
                <div className="pf-ec-name">{c.name}</div>
                <div className="pf-ec-relation">{c.relation}</div>
                <div className="pf-ec-details">
                  <a href={`tel:${c.phone}`} className="pf-ec-link">{c.phone}</a>
                  <span className="pf-ec-sep">·</span>
                  <a href={`mailto:${c.email}`} className="pf-ec-link">{c.email}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Documents */}
      <SectionCard title="Documents & Files" icon={
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
      }>
        <div className="pf-doc-list">
          {DOCUMENTS.map((doc) => {
            const st = DOC_STATUS[doc.status];
            return (
              <div key={doc.id} className="pf-doc-row">
                <div className="pf-doc-icon-wrap">{DOC_ICONS[doc.icon]}</div>
                <div className="pf-doc-info">
                  <span className="pf-doc-name">{doc.name}</span>
                  <span className="pf-doc-meta">{doc.type} · {doc.date}</span>
                </div>
                <span className={`pf-doc-status ${st.cls}`}>{st.label}</span>
                <button className="pf-doc-dl" title="Download" onClick={() => alert(`Downloading ${doc.name}…`)}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </SectionCard>

    </div>
  );
}
