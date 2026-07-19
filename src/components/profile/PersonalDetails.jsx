// PersonalDetails.jsx — Personal info + academic information section cards.
import { STUDENT } from './profileData';

function InfoRow({ label, value, link }) {
  return (
    <div className="pd-row">
      <span className="pd-label">{label}</span>
      {link
        ? <a href={link} className="pd-value pd-value--link" target="_blank" rel="noopener noreferrer">{value}</a>
        : <span className="pd-value">{value || '—'}</span>
      }
    </div>
  );
}

function SectionCard({ title, icon, children }) {
  return (
    <div className="pd-card">
      <div className="pd-card-header">
        <span className="pd-card-icon" aria-hidden="true">{icon}</span>
        <h3 className="pd-card-title">{title}</h3>
      </div>
      <div className="pd-card-body">{children}</div>
    </div>
  );
}

export default function PersonalDetails() {
  const s = STUDENT;
  return (
    <div className="pd-grid">

      {/* Personal Details */}
      <SectionCard title="Personal Details" icon={
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      }>
        <InfoRow label="Full Name"      value={s.name}            />
        <InfoRow label="Preferred Name" value={s.preferredName}   />
        <InfoRow label="Date of Birth"  value={s.dob}             />
        <InfoRow label="Gender"         value={s.gender}          />
        <InfoRow label="Nationality"    value={s.nationality}     />
        <InfoRow label="Blood Group"    value={s.bloodGroup}      />
        <InfoRow label="Languages"      value={s.languages.join(', ')} />
      </SectionCard>

      {/* Academic Information */}
      <SectionCard title="Academic Information" icon={
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
        </svg>
      }>
        <InfoRow label="Student ID"       value={s.id}             />
        <InfoRow label="Program"          value={s.program}        />
        <InfoRow label="Department"       value={s.department}     />
        <InfoRow label="Current Semester" value={s.semester}       />
        <InfoRow label="Year"             value={s.year}           />
        <InfoRow label="Enrolled"         value={s.enrollmentDate} />
        <InfoRow label="Expected Grad."   value={s.expectedGrad}   />
        <InfoRow label="Academic Standing"value={s.standing}       />
        <InfoRow label="Advisor"          value={s.advisor} link={`mailto:${s.advisorEmail}`} />
      </SectionCard>

      {/* Contact Details */}
      <SectionCard title="Contact Details" icon={
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      }>
        <InfoRow label="University Email" value={s.email}         link={`mailto:${s.email}`}         />
        <InfoRow label="Personal Email"   value={s.personalEmail} link={`mailto:${s.personalEmail}`} />
        <InfoRow label="Phone"            value={s.phone}         link={`tel:${s.phone}`}            />
        <InfoRow label="Address"          value={s.address}       />
        <InfoRow label="City / State"     value={`${s.city}, ${s.state}`} />
        <InfoRow label="Country"          value={s.country}       />
        <InfoRow label="ZIP"              value={s.zip}           />
        <InfoRow label="LinkedIn"         value={s.linkedin}      link={`https://${s.linkedin}`}     />
        <InfoRow label="GitHub"           value={s.github}        link={`https://${s.github}`}       />
      </SectionCard>

    </div>
  );
}
