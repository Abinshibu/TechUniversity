// DashboardLayout.jsx
// Standalone full-page shell: sidebar + topbar + <Outlet />.
// Completely separate from the public Layout (no navbar / footer).

import { useState, useRef, useEffect } from 'react';
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
  {
    group: 'Main',
    links: [
      {
        to: '/dashboard',
        label: 'Overview',
        end: true,
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        ),
      },
      {
        to: '/dashboard/courses',
        label: 'My Courses',
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        ),
      },
      {
        to: '/dashboard/assignments',
        label: 'Assignments',
        badge: '3',
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        ),
      },
      {
        to: '/dashboard/grades',
        label: 'Grades',
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
      },
      {
        to: '/dashboard/schedule',
        label: 'Schedule',
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
      },
    ],
  },
  {
    group: 'Resources',
    links: [
      {
        to: '/dashboard/library',
        label: 'Library',
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
          </svg>
        ),
      },
      {
        to: '/dashboard/messages',
        label: 'Messages',
        badge: '2',
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        ),
      },
    ],
  },
  {
    group: 'Account',
    links: [
      {
        to: '/dashboard/profile',
        label: 'Profile',
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
      },
      {
        to: '/dashboard/settings',
        label: 'Settings',
        icon: (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
      },
    ],
  },
];

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen]     = useState(false);
  const [profileOpen, setProfileOpen]     = useState(false);
  const [searchOpen,  setSearchOpen]      = useState(false);
  const [searchQuery, setSearchQuery]     = useState('');
  const profileRef = useRef(null);
  const searchRef  = useRef(null);
  const navigate   = useNavigate();

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
      if (searchRef.current  && !searchRef.current.contains(e.target))  setSearchOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleLogout = () => {
    setProfileOpen(false);
    // TODO: clear auth token / session when backend is wired
    navigate('/login');
  };

  return (
    <div className="dash-shell">

      {/* ── SIDEBAR ─────────────────────────────────────────────────────── */}
      <aside className={`dash-sidebar ${sidebarOpen ? 'dash-sidebar--open' : ''}`}>

        {/* Logo */}
        <div className="dash-sidebar-logo">
          <Link to="/" className="dash-logo-link">
            <span className="dash-logo-accent">Tech</span>University
          </Link>
          {/* Close button (mobile) */}
          <button
            className="dash-sidebar-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav groups */}
        <nav className="dash-sidebar-nav" aria-label="Dashboard navigation">
          {NAV_ITEMS.map((group) => (
            <div key={group.group} className="dash-nav-group">
              <span className="dash-nav-group-label">{group.group}</span>
              {group.links.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `dash-nav-link${isActive ? ' dash-nav-link--active' : ''}`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="dash-nav-icon">{item.icon}</span>
                  <span className="dash-nav-label">{item.label}</span>
                  {item.badge && (
                    <span className="dash-nav-badge">{item.badge}</span>
                  )}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        {/* Sidebar footer — user card */}
        <div className="dash-sidebar-footer">
          <div className="dash-user-card">
            <div className="dash-user-avatar">S</div>
            <div className="dash-user-info">
              <span className="dash-user-name">Student</span>
              <span className="dash-user-role">Undergraduate</span>
            </div>
            <button
              className="dash-user-logout"
              onClick={handleLogout}
              title="Sign out"
              aria-label="Sign out"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </aside>

      {/* Sidebar overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="dash-sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── MAIN AREA ───────────────────────────────────────────────────── */}
      <div className="dash-main">

        {/* TOPBAR */}
        <header className="dash-topbar">
          {/* Hamburger (mobile) */}
          <button
            className="dash-topbar-menu"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Page breadcrumb / title — filled by Outlet page */}
          <div className="dash-topbar-title">
            <span className="dash-breadcrumb-root">Portal</span>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="dash-breadcrumb-page">Overview</span>
          </div>

          {/* Right actions */}
          <div className="dash-topbar-actions">

            {/* Search */}
            <div className="dash-search-wrap" ref={searchRef}>
              <button
                className="dash-topbar-btn"
                aria-label="Search"
                onClick={() => setSearchOpen((v) => !v)}
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              {searchOpen && (
                <div className="dash-search-dropdown">
                  <div className="dash-search-inner">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      autoFocus
                      type="text"
                      className="dash-search-input"
                      placeholder="Search courses, grades, assignments…"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                      <button className="dash-search-clear" onClick={() => setSearchQuery('')} aria-label="Clear">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                  <div className="dash-search-hint">
                    Press <kbd>Enter</kbd> to search · <kbd>Esc</kbd> to close
                  </div>
                </div>
              )}
            </div>

            {/* Notifications */}
            <button
              className="dash-topbar-btn dash-topbar-btn--notif"
              aria-label="Notifications"
              onClick={() => navigate('/dashboard/messages')}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="dash-notif-dot" aria-hidden="true" />
            </button>

            {/* Avatar + dropdown */}
            <div className="dash-profile-wrap" ref={profileRef}>
              <button
                className="dash-topbar-avatar"
                onClick={() => setProfileOpen((v) => !v)}
                aria-label="Account menu"
                aria-expanded={profileOpen}
                aria-haspopup="true"
              >
                S
              </button>

              {profileOpen && (
                <div className="dash-profile-dropdown" role="menu">
                  {/* User info header */}
                  <div className="dash-pd-header">
                    <div className="dash-pd-avatar">S</div>
                    <div>
                      <div className="dash-pd-name">Alex Student</div>
                      <div className="dash-pd-email">alex@techuniversity.edu</div>
                    </div>
                  </div>

                  <div className="dash-pd-divider" />

                  {/* Menu items */}
                  <button className="dash-pd-item" role="menuitem" onClick={() => { navigate('/dashboard/profile'); setProfileOpen(false); }}>
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    My Profile
                  </button>
                  <button className="dash-pd-item" role="menuitem" onClick={() => { navigate('/dashboard/settings'); setProfileOpen(false); }}>
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Settings
                  </button>

                  <div className="dash-pd-divider" />

                  <button className="dash-pd-item dash-pd-item--danger" role="menuitem" onClick={handleLogout}>
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="dash-page">
          {/* Page heading */}
          <div className="dash-page-header">
            <div>
              <h1 className="dash-page-title">Good morning, Student 👋</h1>
              <p className="dash-page-sub">Here's what's happening in your portal today.</p>
            </div>
            <div className="dash-page-header-actions">
              <button className="dash-btn-secondary" onClick={() => alert('Export Report — wire up when backend is ready.')}>
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export Report
              </button>
              <button className="dash-btn-primary" onClick={() => navigate('/dashboard/courses')}>
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Enrol in Course
              </button>
            </div>
          </div>

          {/* Routed page content */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
