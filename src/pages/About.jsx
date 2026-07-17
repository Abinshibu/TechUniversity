export default function About() {
  return (
    <div className="about-page">
      {/* 1. Hero Section */}
      <section className="mb-5 py-4 text-center text-md-start">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <span className="text-primary text-uppercase fw-bold small tracking-wider">About Our Institution</span>
            <h1 className="display-4 fw-extrabold text-dark mt-2 mb-3">
              Fostering Excellence, Driving Innovation
            </h1>
            <p className="lead text-muted fs-5 mb-4" style={{ lineHeight: '1.7' }}>
              Founded at the intersection of technology and humanity, Tech University is a leading global institution committed to providing cutting-edge education, fostering world-changing research, and cultivating an inclusive environment where the leaders of tomorrow are empowered to innovate and excel. We believe in bridging the gap between theoretical knowledge and industry standards, equipping our students with the skills, drive, and vision required to tackle global challenges.
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <div className="p-4 bg-light rounded-4 border shadow-sm">
              <h5 className="fw-bold mb-3">Quick Facts</h5>
              <div className="d-flex justify-content-around text-center">
                <div>
                  <h3 className="fw-bold text-primary mb-0">1998</h3>
                  <small className="text-muted">Founded</small>
                </div>
                <div className="vr mx-2"></div>
                <div>
                  <h3 className="fw-bold text-primary mb-0">12k+</h3>
                  <small className="text-muted">Students</small>
                </div>
                <div className="vr mx-2"></div>
                <div>
                  <h3 className="fw-bold text-primary mb-0">850+</h3>
                  <small className="text-muted">Faculty</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Accreditation & Rankings Section */}
      <section className="mb-5 py-4">
        <h2 className="fw-bold text-dark mb-4 text-center">Rankings & Accreditation</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="rank-card p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">🏆</span>
                <h5 className="fw-bold mb-0">#1 in Innovation</h5>
              </div>
              <p className="text-muted small mb-0">
                Recognized nationally for pioneering educational models and fostering start-up incubators.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="rank-card p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">🏅</span>
                <h5 className="fw-bold mb-0">Top 50 Global Tech</h5>
              </div>
              <p className="text-muted small mb-0">
                Consistently ranked among the top 50 institutions worldwide for computer science and engineering disciplines.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="rank-card p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <span className="fs-3 me-3">🛡️</span>
                <h5 className="fw-bold mb-0">ABET Accredited</h5>
              </div>
              <p className="text-muted small mb-0">
                All engineering and computing programs are fully accredited by leading global accreditation boards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Values Section */}
      <section className="mb-5 py-4">
        <div className="text-center mb-5">
          <span className="text-primary text-uppercase fw-bold small tracking-wider">Our Core Purpose</span>
          <h2 className="fw-bold mt-2 text-dark">Mission & Values</h2>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 p-4 shadow-sm bg-white hover-card">
              <div className="icon-badge">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h5 className="fw-bold text-dark mb-3">Academic Excellence</h5>
              <p className="text-muted small" style={{ lineHeight: '1.6' }}>
                We deliver a rigorous curriculum co-designed with industry experts, prioritizing critical thinking, technical proficiency, and high-impact scholarship.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 p-4 shadow-sm bg-white hover-card">
              <div className="icon-badge">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h5 className="fw-bold text-dark mb-3">Innovative Research</h5>
              <p className="text-muted small" style={{ lineHeight: '1.6' }}>
                Our researchers tackle complex global challenges in aerospace, artificial intelligence, and biotechnology, bridging pure theory and modern applications.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 p-4 shadow-sm bg-white hover-card">
              <div className="icon-badge">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h5 className="fw-bold text-dark mb-3">Inclusivity & Community</h5>
              <p className="text-muted small" style={{ lineHeight: '1.6' }}>
                We nurture an open community that respects diverse perspectives, ensuring equitable access to opportunities and fostering a strong sense of belonging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership Section */}
      <section className="mb-5 py-4">
        <div className="text-center mb-5">
          <span className="text-primary text-uppercase fw-bold small tracking-wider">Meet Our Advisors</span>
          <h2 className="fw-bold mt-2 text-dark">University Leadership</h2>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-md-6 col-lg-3 text-center">
            <div className="card h-100 p-4 shadow-sm leader-card bg-white">
              <div className="leader-avatar">AT</div>
              <h6 className="fw-bold mb-1">Dr. Aris Thorne</h6>
              <small className="text-primary fw-semibold d-block mb-3">President & Vice Chancellor</small>
              <p className="text-muted small mb-0">
                Pioneering educationist with 25+ years leading high-tech academic programs globally.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 text-center">
            <div className="card h-100 p-4 shadow-sm leader-card bg-white">
              <div className="leader-avatar">ER</div>
              <h6 className="fw-bold mb-1">Prof. Elena Rostova</h6>
              <small className="text-primary fw-semibold d-block mb-3">Provost & VP of Academics</small>
              <p className="text-muted small mb-0">
                Renowned computer scientist focusing on modern industry-aligned curriculum frameworks.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 text-center">
            <div className="card h-100 p-4 shadow-sm leader-card bg-white">
              <div className="leader-avatar">MV</div>
              <h6 className="fw-bold mb-1">Dr. Marcus Vance</h6>
              <small className="text-primary fw-semibold d-block mb-3">Dean of Research</small>
              <p className="text-muted small mb-0">
                Leading aerospace researcher working closely with tech labs and global grant foundations.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 text-center">
            <div className="card h-100 p-4 shadow-sm leader-card bg-white">
              <div className="leader-avatar">SJ</div>
              <h6 className="fw-bold mb-1">Sarah Jenkins</h6>
              <small className="text-primary fw-semibold d-block mb-3">Director of Student Affairs</small>
              <p className="text-muted small mb-0">
                Committed counselor advocating for robust student support systems and campus inclusivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Campus Life Section */}
      <section className="mb-5 py-4">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <span className="text-primary text-uppercase fw-bold small tracking-wider">Beyond the Classroom</span>
            <h2 className="fw-bold mt-2 text-dark mb-3">Vibrant Campus Life</h2>
            <p className="text-muted small mb-3" style={{ lineHeight: '1.6' }}>
              At Tech University, development happens both inside and outside our state-of-the-art classrooms. Our student body runs over 60 active student clubs and societies ranging from competitive coding groups and aerospace design leagues to music ensembles, sports teams, and community volunteering services.
            </p>
            <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>
              Our modern campus features modern sports complex facilities, innovative student hubs, and highly collaborative group work spaces designed to inspire discussion, creation, and lifelong friendships.
            </p>
          </div>
          <div className="col-md-6">
            <div className="position-relative">
              <img
                src="/campus_life.png"
                alt="Tech University Campus Life"
                className="img-fluid rounded-4 shadow border"
                style={{ objectFit: 'cover', width: '100%', height: '350px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Timeline / History Section */}
      <section className="mb-5 py-4">
        <div className="text-center mb-5">
          <span className="text-primary text-uppercase fw-bold small tracking-wider">Our Journey</span>
          <h2 className="fw-bold mt-2 text-dark">History & Timeline</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <ul className="list-unstyled timeline">
              <li className="timeline-item">
                <div className="timeline-year">1998</div>
                <h6 className="fw-bold text-dark">The Foundation</h6>
                <p className="text-muted small mb-0">
                  Tech University was founded with a singular vision to integrate computing disciplines directly with industrial business models, welcoming an inaugural class of 200 students.
                </p>
              </li>
              <li className="timeline-item">
                <div className="timeline-year">2006</div>
                <h6 className="fw-bold text-dark">Research Hub Initiative</h6>
                <p className="text-muted small mb-0">
                  Established our first dedicated research facility, the Aerospace & Robotics Innovation Lab, securing major government grants and forging international corporate sponsorships.
                </p>
              </li>
              <li className="timeline-item">
                <div className="timeline-year">2015</div>
                <h6 className="fw-bold text-dark">Campus Expansion</h6>
                <p className="text-muted small mb-0">
                  Inaugurated our 100-acre modern smart campus, integrating green buildings, specialized AI labs, and high-performance cleanrooms.
                </p>
              </li>
              <li className="timeline-item">
                <div className="timeline-year">Today</div>
                <h6 className="fw-bold text-dark">Global Innovation Leader</h6>
                <p className="text-muted small mb-0">
                  Hosting over 12,000 students from 80+ countries and ranked as one of the top institutions for student employment and industrial career transitions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
