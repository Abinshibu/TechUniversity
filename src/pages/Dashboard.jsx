/**
 * Dashboard.jsx — Overview page orchestrator.
 *
 * Owns zero state. Just composes sub-components in a
 * responsive 12-column grid layout.
 *
 * Sub-components live in src/components/dashboard/:
 *   WelcomeBanner     — greeting, date, semester pill, CTA buttons, stat chips
 *   StatCards         — 4 cards with sparklines and trend indicators
 *   UpcomingSchedule  — today's classes in a timeline layout
 *   AcademicProgress  — SVG progress ring + per-course bars
 *   RecentActivity    — activity timeline with colour-coded icons
 *   Announcements     — priority-badged announcement cards
 *   GpaTrendChart     — pure-SVG area line chart over 6 semesters
 *   QuickActions      — shortcut tile grid
 */

import WelcomeBanner    from '../components/dashboard/WelcomeBanner';
import StatCards        from '../components/dashboard/StatCards';
import UpcomingSchedule from '../components/dashboard/UpcomingSchedule';
import AcademicProgress from '../components/dashboard/AcademicProgress';
import RecentActivity   from '../components/dashboard/RecentActivity';
import Announcements    from '../components/dashboard/Announcements';
import GpaTrendChart    from '../components/dashboard/GpaTrendChart';
import QuickActions     from '../components/dashboard/QuickActions';

export default function Dashboard() {
  return (
    <div className="dov-root">

      {/* ── Row 1: Welcome banner (full-width) ── */}
      <WelcomeBanner />

      {/* ── Row 2: Stat cards (4-col) ── */}
      <StatCards />

      {/* ── Row 3: Schedule (wide) + Academic Progress (narrow) ── */}
      <div className="dov-grid-3">
        <div className="dov-col-wide">
          <UpcomingSchedule />
        </div>
        <div className="dov-col-narrow">
          <AcademicProgress />
        </div>
      </div>

      {/* ── Row 4: GPA chart (wide) + Quick Actions (narrow) ── */}
      <div className="dov-grid-3">
        <div className="dov-col-wide">
          <GpaTrendChart />
        </div>
        <div className="dov-col-narrow">
          <QuickActions />
        </div>
      </div>

      {/* ── Row 5: Recent Activity + Announcements (equal halves) ── */}
      <div className="dov-grid-2">
        <RecentActivity />
        <Announcements />
      </div>

    </div>
  );
}
