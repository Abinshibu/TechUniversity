/**
 * Grades.jsx — page orchestrator.
 *
 * Owns all tab/filter state. Delegates every UI section to sub-components.
 *
 * src/components/grades/
 *   gradesData.js        — mock data + helpers
 *   GradeHero.jsx        — CGPA ring, stats, credit bar, quick-action buttons
 *   GradeTabs.jsx        — Current / Previous / Transcript / Analytics tabs
 *   GradeToolbar.jsx     — search + semester / year / sort filters
 *   GradeTable.jsx       — responsive grade records table
 *   GradeCharts.jsx      — GPA trend SVG, grade donut, semester bar chart
 *   GradeTranscript.jsx  — official transcript grouped by semester with print
 */

import { useState, useMemo } from 'react';
import GradeHero       from '../components/grades/GradeHero';
import GradeTabs       from '../components/grades/GradeTabs';
import GradeToolbar    from '../components/grades/GradeToolbar';
import GradeTable      from '../components/grades/GradeTable';
import GradeCharts     from '../components/grades/GradeCharts';
import GradeTranscript from '../components/grades/GradeTranscript';
import { ALL_GRADES }  from '../components/grades/gradesData';

export default function Grades() {
  const [tab,      setTab]      = useState('current');
  const [search,   setSearch]   = useState('');
  const [semester, setSemester] = useState('All Semesters');
  const [year,     setYear]     = useState('All Years');
  const [sort,     setSort]     = useState('course-asc');

  const hasFilters = search !== '' || semester !== 'All Semesters' || year !== 'All Years';

  const clearFilters = () => { setSearch(''); setSemester('All Semesters'); setYear('All Years'); };

  // Determine base list from active tab
  const baseList = useMemo(() => {
    if (tab === 'current')  return ALL_GRADES.filter((g) => g.semester === 'Fall 2026');
    if (tab === 'previous') return ALL_GRADES.filter((g) => g.semester !== 'Fall 2026');
    return ALL_GRADES; // transcript and analytics use full list
  }, [tab]);

  // Apply search, semester, year filters + sort
  const filtered = useMemo(() => {
    let list = baseList;
    if (search)                     list = list.filter((g) => g.course.toLowerCase().includes(search.toLowerCase()) || g.code.toLowerCase().includes(search.toLowerCase()));
    if (semester !== 'All Semesters') list = list.filter((g) => g.semester === semester);
    if (year !== 'All Years')         list = list.filter((g) => g.year === year);
    return [...list].sort((a, b) => {
      if (sort === 'course-asc')   return a.course.localeCompare(b.course);
      if (sort === 'grade-desc')   return (b.marks ?? -1) - (a.marks ?? -1);
      if (sort === 'credits-desc') return b.credits - a.credits;
      if (sort === 'marks-desc')   return (b.marks ?? -1) - (a.marks ?? -1);
      return 0;
    });
  }, [baseList, search, semester, year, sort]);

  const showTable    = tab === 'current' || tab === 'previous';
  const showCharts   = tab === 'analytics';
  const showTranscript = tab === 'transcript';

  return (
    <div className="gp-root">

      {/* ── Hero ── */}
      <GradeHero />

      {/* ── Tabs ── */}
      <GradeTabs active={tab} onChange={setTab} />

      {/* ── Toolbar (not shown on analytics/transcript tabs) ── */}
      {showTable && (
        <GradeToolbar
          search={search}     onSearch={setSearch}
          semester={semester} onSemester={setSemester}
          year={year}         onYear={setYear}
          sort={sort}         onSort={setSort}
          hasFilters={hasFilters} onClear={clearFilters}
        />
      )}

      {/* ── Results count ── */}
      {showTable && (
        <div className="gp-results-bar">
          <span className="gp-results-count">
            {filtered.length} course{filtered.length !== 1 ? 's' : ''}
          </span>
          {hasFilters && (
            <button className="gp-clear-link" onClick={clearFilters} type="button">Clear filters</button>
          )}
        </div>
      )}

      {/* ── Content area ── */}
      {showTable     && <GradeTable      rows={filtered} />}
      {showCharts    && <GradeCharts />}
      {showTranscript && <GradeTranscript />}

    </div>
  );
}
