/**
 * Assignments.jsx — page orchestrator.
 *
 * Owns all filter / tab state; delegates UI to focused sub-components.
 *
 * src/components/assignments/
 *   assignmentsData.js     — mock data, filter options
 *   AssignmentStats.jsx    — 5 stat cards, clickable to filter
 *   AssignmentTabs.jsx     — All / Pending / Submitted / Graded / Overdue tabs
 *   AssignmentToolbar.jsx  — search bar, course/priority/sort selects
 *   AssignmentTable.jsx    — responsive table, countdown, action menu
 */

import { useState, useMemo } from 'react';
import AssignmentStats   from '../components/assignments/AssignmentStats';
import AssignmentTabs    from '../components/assignments/AssignmentTabs';
import AssignmentToolbar from '../components/assignments/AssignmentToolbar';
import AssignmentTable   from '../components/assignments/AssignmentTable';
import { ASSIGNMENTS }   from '../components/assignments/assignmentsData';

// Overall completion ring (purely decorative progress indicator)
function CompletionRing({ pct }) {
  const R = 22, circ = 2 * Math.PI * R;
  const offset = circ - (pct / 100) * circ;
  return (
    <div className="apr-ring-wrap" title={`${pct}% of assignments completed`}>
      <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
        <circle cx="28" cy="28" r={R} fill="none" stroke="#e2e8f0" strokeWidth="5"/>
        <circle cx="28" cy="28" r={R} fill="none" stroke="url(#aprGrad)" strokeWidth="5"
          strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
          transform="rotate(-90 28 28)" style={{ transition: 'stroke-dashoffset 1s ease' }}/>
        <defs>
          <linearGradient id="aprGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb"/><stop offset="100%" stopColor="#6366f1"/>
          </linearGradient>
        </defs>
        <text x="50%" y="54%" textAnchor="middle" dominantBaseline="middle"
          fontSize="10" fontWeight="800" fill="#0f172a" fontFamily="Plus Jakarta Sans, sans-serif">
          {pct}%
        </text>
      </svg>
    </div>
  );
}

export default function Assignments() {
  const [tab,      setTab]      = useState('all');
  const [search,   setSearch]   = useState('');
  const [course,   setCourse]   = useState('All Courses');
  const [priority, setPriority] = useState('All Priority');
  const [sort,     setSort]     = useState('due-asc');

  const handleStatClick = (key) => {
    if (key === 'total') setTab('all');
    else setTab(key);
  };

  const clearFilters = () => {
    setSearch(''); setCourse('All Courses'); setPriority('All Priority');
  };

  const hasFilters = search !== '' || course !== 'All Courses' || priority !== 'All Priority';

  // Apply tab, search, course, priority, and sort
  const filtered = useMemo(() => {
    let list = ASSIGNMENTS;

    // Tab filter
    if (tab === 'overdue') {
      list = list.filter((a) => a.status === 'overdue' || a.status === 'late');
    } else if (tab !== 'all') {
      list = list.filter((a) => a.status === tab);
    }

    // Search
    if (search) {
      const q = search.toLowerCase();
      list = list.filter((a) =>
        a.title.toLowerCase().includes(q) ||
        a.course.toLowerCase().includes(q) ||
        a.courseCode.toLowerCase().includes(q) ||
        a.instructor.toLowerCase().includes(q)
      );
    }

    // Course filter
    if (course !== 'All Courses') {
      const code = course.split('·')[0].trim();
      list = list.filter((a) => a.courseCode === code);
    }

    // Priority filter
    if (priority !== 'All Priority') {
      list = list.filter((a) => a.priority === priority);
    }

    // Sort
    return [...list].sort((a, b) => {
      if (sort === 'due-asc')       return new Date(a.dueDate) - new Date(b.dueDate);
      if (sort === 'due-desc')      return new Date(b.dueDate) - new Date(a.dueDate);
      if (sort === 'title-asc')     return a.title.localeCompare(b.title);
      if (sort === 'priority-desc') {
        const order = { high: 0, medium: 1, low: 2 };
        return order[a.priority] - order[b.priority];
      }
      if (sort === 'marks-desc') return (b.marks ?? -1) - (a.marks ?? -1);
      return 0;
    });
  }, [tab, search, course, priority, sort]);

  // Completion percentage for the ring
  const completedCount = ASSIGNMENTS.filter((a) => a.status === 'graded' || a.status === 'submitted').length;
  const completionPct  = Math.round((completedCount / ASSIGNMENTS.length) * 100);

  return (
    <div className="ap-root">

      {/* ── Page heading ── */}
      <div className="ap-heading">
        <div className="ap-heading-text">
          <h1 className="ap-page-title">Assignments</h1>
          <p className="ap-page-sub">Track all your coursework deadlines, submissions, and grades.</p>
        </div>
        <div className="ap-heading-right">
          <CompletionRing pct={completionPct} />
          <div className="ap-completion-label">
            <span className="ap-completion-val">{completedCount}/{ASSIGNMENTS.length}</span>
            <span className="ap-completion-sub">Submitted</span>
          </div>
        </div>
      </div>

      {/* ── Stat cards ── */}
      <AssignmentStats onStatClick={handleStatClick} />

      {/* ── Tabs ── */}
      <AssignmentTabs active={tab} onChange={setTab} filteredList={ASSIGNMENTS} />

      {/* ── Toolbar ── */}
      <AssignmentToolbar
        search={search}   onSearch={setSearch}
        course={course}   onCourse={setCourse}
        priority={priority} onPriority={setPriority}
        sort={sort}       onSort={setSort}
        onClear={clearFilters}
        hasFilters={hasFilters}
      />

      {/* ── Results count ── */}
      <div className="ap-results-bar">
        <span className="ap-results-count">
          {filtered.length} assignment{filtered.length !== 1 ? 's' : ''}
          {tab !== 'all' ? ` · ${tab}` : ''}
        </span>
        {hasFilters && (
          <button className="ap-clear-link" onClick={clearFilters} type="button">
            Clear filters
          </button>
        )}
      </div>

      {/* ── Table ── */}
      <AssignmentTable assignments={filtered} />

    </div>
  );
}
