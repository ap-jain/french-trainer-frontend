import { NavLink } from 'react-router-dom';
import './MobileNav.css';

const NAV_ITEMS = [
  { path: '/', icon: '🏠', label: 'Home' },
  { path: '/topics', icon: '📖', label: 'Topics' },
  { path: '/practice', icon: '✏️', label: 'Practice' },
  { path: '/progress', icon: '📊', label: 'Progress' },
  { path: '/badges', icon: '🏆', label: 'Badges' },
];

export default function MobileNav() {
  return (
    <nav className="mobile-nav" id="mobile-nav">
      {NAV_ITEMS.map(item => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          end={item.path === '/'}
        >
          <span className="mobile-nav-icon">{item.icon}</span>
          <span className="mobile-nav-label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
