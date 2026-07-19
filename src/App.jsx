import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardLayout from './pages/DashboardLayout';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import MyCourses from './pages/MyCourses';
import Assignments from './pages/Assignments';
import Grades from './pages/Grades';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const router = createBrowserRouter([
  // ── Public site (navbar + footer) ──────────────────────────────────────
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true,          element: <Home /> },
      { path: 'about',        element: <About /> },
      { path: 'courses',      element: <Courses /> },
      { path: 'blog',         element: <Blog /> },
      { path: 'contact',      element: <Contact /> },
      { path: 'login',        element: <Login /> },
      { path: 'register',     element: <Register /> },
    ],
  },

  // ── Student portal (sidebar + topbar, no public nav) ───────────────────
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true,               element: <Dashboard /> },
      { path: 'courses',           element: <MyCourses /> },
      { path: 'assignments',       element: <Assignments /> },
      { path: 'grades',            element: <Grades /> },
      { path: 'schedule',          element: <ComingSoon title="Schedule" /> },
      { path: 'library',           element: <ComingSoon title="Library" /> },
      { path: 'messages',          element: <ComingSoon title="Messages" /> },
      { path: 'profile',           element: <Profile /> },
      { path: 'settings',          element: <Settings /> },
    ],
  },
]);

// Temporary placeholder so sidebar links don't 404
function ComingSoon({ title }) {
  return (
    <div className="dash-coming-soon">
      <div className="dash-coming-soon-icon" aria-hidden="true">
        <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
        </svg>
      </div>
      <h2 className="dash-coming-soon-title">{title}</h2>
      <p className="dash-coming-soon-sub">
        This section is under construction and will be available once the backend API is wired up.
      </p>
    </div>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
