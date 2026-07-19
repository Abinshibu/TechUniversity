/**
 * Profile.jsx — Student Profile page orchestrator.
 *
 * Composes all sub-components. Owns no state — every piece is self-contained.
 *
 * src/components/profile/
 *   profileData.js          — all mock data
 *   ProfileHeader.jsx       — cover banner, avatar, name, status, quick actions
 *   ProfileStats.jsx        — CGPA / Credits / Attendance / Courses stat bar
 *   ProfileCompletion.jsx   — completion progress checklist
 *   PersonalDetails.jsx     — personal + academic + contact info section cards
 *   EmergencyContacts.jsx   — parents & emergency contacts + documents
 *   ActivitySecurity.jsx    — recent activity timeline + security panel
 */

import ProfileHeader     from '../components/profile/ProfileHeader';
import ProfileStats      from '../components/profile/ProfileStats';
import ProfileCompletion from '../components/profile/ProfileCompletion';
import PersonalDetails   from '../components/profile/PersonalDetails';
import EmergencyContacts from '../components/profile/EmergencyContacts';
import ActivitySecurity  from '../components/profile/ActivitySecurity';

export default function Profile() {
  return (
    <div className="pf-page">
      {/* 1. Hero header: cover + avatar + name + actions */}
      <ProfileHeader />

      {/* 2. Academic highlight stats */}
      <ProfileStats />

      {/* 3. Main two-column layout: left = info cards, right = completion + activity */}
      <div className="pf-main-grid">

        {/* Left: Personal / Academic / Contact info */}
        <div className="pf-col-main">
          <PersonalDetails />
          <EmergencyContacts />
        </div>

        {/* Right: Profile completion + Activity + Security */}
        <div className="pf-col-side">
          <ProfileCompletion />
          <ActivitySecurity />
        </div>

      </div>
    </div>
  );
}
