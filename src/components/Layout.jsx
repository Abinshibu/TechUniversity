import { useState, useEffect } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeNavbar();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const navLinks = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/courses', label: 'Courses' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header / Navbar */}
      <header className="nv-header-wrapper">
        <div className="nv-container">
          {/* Logo */}
          <Link className="nv-logo" to="/" onClick={closeNavbar}>
            <span className="nv-logo-accent">Tech</span>University
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="nv-nav" aria-label="Main Navigation">
            <ul className="nv-menu">
              {navLinks.map((link) => (
                <li className="nv-item" key={link.to}>
                  <NavLink
                    className={({ isActive }) => `nv-link ${isActive ? 'nv-link--active' : ''}`}
                    to={link.to}
                    end={link.end}
                  >
                    {link.label}
                    <span className="nv-link-indicator" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="nv-actions">
            <NavLink className="nv-btn nv-btn-login" to="/login">
              Login
            </NavLink>
            <NavLink className="nv-btn nv-btn-register" to="/register">
              Register
            </NavLink>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            className={`nv-mobile-toggle ${isOpen ? 'nv-mobile-toggle--open' : ''}`}
            type="button"
            onClick={toggleNavbar}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="nv-toggle-bar nv-toggle-bar-1"></span>
            <span className="nv-toggle-bar nv-toggle-bar-2"></span>
            <span className="nv-toggle-bar nv-toggle-bar-3"></span>
          </button>
        </div>
      </header>

      {/* Mobile slide-in navigation drawer overlay */}
      <div
        className={`nv-drawer-overlay ${isOpen ? 'nv-drawer-overlay--open' : ''}`}
        onClick={closeNavbar}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        className={`nv-drawer ${isOpen ? 'nv-drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="nv-drawer-header">
          <Link className="nv-logo" to="/" onClick={closeNavbar}>
            <span className="nv-logo-accent">Tech</span>University
          </Link>
          <button
            className="nv-drawer-close"
            type="button"
            onClick={closeNavbar}
            aria-label="Close menu"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="nv-drawer-nav" aria-label="Mobile Menu Links">
          <ul className="nv-drawer-menu">
            {navLinks.map((link) => (
              <li className="nv-drawer-item" key={link.to}>
                <NavLink
                  className={({ isActive }) => `nv-drawer-link ${isActive ? 'nv-drawer-link--active' : ''}`}
                  to={link.to}
                  onClick={closeNavbar}
                  end={link.end}
                >
                  {link.label}
                  <svg className="nv-drawer-link-arrow" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nv-drawer-actions">
          <NavLink className="nv-drawer-btn nv-drawer-btn-login" to="/login" onClick={closeNavbar}>
            Login
          </NavLink>
          <NavLink className="nv-drawer-btn nv-drawer-btn-register" to="/register" onClick={closeNavbar}>
            Register
          </NavLink>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow-1 flex-shrink-0">
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
