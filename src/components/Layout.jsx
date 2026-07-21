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

      {/* ── Premium Footer ── */}
      <footer className="site-footer">
        {/* Top gradient separator */}
        <div className="site-footer__separator" aria-hidden="true" />

        <div className="container site-footer__inner">
          {/* Row 1: brand + columns */}
          <div className="site-footer__grid">

            {/* Brand column */}
            <div className="site-footer__brand">
              <Link className="site-footer__logo" to="/">
                <span className="site-footer__logo-accent">Tech</span>University
              </Link>
              <p className="site-footer__tagline">
                Empowering ambitious minds through world-class education, research, and industry-ready studios.
              </p>
              {/* Social icons */}
              <div className="site-footer__socials">
                {/* X / Twitter */}
                <a href="#" className="site-footer__social-btn" aria-label="Follow us on X">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="site-footer__social-btn" aria-label="Connect on LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* GitHub */}
                <a href="#" className="site-footer__social-btn" aria-label="View on GitHub">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" className="site-footer__social-btn" aria-label="Watch on YouTube">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Academic column */}
            <div className="site-footer__col">
              <h6 className="site-footer__col-heading">Academic</h6>
              <ul className="site-footer__links">
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/blog">Blog &amp; News</Link></li>
                <li><a href="#">Admissions</a></li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Library</a></li>
              </ul>
            </div>

            {/* University column */}
            <div className="site-footer__col">
              <h6 className="site-footer__col-heading">University</h6>
              <ul className="site-footer__links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact column */}
            <div className="site-footer__col site-footer__col--contact">
              <h6 className="site-footer__col-heading">Get in touch</h6>
              <ul className="site-footer__contact-list">
                <li>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <a href="mailto:info@techuniversity.edu">info@techuniversity.edu</a>
                </li>
                <li>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <span>+1 (555) 019-2834</span>
                </li>
                <li>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <span>100 Innovation Way, Tech City</span>
                </li>
              </ul>
              {/* Newsletter CTA pill */}
              <div className="site-footer__newsletter">
                <span>Stay in the loop</span>
                <Link to="/contact" className="site-footer__newsletter-btn">
                  Subscribe
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="site-footer__divider" />

          {/* Bottom bar */}
          <div className="site-footer__bottom">
            <span>&copy; {new Date().getFullYear()} Tech University. All rights reserved.</span>
            <div className="site-footer__bottom-links">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
