import { useState } from 'react';

const programs = [
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
      { semester: 'Year 4 Capstone & Specialties', courses: ['SE-401: Distributed Systems & Microservices', 'SE-402: Software Engineering Capstone Project', 'SE-403: Mobile App Development', 'SE-404: Human-Computer Interaction'] }
    ]
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
      { semester: 'Year 4 Deep Learning & Ethics', courses: ['DS-401: Deep Learning & Neural Networks', 'DS-402: Data Science Capstone (Industry-backed)', 'DS-403: Business Intelligence & Decision Theory', 'DS-404: Ethics in Data Science & Privacy'] }
    ]
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
      { semester: 'Year 4 Forensics & Incident Response', courses: ['CS-401: Digital Forensics & Reverse Engineering', 'CS-402: Cyber Security Capstone Exercise', 'CS-403: Incident Response & Disaster Recovery', 'CS-404: Cloud & IoT Infrastructure Security'] }
    ]
  }
];

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedCurriculum, setExpandedCurriculum] = useState({});

  const toggleCurriculum = (id) => {
    setExpandedCurriculum((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredPrograms = activeFilter === 'all'
    ? programs
    : programs.filter((p) => p.category === activeFilter);

  return (
    <div className="courses-page animate__animated animate__fadeIn">
      {/* Hero Banner */}
      <section className="courses-hero p-4 p-md-5 mb-5 text-start position-relative overflow-hidden">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <span className="text-primary text-uppercase fw-bold small tracking-wider">Academic Programs</span>
            <h1 className="display-4 fw-extrabold text-dark mt-2 mb-3">Our Undergraduate Courses</h1>
            <p className="lead text-muted mb-0" style={{ lineHeight: '1.7', maxWidth: '640px' }}>
              Explore our core STEM pathways designed to launch successful careers in engineering, artificial intelligence, and network infrastructure safety. 
            </p>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0 text-lg-end">
            <div className="d-inline-flex flex-column gap-2 bg-white rounded-4 p-4 shadow-sm border text-center">
              <span className="h2 fw-extrabold text-primary mb-0">100%</span>
              <span className="text-muted small fw-medium">Project-Based Learning Curriculum</span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Filtering Controls */}
      <section className="mb-4">
        <div className="d-flex flex-wrap gap-2 justify-content-start align-items-center">
          <button
            className={`course-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Programs
          </button>
          <button
            className={`course-filter-btn ${activeFilter === 'software-engineering' ? 'active' : ''}`}
            onClick={() => setActiveFilter('software-engineering')}
          >
            Software Engineering
          </button>
          <button
            className={`course-filter-btn ${activeFilter === 'data-science' ? 'active' : ''}`}
            onClick={() => setActiveFilter('data-science')}
          >
            Data Science & AI
          </button>
          <button
            className={`course-filter-btn ${activeFilter === 'cyber-security' ? 'active' : ''}`}
            onClick={() => setActiveFilter('cyber-security')}
          >
            Cyber Security
          </button>
        </div>
      </section>

      {/* Program Cards Grid */}
      <section className="mb-5">
        <div className="row g-4">
          {filteredPrograms.map((program) => {
            const isExpanded = expandedCurriculum[program.id];
            return (
              <div key={program.id} className="col-12">
                <div className={`card bg-white course-card ${program.accentClass} shadow-sm border-0`}>
                  <div className="card-body p-4 p-md-5">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
                      <div className="d-flex align-items-center gap-3">
                        <div className="icon-badge bg-primary-subtle text-primary rounded-3 m-0 d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>
                          {program.icon}
                        </div>
                        <div>
                          <h2 className="h3 fw-bold mb-1 text-dark">{program.title}</h2>
                          <span className="text-muted small fw-semibold d-block">{program.degree}</span>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap gap-2">
                        <span className="course-stat-badge">
                          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {program.duration}
                        </span>
                        <span className="course-stat-badge">
                          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {program.credits}
                        </span>
                        <span className="course-stat-badge bg-success-subtle text-success">
                          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {program.rate}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted mb-4" style={{ lineHeight: '1.7', fontSize: '1.02rem', maxWidth: '880px' }}>
                      {program.description}
                    </p>

                    <div className="d-flex gap-3">
                      <button
                        className="btn btn-primary px-4 rounded-pill fw-semibold shadow-sm"
                        onClick={() => alert(`Registration details for B.S. in ${program.title} will be sent to your student dashboard.`)}
                      >
                        Enroll Now
                      </button>
                      <button
                        className={`btn ${isExpanded ? 'btn-secondary' : 'btn-outline-secondary'} px-4 rounded-pill fw-semibold d-inline-flex align-items-center gap-2`}
                        onClick={() => toggleCurriculum(program.id)}
                      >
                        {isExpanded ? 'Hide Curriculum' : 'Preview Curriculum'}
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          style={{
                            transform: isExpanded ? 'rotate(180deg)' : 'none',
                            transition: 'transform 0.2s ease',
                          }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    {/* Interactive Curriculum Expander */}
                    {isExpanded && (
                      <div className="course-modules-section mt-5 pt-4">
                        <h4 className="fw-bold mb-4 text-dark fs-5">Core Course Modules</h4>
                        <div className="row g-4">
                          {program.curriculum.map((sem, idx) => (
                            <div key={idx} className="col-lg-4">
                              <div className="bg-light p-3 rounded-4 h-100 border">
                                <span className="d-block fw-bold text-dark small mb-3 text-uppercase tracking-wider">
                                  {sem.semester}
                                </span>
                                <div className="d-flex flex-column gap-2">
                                  {sem.courses.map((course, cIdx) => (
                                    <div key={cIdx} className={`course-module-item ${program.moduleBorderClass}`}>
                                      {course}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Admissions Call to Action */}
      <section className="mb-2">
        <div className="card text-center p-5 course-cta-card shadow text-white">
          <div className="card-body position-relative z-1 py-4">
            <h2 className="display-6 fw-extrabold mb-3">Ready to Launch Your Career?</h2>
            <p className="text-white-50 mx-auto mb-4" style={{ maxWidth: '580px', lineHeight: '1.6' }}>
              Admissions are now open for the upcoming academic semester. Download the syllabus overview or reach out to our counselors to plan your program.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="/contact" className="btn btn-primary btn-lg px-4 rounded-pill fw-semibold shadow hover-card">
                Contact Counselor
              </a>
              <button
                className="btn btn-outline-light btn-lg px-4 rounded-pill fw-semibold"
                onClick={() => alert('Syllabus PDF bundle download started.')}
              >
                Download Syllabus (.PDF)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
