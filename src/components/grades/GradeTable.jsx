// GradeTable.jsx — Responsive grade record table with sorting + empty state.
import { gradeToCls, gradeToPoints } from './gradesData';

function pctColor(marks) {
  if (marks === null) return '';
  if (marks >= 90) return 'gr-pct--excellent';
  if (marks >= 80) return 'gr-pct--good';
  if (marks >= 70) return 'gr-pct--ok';
  return 'gr-pct--low';
}

function GradeRow({ row }) {
  const points    = row.grade ? gradeToPoints(row.grade) : null;
  const pct       = row.marks !== null ? `${row.marks}%` : '—';
  const gradeCls  = gradeToCls(row.grade);

  return (
    <tr className="gr-row">
      <td className="gr-cell gr-cell--course">
        <div className="gr-course-info">
          <div className={`gr-course-dot ${row.color}`}/>
          <div>
            <div className="gr-course-name">{row.course}</div>
            <div className="gr-course-code">{row.code}</div>
          </div>
        </div>
      </td>
      <td className="gr-cell gr-cell--instr">
        <div className="gr-instr">
          <div className={`gr-instr-avatar ${row.color}`}>{row.initials}</div>
          <span className="gr-instr-name">{row.instructor}</span>
        </div>
      </td>
      <td className="gr-cell gr-cell--sem">{row.semester}</td>
      <td className="gr-cell gr-cell--cr">{row.credits}</td>
      <td className="gr-cell gr-cell--grade">
        {row.grade
          ? <span className={`gr-grade-badge ${gradeCls}`}>{row.grade}</span>
          : <span className="gr-grade-ongoing">In Progress</span>}
      </td>
      <td className="gr-cell gr-cell--marks">
        {row.marks !== null ? (
          <div className="gr-marks-wrap">
            <span className={`gr-pct ${pctColor(row.marks)}`}>{pct}</span>
            <div className="gr-marks-track">
              <div className="gr-marks-fill" style={{ width: pct, background: row.marks >= 80 ? '#10b981' : row.marks >= 70 ? '#f59e0b' : '#ef4444' }}/>
            </div>
          </div>
        ) : <span className="gr-na">—</span>}
      </td>
      <td className="gr-cell gr-cell--pts">
        {points !== null ? (
          <span className="gr-pts">{points.toFixed(1)}</span>
        ) : <span className="gr-na">—</span>}
      </td>
    </tr>
  );
}

export default function GradeTable({ rows }) {
  if (!rows.length) {
    return (
      <div className="gr-empty">
        <svg width="44" height="44" fill="none" stroke="#cbd5e1" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
        <p>No grades match the current filters.</p>
      </div>
    );
  }
  return (
    <div className="gr-table-wrap">
      <table className="gr-table">
        <thead>
          <tr className="gr-thead-row">
            <th className="gr-th">Course</th>
            <th className="gr-th gr-th--hide-md">Instructor</th>
            <th className="gr-th gr-th--hide-sm">Semester</th>
            <th className="gr-th">Cr.</th>
            <th className="gr-th">Grade</th>
            <th className="gr-th">Marks</th>
            <th className="gr-th">GPA Pts</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => <GradeRow key={r.id} row={r} />)}
        </tbody>
      </table>
    </div>
  );
}
