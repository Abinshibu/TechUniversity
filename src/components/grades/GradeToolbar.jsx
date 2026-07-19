// GradeToolbar.jsx — Search + semester/year/sort filters

import { SEMESTER_OPTIONS, YEAR_OPTIONS, SORT_OPTIONS } from './gradesData';

function ChevronIcon() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
    </svg>
  );
}

function GradeSelect({ label, value, options, onChange }) {
  return (
    <div className="gtb-select-wrap">
      <select className="gtb-select" value={value} onChange={(e) => onChange(e.target.value)} aria-label={label}>
        {options.map((o) => {
          const val  = typeof o === 'object' ? o.value : o;
          const text = typeof o === 'object' ? o.label : o;
          return <option key={val} value={val}>{text}</option>;
        })}
      </select>
      <span className="gtb-select-icon" aria-hidden="true"><ChevronIcon /></span>
    </div>
  );
}

export default function GradeToolbar({ search, onSearch, semester, onSemester, year, onYear, sort, onSort, hasFilters, onClear }) {
  return (
    <div className="gtb-root">
      {/* Search */}
      <div className="gtb-search-wrap">
        <svg className="gtb-search-icon" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input
          className="gtb-search"
          type="text"
          placeholder="Search by course name or code…"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          aria-label="Search grades"
        />
        {search && (
          <button className="gtb-search-clear" onClick={() => onSearch('')} aria-label="Clear search">
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        )}
      </div>

      {/* Selects */}
      <div className="gtb-filters">
        <GradeSelect label="Semester" value={semester} options={SEMESTER_OPTIONS} onChange={onSemester}/>
        <GradeSelect label="Year"     value={year}     options={YEAR_OPTIONS}     onChange={onYear}    />
        <GradeSelect label="Sort by"  value={sort}     options={SORT_OPTIONS}     onChange={onSort}    />
        {hasFilters && (
          <button className="gtb-clear-btn" onClick={onClear} type="button">
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
