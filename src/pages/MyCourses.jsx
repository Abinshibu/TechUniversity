import { useState, useMemo } from 'react';
import { GridCard, ListRow } from '../components/courses/CourseCard';
import {
  MY_COURSES, SEMESTERS, CATEGORIES, STATUSES, SORT_OPTIONS,
} from '../components/courses/coursesData';

// ── Icon helpers ──────────────────────────────────────────────────────────
function IcoGrid() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  );
}
function IcoList() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  );
}
function IcoSearch() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </svg>
  );
}
function IcoChevron() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
    </svg>
  );
}

// ── Select wrapper ────────────────────────────────────────────────────────
function FilterSelect({ label, value, options, onChange }) {
  return (
    <div className="mc-filter-group">
      <label className="mc-filter-label">{label}</label>
      <div className="mc-select-wrap">
        <select className="mc-select" value={value} onChange={(e) => onChange(e.target.value)}>
          {options.map((o) => (
            <option key={o} value={o}>{o === 'All' ? `All ${label}s` : o.charAt(0).toUpperCase() + o.slice(1)}</option>
          ))}
        </select>
        <span className="mc-select-icon"><IcoChevron /></span>
      </div>
    </div>
  );
}

// ── Summary bar (counts per status) ──────────────────────────────────────
function SummaryBar({ courses }) {
  const counts = {
    total:     courses.length,
    ongoing:   courses.filter((c) => c.status === 'ongoing').length,
    completed: courses.filter((c) => c.status === 'completed').length,
    upcoming:  courses.filter((c) => c.status === 'upcoming').length,
    credits:   courses.reduce((s, c) => s + c.credits, 0),
  };
  const items = [
    { label: 'Total Courses',     value: counts.total,     accent: 'mc-sum--default' },
    { label: 'Ongoing',           value: counts.ongoing,   accent: 'mc-sum--blue'    },
    { label: 'Completed',         value: counts.completed, accent: 'mc-sum--emerald' },
    { label: 'Upcoming',          value: counts.upcoming,  accent: 'mc-sum--purple'  },
    { label: 'Total Credits',     value: counts.credits,   accent: 'mc-sum--amber'   },
  ];
  return (
    <div className="mc-summary-bar">
      {items.map((item) => (
        <div key={item.label} className={`mc-sum-item ${item.accent}`}>
          <span className="mc-sum-value">{item.value}</span>
          <span className="mc-sum-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────
export default function MyCourses() {
  const [search,   setSearch]   = useState('');
  const [semester, setSemester] = useState('All');
  const [category, setCategory] = useState('All');
  const [status,   setStatus]   = useState('All');
  const [sort,     setSort]     = useState('title-asc');
  const [view,     setView]     = useState('grid'); // 'grid' | 'list'

  const filtered = useMemo(() => {
    let list = MY_COURSES;
    if (search)            list = list.filter((c) => c.title.toLowerCase().includes(search.toLowerCase()) || c.code.toLowerCase().includes(search.toLowerCase()) || c.instructor.toLowerCase().includes(search.toLowerCase()));
    if (semester !== 'All') list = list.filter((c) => c.semester === semester);
    if (category !== 'All') list = list.filter((c) => c.category === category);
    if (status   !== 'All') list = list.filter((c) => c.status   === status);
    list = [...list].sort((a, b) => {
      if (sort === 'title-asc')     return a.title.localeCompare(b.title);
      if (sort === 'title-desc')    return b.title.localeCompare(a.title);
      if (sort === 'progress-desc') return b.progress - a.progress;
      if (sort === 'progress-asc')  return a.progress - b.progress;
      if (sort === 'credits-desc')  return b.credits  - a.credits;
      return 0;
    });
    return list;
  }, [search, semester, category, status, sort]);

  const hasFilters = search || semester !== 'All' || category !== 'All' || status !== 'All';

  return (
    <div className="mc-root">
      {/* ── Page heading ── */}
      <div className="mc-heading">
        <div>
          <h1 className="mc-page-title">My Courses</h1>
          <p className="mc-page-sub">Manage and track all your enrolled courses in one place.</p>
        </div>
      </div>

      {/* ── Summary bar ── */}
      <SummaryBar courses={MY_COURSES} />

      {/* ── Toolbar ── */}
      <div className="mc-toolbar">
        {/* Search */}
        <div className="mc-search-wrap">
          <span className="mc-search-icon"><IcoSearch /></span>
          <input
            className="mc-search"
            type="text"
            placeholder="Search by title, code or instructor…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="mc-search-clear" onClick={() => setSearch('')} aria-label="Clear">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="mc-filters">
          <FilterSelect label="Semester" value={semester} options={SEMESTERS}  onChange={setSemester} />
          <FilterSelect label="Category" value={category} options={CATEGORIES} onChange={setCategory} />
          <FilterSelect label="Status"   value={status}   options={STATUSES}   onChange={setStatus}   />
          <FilterSelect label="Sort by"  value={sort}     options={SORT_OPTIONS.map((o) => o.value)} onChange={setSort} />
        </div>

        {/* View toggle */}
        <div className="mc-view-toggle">
          <button
            className={`mc-view-btn ${view === 'grid' ? 'mc-view-btn--active' : ''}`}
            onClick={() => setView('grid')}
            aria-label="Grid view"
            title="Grid view"
          ><IcoGrid /></button>
          <button
            className={`mc-view-btn ${view === 'list' ? 'mc-view-btn--active' : ''}`}
            onClick={() => setView('list')}
            aria-label="List view"
            title="List view"
          ><IcoList /></button>
        </div>
      </div>

      {/* ── Results count + clear ── */}
      <div className="mc-results-bar">
        <span className="mc-results-count">
          {filtered.length} course{filtered.length !== 1 ? 's' : ''}
          {hasFilters && ' found'}
        </span>
        {hasFilters && (
          <button className="mc-clear-btn" onClick={() => { setSearch(''); setSemester('All'); setCategory('All'); setStatus('All'); }}>
            Clear filters
          </button>
        )}
      </div>

      {/* ── Course grid / list ── */}
      {filtered.length === 0 ? (
        <div className="mc-empty">
          <svg width="48" height="48" fill="none" stroke="#cbd5e1" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
          <p>No courses match your filters.</p>
          <button className="mc-clear-btn" onClick={() => { setSearch(''); setSemester('All'); setCategory('All'); setStatus('All'); }}>
            Clear all filters
          </button>
        </div>
      ) : view === 'grid' ? (
        <div className="mc-grid">
          {filtered.map((course) => <GridCard key={course.id} course={course} />)}
        </div>
      ) : (
        <div className="mc-list">
          <div className="mc-list-header">
            <span>Course</span>
            <span>Progress</span>
            <span>Details</span>
            <span>Grade</span>
            <span>Actions</span>
          </div>
          {filtered.map((course) => <ListRow key={course.id} course={course} />)}
        </div>
      )}
    </div>
  );
}
