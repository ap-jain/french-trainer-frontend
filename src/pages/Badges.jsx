import { useApp } from '../context/AppContext';
import './Badges.css';

export default function Badges() {
  const { state, BADGES } = useApp();

  const earned = BADGES.filter(b => state.badges.includes(b.id));
  const locked = BADGES.filter(b => !state.badges.includes(b.id));

  return (
    <div className="badges-page animate-fade-in" id="badges-page">
      <h1 className="section-title">🏆 Achievements</h1>
      <p className="section-subtitle">
        {earned.length} of {BADGES.length} badges earned — keep practicing to unlock more!
      </p>

      {earned.length > 0 && (
        <section className="badges-section">
          <h2 className="badges-section-title">
            <span className="badges-section-icon">✨</span> Earned
          </h2>
          <div className="badges-grid stagger-children">
            {earned.map(badge => (
              <div key={badge.id} className="badge-card earned glass-card">
                <span className="badge-emoji">{badge.icon}</span>
                <h3 className="badge-name">{badge.name}</h3>
                <p className="badge-desc">{badge.description}</p>
                <span className="badge-earned-label">✓ Earned</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="badges-section">
        <h2 className="badges-section-title">
          <span className="badges-section-icon">🔒</span> Locked
        </h2>
        <div className="badges-grid stagger-children">
          {locked.map(badge => (
            <div key={badge.id} className="badge-card locked glass-card">
              <span className="badge-emoji locked-emoji">{badge.icon}</span>
              <h3 className="badge-name">{badge.name}</h3>
              <p className="badge-desc">{badge.description}</p>
              <span className="badge-locked-label">🔒 Locked</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
