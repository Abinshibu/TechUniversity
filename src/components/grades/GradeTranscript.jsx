// GradeTranscript.jsx — Official transcript view grouped by semester.
import { ALL_GRADES, SEMESTER_SUMMARIES, STUDENT_SUMMARY, gradeToCls, gradeToPoints } from './gradesData';

function semesterGpa(rows) {
  const graded = rows.filter((r) => r.grade !== null);
  if (!graded.length) return null;
  const totalPoints  = graded.reduce((s, r) => s + gradeToPoints(r.grade) * r.credits, 0);
  const totalCredits = graded.reduce((s, r) => s + r.credits, 0);
  return (totalPoints / totalCredits).toFixed(2);
}

function TranscriptBlock({ semester, rows }) {
  const gpa    = semesterGpa(rows);
  const credits = rows.reduce((s, r) => s + r.credits, 0);
  return (
    <div className="gtr-block">
      <div className="gtr-block-header">
        <span className="gtr-sem-title">{semester}</span>
        <div className="gtr-sem-meta">
          {gpa && <span className="gtr-sem-gpa">Semester GPA: <strong>{gpa}</strong></span>}
          <span className="gtr-sem-cr">{credits} credits</span>
        </div>
      </div>
      <table className="gtr-table">
        <thead>
          <tr>
            <th className="gtr-th">Code</th>
            <th className="gtr-th">Course</th>
            <th className="gtr-th">Credits</th>
            <th className="gtr-th">Grade</th>
            <th className="gtr-th">Points</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="gtr-row">
              <td className="gtr-td gtr-td--code">{r.code}</td>
              <td className="gtr-td">{r.course}</td>
              <td className="gtr-td gtr-td--center">{r.credits}</td>
              <td className="gtr-td gtr-td--center">
                {r.grade
                  ? <span className={`gr-grade-badge ${gradeToCls(r.grade)}`}>{r.grade}</span>
                  : <span className="gr-grade-ongoing">IP</span>}
              </td>
              <td className="gtr-td gtr-td--center">
                {r.grade ? gradeToPoints(r.grade).toFixed(1) : '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function GradeTranscript() {
  const semesters = [...new Set(ALL_GRADES.map((g) => g.semester))];
  const s = STUDENT_SUMMARY;

  return (
    <div className="gtr-root">
      {/* Header */}
      <div className="gtr-header">
        <div className="gtr-header-left">
          <div className="gtr-uni-name">TechUniversity</div>
          <div className="gtr-uni-sub">Official Academic Transcript</div>
        </div>
        <button className="gtr-print-btn" onClick={() => window.print()}>
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
          </svg>
          Print Transcript
        </button>
      </div>

      {/* Student info */}
      <div className="gtr-student-bar">
        <div className="gtr-student-info">
          <span className="gtr-student-label">Student</span>
          <span className="gtr-student-val">Alex Student</span>
        </div>
        <div className="gtr-student-info">
          <span className="gtr-student-label">Program</span>
          <span className="gtr-student-val">{s.program}</span>
        </div>
        <div className="gtr-student-info">
          <span className="gtr-student-label">CGPA</span>
          <span className="gtr-student-val gtr-student-val--accent">{s.cgpa}</span>
        </div>
        <div className="gtr-student-info">
          <span className="gtr-student-label">Credits</span>
          <span className="gtr-student-val">{s.totalCredits} / {s.requiredCredits}</span>
        </div>
        <div className="gtr-student-info">
          <span className="gtr-student-label">Standing</span>
          <span className="gtr-student-val gtr-student-val--green">{s.standing}</span>
        </div>
      </div>

      {/* Blocks */}
      {semesters.map((sem) => (
        <TranscriptBlock key={sem} semester={sem} rows={ALL_GRADES.filter((g) => g.semester === sem)} />
      ))}
    </div>
  );
}
