// dashboardData.js
// All mock data for the Dashboard Overview.
// Swap these out for real API responses when backend is ready.

// ── Stat Cards ────────────────────────────────────────────────────────────
export const STAT_CARDS = [
  {
    id: 'courses',
    label: 'Enrolled Courses',
    value: '6',
    delta: +2,
    deltaLabel: 'this semester',
    accent: 'stat-blue',
    // 7-point sparkline (relative heights 0-100)
    spark: [40, 55, 45, 70, 60, 80, 75],
  },
  {
    id: 'assignments',
    label: 'Assignments Due',
    value: '3',
    delta: -1,
    deltaLabel: 'from last week',
    accent: 'stat-amber',
    spark: [80, 60, 75, 50, 65, 40, 55],
  },
  {
    id: 'gpa',
    label: 'Current GPA',
    value: '3.82',
    delta: +0.14,
    deltaLabel: 'vs last semester',
    accent: 'stat-emerald',
    spark: [60, 65, 62, 70, 68, 75, 78],
  },
  {
    id: 'attendance',
    label: 'Attendance Rate',
    value: '94%',
    delta: +3,
    deltaLabel: 'this month',
    accent: 'stat-purple',
    spark: [70, 75, 72, 80, 78, 85, 90],
  },
];

// ── Upcoming Schedule ─────────────────────────────────────────────────────
export const SCHEDULE = [
  {
    id: 1,
    course: 'Software Engineering',
    code: 'SE-301',
    instructor: 'Dr. Aris Thorne',
    instructorInitials: 'AT',
    room: 'Hall B · Room 204',
    time: '09:00 AM',
    duration: '90 min',
    color: 'sched-blue',
    type: 'Lecture',
  },
  {
    id: 2,
    course: 'Data Structures & Algorithms',
    code: 'SE-102',
    instructor: 'Prof. Elena Rostova',
    instructorInitials: 'ER',
    room: 'Lab C · Room 112',
    time: '11:30 AM',
    duration: '120 min',
    color: 'sched-purple',
    type: 'Lab',
  },
  {
    id: 3,
    course: 'Machine Learning',
    code: 'DS-301',
    instructor: 'Dr. Marcus Vance',
    instructorInitials: 'MV',
    room: 'Online · Zoom',
    time: '02:00 PM',
    duration: '60 min',
    color: 'sched-emerald',
    type: 'Seminar',
  },
  {
    id: 4,
    course: 'Cyber Security Principles',
    code: 'CS-301',
    instructor: 'Prof. Sarah Jenkins',
    instructorInitials: 'SJ',
    room: 'Hall A · Room 108',
    time: '04:30 PM',
    duration: '90 min',
    color: 'sched-amber',
    type: 'Lecture',
  },
];

// ── Academic Progress ─────────────────────────────────────────────────────
export const PROGRESS = {
  semesterCompletion: 62,       // %
  creditsCompleted: 74,
  creditsTotal: 120,
  courses: [
    { name: 'Software Engineering',       code: 'SE-301', pct: 78, color: 'prog-blue'    },
    { name: 'Data Structures',            code: 'SE-102', pct: 65, color: 'prog-purple'  },
    { name: 'Machine Learning',           code: 'DS-301', pct: 55, color: 'prog-emerald' },
    { name: 'Cyber Security',             code: 'CS-301', pct: 80, color: 'prog-amber'   },
    { name: 'Business Analytics',         code: 'DS-403', pct: 40, color: 'prog-rose'    },
  ],
};

// ── Recent Activity ───────────────────────────────────────────────────────
export const ACTIVITY = [
  {
    id: 1,
    type: 'submitted',
    title: 'Assignment submitted',
    detail: 'SE-301 · Lab Report #4',
    time: '2 hours ago',
    color: 'act-blue',
  },
  {
    id: 2,
    type: 'grade',
    title: 'Grade published',
    detail: 'DS-301 Quiz 3 · 91/100',
    time: '5 hours ago',
    color: 'act-emerald',
  },
  {
    id: 3,
    type: 'enrolled',
    title: 'Course enrolled',
    detail: 'CS-303 · Penetration Testing',
    time: 'Yesterday',
    color: 'act-purple',
  },
  {
    id: 4,
    type: 'attendance',
    title: 'Attendance marked',
    detail: 'SE-102 · Present',
    time: 'Yesterday',
    color: 'act-amber',
  },
  {
    id: 5,
    type: 'deadline',
    title: 'Deadline reminder',
    detail: 'SE-301 Capstone due in 3 days',
    time: '2 days ago',
    color: 'act-rose',
  },
];

// ── Announcements ─────────────────────────────────────────────────────────
export const ANNOUNCEMENTS = [
  {
    id: 1,
    title: 'Fall 2026 Final Exam Schedule Released',
    excerpt: 'The official examination timetable for all courses is now available. Please check the academic calendar for your specific slots.',
    author: 'Academic Office',
    authorInitials: 'AO',
    date: 'Jul 16, 2026',
    priority: 'high',
    category: 'Exams',
    authorColor: 'ann-red',
  },
  {
    id: 2,
    title: 'New AI Research Lab Now Open to Undergrads',
    excerpt: 'Students enrolled in DS or CS tracks can now book access to the AI Innovation Lab. Limited slots available per week.',
    author: 'Dr. Marcus Vance',
    authorInitials: 'MV',
    date: 'Jul 14, 2026',
    priority: 'medium',
    category: 'Research',
    authorColor: 'ann-blue',
  },
  {
    id: 3,
    title: 'Scholarship Applications Close July 30',
    excerpt: 'Merit-based and need-based scholarship applications must be submitted through the student portal before July 30.',
    author: 'Financial Aid',
    authorInitials: 'FA',
    date: 'Jul 12, 2026',
    priority: 'low',
    category: 'Finance',
    authorColor: 'ann-emerald',
  },
];

// ── GPA Trend (per semester) ──────────────────────────────────────────────
export const GPA_TREND = [
  { semester: 'Sem 1', gpa: 3.40 },
  { semester: 'Sem 2', gpa: 3.55 },
  { semester: 'Sem 3', gpa: 3.48 },
  { semester: 'Sem 4', gpa: 3.62 },
  { semester: 'Sem 5', gpa: 3.68 },
  { semester: 'Sem 6', gpa: 3.82 },
];

// ── Quick Actions ─────────────────────────────────────────────────────────
export const QUICK_ACTIONS = [
  {
    id: 'enroll',
    label: 'Enrol in Course',
    color: 'qa-blue',
    icon: 'book-plus',
  },
  {
    id: 'assignment',
    label: 'Submit Assignment',
    color: 'qa-amber',
    icon: 'upload',
  },
  {
    id: 'grades',
    label: 'View Grades',
    color: 'qa-emerald',
    icon: 'chart',
  },
  {
    id: 'schedule',
    label: 'Full Schedule',
    color: 'qa-purple',
    icon: 'calendar',
  },
  {
    id: 'library',
    label: 'Library Access',
    color: 'qa-slate',
    icon: 'library',
  },
  {
    id: 'report',
    label: 'Download Transcript',
    color: 'qa-rose',
    icon: 'download',
  },
];
