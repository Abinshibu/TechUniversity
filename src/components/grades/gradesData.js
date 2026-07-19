// gradesData.js — mock data for the Grades page.
// Replace with real API calls when backend is ready.

// Grade → GPA points conversion
export function gradeToPoints(grade) {
  const map = { 'A+': 4.0, 'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D': 1.0, 'F': 0.0 };
  return map[grade] ?? 0;
}

export function gradeToCls(grade) {
  if (!grade || grade === '—') return 'gr-grade--na';
  if (grade.startsWith('A'))   return 'gr-grade--a';
  if (grade.startsWith('B'))   return 'gr-grade--b';
  if (grade.startsWith('C'))   return 'gr-grade--c';
  return 'gr-grade--d';
}

// All course grades across semesters
export const ALL_GRADES = [
  // Fall 2026 (current)
  { id: 'g1',  semester: 'Fall 2026',   year: '2026–27', code: 'SE-301', course: 'Software Engineering',      instructor: 'Dr. Aris Thorne',     initials: 'AT', credits: 3, grade: null, marks: null, total: 100, color: 'grc-blue',    status: 'ongoing'   },
  { id: 'g2',  semester: 'Fall 2026',   year: '2026–27', code: 'SE-102', course: 'Data Structures & Algorithms', instructor: 'Prof. Elena Rostova', initials: 'ER', credits: 4, grade: null, marks: null, total: 100, color: 'grc-purple',  status: 'ongoing'   },
  { id: 'g3',  semester: 'Fall 2026',   year: '2026–27', code: 'DS-301', course: 'Machine Learning',           instructor: 'Dr. Marcus Vance',    initials: 'MV', credits: 3, grade: null, marks: null, total: 100, color: 'grc-emerald', status: 'ongoing'   },
  { id: 'g4',  semester: 'Fall 2026',   year: '2026–27', code: 'CS-301', course: 'Cyber Security Principles',  instructor: 'Prof. Sarah Jenkins', initials: 'SJ', credits: 3, grade: 'A',  marks: 91,  total: 100, color: 'grc-amber',   status: 'graded'    },
  { id: 'g5',  semester: 'Fall 2026',   year: '2026–27', code: 'DS-403', course: 'Business Analytics',         instructor: 'Prof. James Whitfield',initials: 'JW', credits: 2, grade: 'B+', marks: 87,  total: 100, color: 'grc-rose',    status: 'graded'    },
  // Spring 2026
  { id: 'g6',  semester: 'Spring 2026', year: '2025–26', code: 'SE-201', course: 'Object-Oriented Design',     instructor: 'Dr. Aris Thorne',     initials: 'AT', credits: 3, grade: 'A',  marks: 94,  total: 100, color: 'grc-blue',    status: 'graded'    },
  { id: 'g7',  semester: 'Spring 2026', year: '2025–26', code: 'SE-202', course: 'Software Testing & QA',      instructor: 'Prof. Elena Rostova', initials: 'ER', credits: 3, grade: 'A-', marks: 90,  total: 100, color: 'grc-purple',  status: 'graded'    },
  { id: 'g8',  semester: 'Spring 2026', year: '2025–26', code: 'DS-202', course: 'Exploratory Data Analysis',  instructor: 'Dr. Marcus Vance',    initials: 'MV', credits: 3, grade: 'A-', marks: 89,  total: 100, color: 'grc-emerald', status: 'graded'    },
  { id: 'g9',  semester: 'Spring 2026', year: '2025–26', code: 'CS-201', course: 'Computer Networking',        instructor: 'Prof. Sarah Jenkins', initials: 'SJ', credits: 3, grade: 'B+', marks: 85,  total: 100, color: 'grc-amber',   status: 'graded'    },
  { id: 'g10', semester: 'Spring 2026', year: '2025–26', code: 'SE-102', course: 'Discrete Mathematics',       instructor: 'Dr. Aris Thorne',     initials: 'AT', credits: 3, grade: 'B',  marks: 80,  total: 100, color: 'grc-rose',    status: 'graded'    },
  // Fall 2025
  { id: 'g11', semester: 'Fall 2025',   year: '2025–26', code: 'SE-101', course: 'Introduction to Programming',instructor: 'Prof. Elena Rostova', initials: 'ER', credits: 4, grade: 'A',  marks: 96,  total: 100, color: 'grc-blue',    status: 'graded'    },
  { id: 'g12', semester: 'Fall 2025',   year: '2025–26', code: 'DS-101', course: 'Fundamentals of Data Science',instructor: 'Dr. Marcus Vance',   initials: 'MV', credits: 3, grade: 'A-', marks: 91,  total: 100, color: 'grc-emerald', status: 'graded'    },
  { id: 'g13', semester: 'Fall 2025',   year: '2025–26', code: 'MA-101', course: 'Linear Algebra',             instructor: 'Prof. James Whitfield',initials: 'JW', credits: 3, grade: 'B+', marks: 84,  total: 100, color: 'grc-purple',  status: 'graded'    },
  { id: 'g14', semester: 'Fall 2025',   year: '2025–26', code: 'CS-101', course: 'Intro to Cybersecurity',     instructor: 'Prof. Sarah Jenkins', initials: 'SJ', credits: 3, grade: 'A',  marks: 93,  total: 100, color: 'grc-amber',   status: 'graded'    },
  // Spring 2025
  { id: 'g15', semester: 'Spring 2025', year: '2024–25', code: 'MA-001', course: 'Calculus I',                 instructor: 'Prof. James Whitfield',initials: 'JW', credits: 4, grade: 'B+', marks: 86,  total: 100, color: 'grc-rose',    status: 'graded'    },
  { id: 'g16', semester: 'Spring 2025', year: '2024–25', code: 'SE-001', course: 'Computer Science Basics',    instructor: 'Dr. Aris Thorne',     initials: 'AT', credits: 3, grade: 'A',  marks: 95,  total: 100, color: 'grc-blue',    status: 'graded'    },
  { id: 'g17', semester: 'Spring 2025', year: '2024–25', code: 'EN-001', course: 'Technical Communication',    instructor: 'Prof. Elena Rostova', initials: 'ER', credits: 2, grade: 'A-', marks: 88,  total: 100, color: 'grc-emerald', status: 'graded'    },
];

