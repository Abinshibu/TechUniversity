import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="row align-items-center mb-5 pb-4">
        <div className="col-lg-6 pe-lg-5 mb-4 mb-lg-0">
          <h1 className="display-4 fw-extrabold text-dark mb-3 lh-sm" style={{ letterSpacing: '-1.5px' }}>
            Shape Your Future at <span style={{ color: 'var(--brand-color)' }}>Tech University</span>
          </h1>
          <p className="lead text-muted mb-4 fs-5" style={{ lineHeight: '1.6' }}>
            Explore state-of-the-art programs, conduct world-changing research alongside expert faculty, and join a vibrant global community of tomorrow's leaders.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <Link to="/register" className="btn btn-primary btn-lg px-4 py-2">
              Apply Now
            </Link>
            <Link to="/courses" className="btn btn-outline-primary btn-lg px-4 py-2">
              Explore Courses
            </Link>
            <Link to="/contact" className="btn btn-link btn-lg link-dark px-3 py-2 text-decoration-none d-flex align-items-center">
              Visit Campus
              <svg className="ms-2" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="position-relative">
            <div className="position-absolute bg-light w-100 h-100 rounded-3 translate-middle-x start-50 top-0 d-none d-lg-block" style={{ transform: 'translateY(15px) scale(0.97)', zIndex: -1 }}></div>
            <img 
              src="/university_hero.png" 
              alt="Tech University Campus" 
              className="img-fluid rounded-3 shadow-sm border" 
              style={{ objectFit: 'cover', width: '100%', height: '400px' }}
            />
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="mb-5 py-4">
        <div className="bg-light rounded-4 p-4 p-md-5">
          <div className="row g-4 text-center">
            <div className="col-6 col-lg-3">
              <h3 className="display-5 fw-bold text-dark mb-1" style={{ color: 'var(--brand-color)' }}>150+</h3>
              <p className="text-muted text-uppercase small mb-0 fw-semibold">Academic Programs</p>
            </div>
            <div className="col-6 col-lg-3">
              <h3 className="display-5 fw-bold text-dark mb-1">12K+</h3>
              <p className="text-muted text-uppercase small mb-0 fw-semibold">Active Students</p>
            </div>
            <div className="col-6 col-lg-3">
              <h3 className="display-5 fw-bold text-dark mb-1">850+</h3>
              <p className="text-muted text-uppercase small mb-0 fw-semibold">Expert Faculty</p>
            </div>
            <div className="col-6 col-lg-3">
              <h3 className="display-5 fw-bold text-dark mb-1">98%</h3>
              <p className="text-muted text-uppercase small mb-0 fw-semibold">Employment Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Tech University */}
      <section className="mb-5 py-4">
        <div className="text-center mb-5">
          <span className="text-primary text-uppercase fw-bold small tracking-wider">Why Tech University</span>
          <h2 className="display-6 fw-bold mt-2 text-dark">Educating the Future Innovators</h2>
          <p className="text-muted max-w-2xl mx-auto" style={{ maxWidth: '600px' }}>
            We bridge academic theory with industry standards, nurturing a learning space where students design modern solutions to global problems.
          </p>
        </div>
        
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 p-4 shadow-sm bg-white hover-card">
              <div className="icon-badge">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h5 className="card-title fw-bold text-dark mb-3">Industry-Led Curriculum</h5>
              <p className="card-text text-muted small" style={{ lineHeight: '1.6' }}>
                Our courses are co-designed and vetted by leading tech corporations, ensuring you learn skills directly applicable in today's workforce.
              </p>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 border-0 p-4 shadow-sm bg-white hover-card">
              <div className="icon-badge">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h5 className="card-title fw-bold text-dark mb-3">World-Class Research Labs</h5>
              <p className="card-text text-muted small" style={{ lineHeight: '1.6' }}>
                Gain hands-on experience in specialized spaces featuring drone platforms, cleanrooms, supercomputing terminals, and robotics suites.
              </p>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 border-0 p-4 shadow-sm bg-white hover-card">
              <div className="icon-badge">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h5 className="card-title fw-bold text-dark mb-3">Global Career Networks</h5>
              <p className="card-text text-muted small" style={{ lineHeight: '1.6' }}>
                Through international exchange programs, internship pipelines, and partnerships, Tech University opens doors to careers globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Top Programs */}
      <section className="mb-5 py-4">
        <div className="d-flex flex-wrap justify-content-between align-items-end mb-4">
          <div>
            <span className="text-primary text-uppercase fw-bold small tracking-wider">Top Programs</span>
            <h2 className="display-6 fw-bold text-dark mt-2">Explore Popular Degrees</h2>
          </div>
          <Link to="/courses" className="btn btn-link link-primary fw-semibold text-decoration-none">
            View All Courses
            <svg className="ms-1" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
        </div>

        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 bg-white hover-card">
              <div className="card-body p-4">
                <span className="badge bg-light text-primary mb-3">School of Computing</span>
                <h5 className="card-title fw-bold text-dark mb-2">Computer Science & AI</h5>
                <p className="card-text text-muted small" style={{ lineHeight: '1.6' }}>
                  Master neural networks, big data architectures, operating systems, and intelligent agent designs.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 bg-white hover-card">
              <div className="card-body p-4">
                <span className="badge bg-light text-primary mb-3">School of Engineering</span>
                <h5 className="card-title fw-bold text-dark mb-2">Aerospace Engineering</h5>
                <p className="card-text text-muted small" style={{ lineHeight: '1.6' }}>
                  Explore computational aerodynamics, propulsion mechanics, materials science, and orbital logistics.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 bg-white hover-card">
              <div className="card-body p-4">
                <span className="badge bg-light text-primary mb-3">School of Business</span>
                <h5 className="card-title fw-bold text-dark mb-2">Business Analytics & MBA</h5>
                <p className="card-text text-muted small" style={{ lineHeight: '1.6' }}>
                  Use predictive intelligence, supply optimization models, and executive leadership pipelines.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 bg-white hover-card">
              <div className="card-body p-4">
                <span className="badge bg-light text-primary mb-3">School of Sciences</span>
                <h5 className="card-title fw-bold text-dark mb-2">Biotechnology</h5>
                <p className="card-text text-muted small" style={{ lineHeight: '1.6' }}>
                  Engage in genomics mapping, gene editing technology, and computational bioinformatics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Admissions Steps */}
      <section className="mb-5 py-4">
        <div className="text-center mb-5">
          <span className="text-primary text-uppercase fw-bold small tracking-wider">How to Join</span>
          <h2 className="display-6 fw-bold mt-2 text-dark">Admissions Process</h2>
          <p className="text-muted max-w-2xl mx-auto" style={{ maxWidth: '600px' }}>
            Follow these four straightforward steps to start your academic and professional journey at Tech University.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 bg-light p-4 h-100 text-center">
              <div className="mb-3">
                <span className="step-number">1</span>
              </div>
              <h6 className="fw-bold text-dark mb-2">Submit Application</h6>
              <p className="text-muted small mb-0" style={{ lineHeight: '1.5' }}>
                Complete the online application form and pay the portal processing fee.
              </p>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 bg-light p-4 h-100 text-center">
              <div className="mb-3">
                <span className="step-number">2</span>
              </div>
              <h6 className="fw-bold text-dark mb-2">Upload Documents</h6>
              <p className="text-muted small mb-0" style={{ lineHeight: '1.5' }}>
                Provide official high school transcripts, language tests, and recommendations.
              </p>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 bg-light p-4 h-100 text-center">
              <div className="mb-3">
                <span className="step-number">3</span>
              </div>
              <h6 className="fw-bold text-dark mb-2">Interview & Assessment</h6>
              <p className="text-muted small mb-0" style={{ lineHeight: '1.5' }}>
                Attend an online portfolio interview or write the entrance assessment.
              </p>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 bg-light p-4 h-100 text-center">
              <div className="mb-3">
                <span className="step-number">4</span>
              </div>
              <h6 className="fw-bold text-dark mb-2">Secure Enrollment</h6>
              <p className="text-muted small mb-0" style={{ lineHeight: '1.5' }}>
                Receive your official offer letter and secure your seat with the tuition deposit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="mb-5 py-4">
        <div className="text-center mb-5">
          <span className="text-primary text-uppercase fw-bold small tracking-wider">Testimonials</span>
          <h2 className="display-6 fw-bold mt-2 text-dark">Hear From Our Students</h2>
        </div>

        <div className="row g-4">
          {/* Testimonial 1 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 p-4 shadow-sm bg-white hover-card">
              <div className="d-flex align-items-center mb-3">
                <div className="avatar-placeholder rounded-circle bg-light text-primary d-flex align-items-center justify-content-center fw-bold" style={{ width: '45px', height: '45px' }}>
                  SJ
                </div>
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold text-dark">Sarah Jenkins</h6>
                  <small className="text-muted">CS Graduate '24</small>
                </div>
              </div>
              <p className="card-text text-muted font-italic small mb-0" style={{ lineHeight: '1.6', fontStyle: 'italic' }}>
                "Tech University provided the perfect blend of theory and practice. The AI lab and mentorship helped me secure a software engineering role before graduation."
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 p-4 shadow-sm bg-white hover-card">
              <div className="d-flex align-items-center mb-3">
                <div className="avatar-placeholder rounded-circle bg-light text-primary d-flex align-items-center justify-content-center fw-bold" style={{ width: '45px', height: '45px' }}>
                  MC
                </div>
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold text-dark">Michael Chen</h6>
                  <small className="text-muted">Aerospace Senior</small>
                </div>
              </div>
              <p className="card-text text-muted font-italic small mb-0" style={{ lineHeight: '1.6', fontStyle: 'italic' }}>
                "The aerospace program is incredibly hands-on. Working on drone aerodynamics with top researchers was a highlight of my academic journey."
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 p-4 shadow-sm bg-white hover-card">
              <div className="d-flex align-items-center mb-3">
                <div className="avatar-placeholder rounded-circle bg-light text-primary d-flex align-items-center justify-content-center fw-bold" style={{ width: '45px', height: '45px' }}>
                  ER
                </div>
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold text-dark">Emily Rodriguez</h6>
                  <small className="text-muted">Analytics Alumna</small>
                </div>
              </div>
              <p className="card-text text-muted font-italic small mb-0" style={{ lineHeight: '1.6', fontStyle: 'italic' }}>
                "The business analytics curriculum is highly relevant. I learned skills that I apply every day in my current analytics role."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
