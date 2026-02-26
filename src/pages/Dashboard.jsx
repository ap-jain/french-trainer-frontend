import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { GRAMMAR_SECTIONS, VOCABULARY_SECTIONS, LEVELS, getA1ExerciseCount } from '../data/curriculum';
import './Dashboard.css';

export default function Dashboard() {
  const { state } = useApp();
  const accuracy = state.totalAnswered > 0
    ? Math.round((state.totalCorrect / state.totalAnswered) * 100) : 0;

  const totalA1 = getA1ExerciseCount();

  // Get A1 grammar topics for quick access
  const quickStartTopics = GRAMMAR_SECTIONS.flatMap(s =>
    s.topics.filter(t => !t.comingSoon)
  ).slice(0, 4);

  return (
    <div className="dashboard animate-fade-in" id="dashboard-page">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Bienvenue sur <span className="hero-accent">French Trainer</span>
          </h1>
          <p className="hero-description">
            Master French for the TCF exam with structured grammar lessons, vocabulary exercises, and pronunciation practice.
          </p>
          <div className="hero-actions">
            <Link to="/topics" className="btn btn-primary btn-lg">📖 Start Learning</Link>
            <Link to="/practice" className="btn btn-ghost btn-lg">✏️ Quick Practice</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-flag">🇫🇷</div>
            <div className="hero-greeting">Bonjour !</div>
            <div className="hero-subtext">{totalA1} exercises available</div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="stats-grid stagger-children">
        <div className="stat-card">
          <div className="stat-card-icon" style={{ background: 'rgba(61,79,245,0.15)' }}>⚡</div>
          <div className="stat-card-info">
            <span className="stat-card-value">{state.xp}</span>
            <span className="stat-card-label">Total XP</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon" style={{ background: 'rgba(239,68,68,0.15)' }}>🔥</div>
          <div className="stat-card-info">
            <span className="stat-card-value">{state.streak}</span>
            <span className="stat-card-label">Day Streak</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon" style={{ background: 'rgba(16,185,129,0.15)' }}>✅</div>
          <div className="stat-card-info">
            <span className="stat-card-value">{accuracy}%</span>
            <span className="stat-card-label">Accuracy</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon" style={{ background: 'rgba(249,155,7,0.15)' }}>📝</div>
          <div className="stat-card-info">
            <span className="stat-card-value">{state.totalAnswered}</span>
            <span className="stat-card-label">Questions</span>
          </div>
        </div>
      </section>

      {/* Active Level */}
      <section className="levels-section">
        <h2 className="section-title">CEFR Levels</h2>
        <p className="section-subtitle">A1 is currently active — more levels coming soon!</p>
        <div className="levels-grid stagger-children">
          {LEVELS.map(level => (
            <Link
              to={level.active ? '/topics' : '#'}
              key={level.id}
              className={`level-card ${!level.active ? 'locked' : ''}`}
              style={{ '--level-color': level.color }}
              onClick={e => !level.active && e.preventDefault()}
            >
              <div className="level-card-header">
                <span className="level-id" style={{ color: level.color }}>{level.id}</span>
                {!level.active && <span className="level-lock">🔒</span>}
              </div>
              <h3 className="level-name">{level.label}</h3>
              <p className="level-desc">{level.active ? 'Start learning now' : 'Coming Soon'}</p>
              <div className="level-card-footer">
                {level.active && <span className="level-arrow">→</span>}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Start */}
      <section className="suggested-section">
        <h2 className="section-title">Quick Start — A1 Grammar</h2>
        <p className="section-subtitle">Jump right into these foundational topics</p>
        <div className="suggested-grid stagger-children">
          {quickStartTopics.map(topic => (
            <Link to={`/topics?cat=grammar`} key={topic.id} className="topic-card glass-card">
              <div className="topic-card-top">
                <span className="topic-icon">{topic.icon}</span>
                <span className="badge badge-a1">A1</span>
              </div>
              <h3 className="topic-title">{topic.title}</h3>
              <p className="topic-title-en">{topic.titleEn}</p>
              <div className="topic-meta">
                <span>{topic.exercises.length} exercises</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