// Per-semester summary (for charts & semester cards)
export const SEMESTER_SUMMARIES = [
  { semester: 'Sem 1 · Sp 2025', short: 'Sp \'25', gpa: 3.62, credits: 9,  totalCredits: 9  },
  { semester: 'Sem 2 · Fa 2025', short: 'Fa \'25', gpa: 3.75, credits: 13, totalCredits: 22 },
  { semester: 'Sem 3 · Sp 2026', short: 'Sp \'26', gpa: 3.68, credits: 15, totalCredits: 37 },
  { semester: 'Sem 4 · Fa 2026', short: 'Fa \'26', gpa: null, credits: 15, totalCredits: null }, // in progress
];

export const STUDENT_SUMMARY = {
  cgpa: 3.70,
  currentGpa: 3.82,  // projected
  totalCredits: 37,
  requiredCredits: 120,
  classRank: 12,
  totalStudents: 280,
  standing: 'Dean\'s List',
  currentSemester: 'Fall 2026',
  program: 'B.S. Software Engineering',
};

// Grade distribution counts (for donut chart)
export const GRADE_DISTRIBUTION = [
  { grade: 'A / A+', count: 6, color: '#10b981' },
  { grade: 'A-',     count: 4, color: '#3b82f6' },
  { grade: 'B+',     count: 4, color: '#6366f1' },
  { grade: 'B',      count: 2, color: '#f59e0b' },
  { grade: 'B-',     count: 1, color: '#f97316' },
];

export const SEMESTER_OPTIONS  = ['All Semesters', 'Fall 2026', 'Spring 2026', 'Fall 2025', 'Spring 2025'];
export const YEAR_OPTIONS       = ['All Years', '2026–27', '2025–26', '2024–25'];
export const SORT_OPTIONS       = [
  { value: 'course-asc',   label: 'Course A → Z'        },
  { value: 'grade-desc',   label: 'Grade (High → Low)'  },
  { value: 'credits-desc', label: 'Credits (High → Low)'},
  { value: 'marks-desc',   label: 'Marks (High → Low)'  },
];
export const TABS = [
  { key: 'current',    label: 'Current Semester' },
  { key: 'previous',   label: 'Previous Semesters' },
  { key: 'transcript', label: 'Transcript' },
  { key: 'analytics',  label: 'Analytics' },
];
