import { useApp } from '../context/AppContext';
import './Navbar.css';

export default function Navbar() {
  const { state, dispatch } = useApp();

  const accuracy = state.totalAnswered > 0
    ? Math.round((state.totalCorrect / state.totalAnswered) * 100)
    : 0;

  return (
    <nav className="navbar" id="main-navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <span className="brand-icon">🇫🇷</span>
          <div className="brand-text">
            <h1 className="brand-title">French Trainer</h1>
            <span className="brand-subtitle">TCF Preparation</span>
          </div>
        </div>

        <div className="navbar-stats">
          <div className="stat-chip" data-tooltip="Experience Points">
            <span className="stat-icon">⚡</span>
            <span className="stat-value">{state.xp}</span>
            <span className="stat-label">XP</span>
          </div>

          <div className="stat-chip" data-tooltip="Current Level">
            <span className="stat-icon">🎯</span>
            <span className="stat-value">Lv.{state.level}</span>
          </div>

          <div className="stat-chip streak" data-tooltip="Day Streak">
            <span className="stat-icon">🔥</span>
            <span className="stat-value">{state.streak}</span>
          </div>

          <div className="stat-chip" data-tooltip="Accuracy">
            <span className="stat-icon">✅</span>
            <span className="stat-value">{accuracy}%</span>
          </div>
        </div>

        <div className="navbar-actions">
          <div className="ai-toggle" id="ai-mode-toggle">
            <span className="ai-label">AI Mode</span>
            <div
              className={`toggle-switch ${state.aiMode ? 'active' : ''}`}
              onClick={() => dispatch({ type: 'TOGGLE_AI_MODE' })}
              role="switch"
              aria-checked={state.aiMode}
            >
              <div className="toggle-knob"></div>
            </div>
            {state.aiMode && <span className="ai-badge">✨</span>}
          </div>
        </div>
      </div>
    </nav>
  );
}
