// profileData.js — all mock data for the Student Profile page.
// Replace with real API calls when backend is ready.

export const STUDENT = {
  // Identity
  name:           'Alex Johnson',
  preferredName:  'Alex',
  id:             'TU-2024-0042',
  initials:       'AJ',
  avatar:         null,               // null = show initials avatar

  // Academic
  program:        'B.S. Software Engineering',
  department:     'School of Computing',
  semester:       'Semester 4',
  year:           '2nd Year',
  enrollmentDate: 'September 2024',
  expectedGrad:   'May 2028',
  status:         'Active',           // Active | On Leave | Graduated | Suspended
  standing:       "Dean's List",
  advisor:        'Dr. Aris Thorne',
  advisorEmail:   'a.thorne@techuniversity.edu',

  // Stats
  cgpa:           3.70,
  credits:        37,
  totalCredits:   120,
  attendance:     94,
  courses:        6,

  // Personal
  dob:            'March 15, 2005',
  gender:         'Male',
  nationality:    'United States',
  religion:       'Not specified',
  bloodGroup:     'O+',
  languages:      ['English', 'Spanish'],

  // Contact
  email:          'alex.johnson@student.techuniversity.edu',
  personalEmail:  'alex.j2005@gmail.com',
  phone:          '+1 (555) 234-7890',
  address:        '12 Maple Street, Austin, TX 78701',
  city:           'Austin',
  state:          'Texas',
  country:        'United States',
  zip:            '78701',

  // Social
  linkedin:       'linkedin.com/in/alexjohnson',
  github:         'github.com/alexj',

  // Profile completion (0–100)
  completionPct:  78,
  completionItems: [
    { label: 'Profile photo',      done: false },
    { label: 'Personal details',   done: true  },
    { label: 'Contact information',done: true  },
    { label: 'Emergency contact',  done: true  },
    { label: 'LinkedIn profile',   done: true  },
    { label: 'GitHub profile',     done: true  },
    { label: 'Upload documents',   done: false },
    { label: 'Academic interests', done: false },
  ],
};

export const EMERGENCY_CONTACTS = [
  {
    id:           'ec1',
    name:         'Robert Johnson',
    relation:     'Father',
    phone:        '+1 (555) 876-5432',
    email:        'r.johnson@email.com',
    address:      '12 Maple Street, Austin, TX 78701',
    initials:     'RJ',
    color:        'pf-ec-blue',
  },
  {
    id:           'ec2',
    name:         'Linda Johnson',
    relation:     'Mother',
    phone:        '+1 (555) 765-4321',
    email:        'l.johnson@email.com',
    address:      '12 Maple Street, Austin, TX 78701',
    initials:     'LJ',
    color:        'pf-ec-purple',
  },
];

export const DOCUMENTS = [
  { id: 'd1', name: 'Student ID Card',          type: 'ID',         date: 'Sep 2024', status: 'verified',   icon: 'id'        },
  { id: 'd2', name: 'Enrollment Certificate',   type: 'Certificate',date: 'Sep 2024', status: 'verified',   icon: 'cert'      },
  { id: 'd3', name: 'High School Transcript',   type: 'Transcript', date: 'Aug 2024', status: 'verified',   icon: 'transcript'},
  { id: 'd4', name: 'Medical Certificate',      type: 'Medical',    date: 'Sep 2024', status: 'pending',    icon: 'medical'   },
  { id: 'd5', name: 'Scholarship Letter',       type: 'Finance',    date: 'Oct 2024', status: 'verified',   icon: 'award'     },
];

export const ACTIVITY = [
  { id: 'ac1', type: 'grade',    title: 'Grade Published',        detail: 'DS-301 Quiz 3 · 91/100',       time: '2h ago',   color: 'pf-act-emerald' },
  { id: 'ac2', type: 'submit',   title: 'Assignment Submitted',   detail: 'SE-301 · Lab Report #4',       time: '5h ago',   color: 'pf-act-blue'    },
  { id: 'ac3', type: 'enroll',   title: 'Course Enrolled',        detail: 'CS-303 · Penetration Testing', time: 'Yesterday',color: 'pf-act-purple'  },
  { id: 'ac4', type: 'attend',   title: 'Attendance Marked',      detail: 'SE-102 · Present',             time: 'Yesterday',color: 'pf-act-amber'   },
  { id: 'ac5', type: 'announce', title: 'Announcement Read',      detail: 'Final exam schedule released', time: '2d ago',   color: 'pf-act-slate'   },
];
