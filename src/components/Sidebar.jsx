import { NavLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import './Sidebar.css';

const NAV_ITEMS = [
  { path: '/', icon: '🏠', label: 'Dashboard' },
  { path: '/topics', icon: '📖', label: 'Topics' },
  { path: '/practice', icon: '✏️', label: 'Practice' },
  { path: '/progress', icon: '📊', label: 'Progress' },
  { path: '/badges', icon: '🏆', label: 'Badges' },
];

export default function Sidebar() {
  const { state } = useApp();
  const dailyPct = Math.min((state.dailyProgress / state.dailyGoal) * 100, 100);

  return (
    <aside className="sidebar" id="main-sidebar">
      <nav className="sidebar-nav">
        {NAV_ITEMS.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            end={item.path === '/'}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-daily">
        <div className="daily-header">
          <span className="daily-title">Daily Goal</span>
          <span className="daily-count">{state.dailyProgress}/{state.dailyGoal}</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${dailyPct}%` }}></div>
        </div>
        {dailyPct >= 100 && <span className="daily-complete">🎉 Goal reached!</span>}
      </div>

      <div className="sidebar-level">
        <div className="level-badge">
          <span className="level-number">{state.level}</span>
        </div>
        <div className="level-info">
          <span className="level-title">Level {state.level}</span>
          <span className="level-xp">{state.xp % 100}/100 XP</span>
        </div>
        <div className="progress-bar" style={{ width: '100%' }}>
          <div className="progress-bar-fill" style={{ width: `${state.xp % 100}%` }}></div>
        </div>
      </div>
    </aside>
  );
}
