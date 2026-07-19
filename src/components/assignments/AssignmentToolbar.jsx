import { COURSE_FILTER_OPTIONS, STATUS_FILTER_OPTIONS, PRIORITY_OPTIONS, SORT_OPTIONS } from './assignmentsData';

function ChevronIcon() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
    </svg>
  );
}

function Select({ label, value, options, onChange }) {
  return (
    <div className="atb-select-wrap">
      <select className="atb-select" value={value} onChange={(e) => onChange(e.target.value)} aria-label={label}>
        {options.map((o) => {
          const val  = typeof o === 'object' ? o.value : o;
          const text = typeof o === 'object' ? o.label : (o.charAt(0).toUpperCase() + o.slice(1));
          return <option key={val} value={val}>{text}</option>;
        })}
      </select>
      <span className="atb-select-icon"><ChevronIcon /></span>
    </div>
  );
}

export default function AssignmentToolbar({ search, onSearch, course, onCourse, priority, onPriority, sort, onSort, onClear, hasFilters }) {
  return (
    <div className="atb-root">
      {/* Search */}
      <div className="atb-search-wrap">
        <svg className="atb-search-icon" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input
          className="atb-search"
          type="text"
          placeholder="Search by title, course, or instructor…"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          aria-label="Search assignments"
        />
        {search && (
          <button className="atb-search-clear" onClick={() => onSearch('')} aria-label="Clear search">
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        )}
      </div>

      {/* Filters row */}
      <div className="atb-filters">
        <Select label="Course"   value={course}   options={COURSE_FILTER_OPTIONS} onChange={onCourse}   />
        <Select label="Priority" value={priority} options={PRIORITY_OPTIONS}       onChange={onPriority} />
        <Select label="Sort by"  value={sort}     options={SORT_OPTIONS}            onChange={onSort}     />

        {hasFilters && (
          <button className="atb-clear-btn" onClick={onClear} type="button">
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
