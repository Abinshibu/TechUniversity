export const programs = [
  {
    id: 'se',
    category: 'software-engineering',
    accentClass: 'course-card-accent-se',
    moduleBorderClass: 'course-module-item-se',
    title: 'Software Engineering',
    degree: 'Bachelor of Science (B.S.) in Software Engineering',
    duration: '4 Years',
    credits: '120 Credits',
    rate: '96% Employment Rate',
    description: 'Master the art of building scalable, reliable, and secure software systems. Our comprehensive curriculum blends core computer science principles with practical software architecture, cloud platforms, and modern agile practices.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    curriculum: [
      { semester: 'Year 1 & 2 Foundations', courses: ['SE-101: Introduction to Programming (Python & Java)', 'SE-102: Data Structures & Algorithms', 'SE-201: Object-Oriented Analysis & Design', 'SE-202: Discrete Mathematics for Engineers'] },
      { semester: 'Year 3 Systems & Scale', courses: ['SE-301: Web Applications & Cloud Architecture', 'SE-302: Database Management Systems (SQL & NoSQL)', 'SE-303: Software Testing & Quality Assurance', 'SE-304: DevOps & Continuous Integration'] },
      { semester: 'Year 4 Capstone & Specialties', courses: ['SE-401: Distributed Systems & Microservices', 'SE-402: Software Engineering Capstone Project', 'SE-403: Mobile App Development', 'SE-404: Human-Computer Interaction'] },
    ],
  },
  {
    id: 'ds',
    category: 'data-science',
    accentClass: 'course-card-accent-ds',
    moduleBorderClass: 'course-module-item-ds',
    title: 'Data Science & AI',
    degree: 'Bachelor of Science (B.S.) in Data Science & Artificial Intelligence',
    duration: '4 Years',
    credits: '120 Credits',
    rate: '98% Employment Rate',
    description: 'Unlock insights from massive data streams and engineer intelligent systems. Learn advanced statistical modeling, data visualization, predictive analytics, and deep learning architectures to solve complex, real-world problems.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2" />
      </svg>
    ),
    curriculum: [
      { semester: 'Year 1 & 2 Foundations', courses: ['DS-101: Fundamentals of Data Science', 'DS-102: Linear Algebra & Calculus for Data Science', 'DS-201: Probability & Mathematical Statistics', 'DS-202: Exploratory Data Analysis & Visualization'] },
      { semester: 'Year 3 Advanced ML & Systems', courses: ['DS-301: Machine Learning Algorithms & Applications', 'DS-302: Big Data Engineering & Warehousing', 'DS-303: Artificial Intelligence Principles', 'DS-304: Natural Language Processing (NLP)'] },
      { semester: 'Year 4 Deep Learning & Ethics', courses: ['DS-401: Deep Learning & Neural Networks', 'DS-402: Data Science Capstone (Industry-backed)', 'DS-403: Business Intelligence & Decision Theory', 'DS-404: Ethics in Data Science & Privacy'] },
    ],
  },
  {
    id: 'cs',
    category: 'cyber-security',
    accentClass: 'course-card-accent-cs',
    moduleBorderClass: 'course-module-item-cs',
    title: 'Cyber Security',
    degree: 'Bachelor of Science (B.S.) in Cyber Security & Network Defense',
    duration: '4 Years',
    credits: '124 Credits',
    rate: '99% Employment Rate',
    description: 'Defend systems, networks, and data against sophisticated cyber threats. Gain hands-on expertise in network auditing, cryptographical protocols, ethical hacking, digital forensics, and cloud infrastructure security.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    curriculum: [
      { semester: 'Year 1 & 2 Foundations', courses: ['CS-101: Introduction to Cybersecurity & Ethics', 'CS-102: Operating Systems & Shell Programming', 'CS-201: Computer Networking & Protocols', 'CS-202: Secure Coding Practices (C/C++)'] },
      { semester: 'Year 3 Defense & Analysis', courses: ['CS-301: Cryptography & Information Security', 'CS-302: Network Security & Firewall Systems', 'CS-303: Penetration Testing & Vulnerability Assessment', 'CS-304: Cyber Threat Intelligence'] },
      { semester: 'Year 4 Forensics & Incident Response', courses: ['CS-401: Digital Forensics & Reverse Engineering', 'CS-402: Cyber Security Capstone Exercise', 'CS-403: Incident Response & Disaster Recovery', 'CS-404: Cloud & IoT Infrastructure Security'] },
    ],
  },
];

export const enrollmentTerms = [
  'Fall 2025',
  'Spring 2026',
  'Fall 2026',
  'Spring 2027',
];
