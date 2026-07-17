import { useState } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header / Navbar */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
          <div className="container">
            {/* Logo */}
            <Link className="navbar-brand fw-bold fs-4" to="/" onClick={closeNavbar}>
              <span style={{ color: 'var(--brand-color)' }}>Tech</span>University
            </Link>

            {/* Hamburger button */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar}
              aria-controls="navbarNav"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                    to="/"
                    onClick={closeNavbar}
                    end
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                    to="/about"
                    onClick={closeNavbar}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                    to="/courses"
                    onClick={closeNavbar}
                  >
                    Courses
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                    to="/blog"
                    onClick={closeNavbar}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                    to="/contact"
                    onClick={closeNavbar}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>

              {/* Login and Register Buttons */}
              <div className="d-flex align-items-center gap-2">
                <NavLink
                  className="btn btn-login"
                  to="/login"
                  onClick={closeNavbar}
                >
                  Login
                </NavLink>
                <NavLink
                  className="btn btn-register text-white"
                  to="/register"
                  onClick={closeNavbar}
                >
                  Register
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow-1 flex-shrink-0 container my-5">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark text-light py-5 mt-auto border-top border-secondary">
        <div className="container">
          <div className="row py-4">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <Link className="navbar-brand text-white fw-bold fs-4 mb-3 d-inline-block" to="/">
                <span style={{ color: 'var(--brand-color)' }}>Tech</span>University
              </Link>
              <p className="text-muted small">
                Empowering minds, shaping futures, and driving innovation for a better tomorrow. Join our community of learners today.
              </p>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-white text-uppercase font-weight-bold mb-3">Academic</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><Link to="/courses">Courses</Link></li>
                <li className="mb-2"><Link to="/blog">Blog News</Link></li>
                <li className="mb-2"><a href="#">Admissions</a></li>
                <li className="mb-2"><a href="#">Research</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-white text-uppercase font-weight-bold mb-3">University</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><Link to="/about">About Us</Link></li>
                <li className="mb-2"><Link to="/contact">Contact</Link></li>
                <li className="mb-2"><a href="#">Careers</a></li>
                <li className="mb-2"><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <h6 className="text-white text-uppercase font-weight-bold mb-3">Contact Us</h6>
              <p className="text-muted small mb-2">Email: info@techuniversity.edu</p>
              <p className="text-muted small mb-2">Phone: +1 (555) 019-2834</p>
              <p className="text-muted small">Address: 100 Innovation Way, Tech City</p>
            </div>
          </div>

          <hr className="my-4" />

          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start small text-muted">
              &copy; {new Date().getFullYear()} Tech University. All rights reserved.
            </div>
            <div className="col-md-6 text-center text-md-end small text-muted mt-2 mt-md-0">
              Designed with Bootstrap and React
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
