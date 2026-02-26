import { useApp } from '../context/AppContext';
import { TOPICS } from '../data/topics';
import './Progress.css';

export default function Progress() {
  const { state } = useApp();
  const accuracy = state.totalAnswered > 0
    ? Math.round((state.totalCorrect / state.totalAnswered) * 100) : 0;
  const dailyPct = Math.min((state.dailyProgress / state.dailyGoal) * 100, 100);

  const topicStats = TOPICS.map(t => {
    const p = state.topicProgress[t.id];
    return {
      ...t,
      answered: p ? p.answered : 0,
      correct: p ? p.correct : 0,
      accuracy: p ? Math.round((p.correct / Math.max(p.answered, 1)) * 100) : 0,
      completion: p ? Math.round((p.questionsAnswered.length / t.questionCount) * 100) : 0,
    };
  }).filter(t => t.answered > 0).sort((a, b) => b.answered - a.answered);

  return (
    <div className="progress-page animate-fade-in" id="progress-page">
      <h1 className="section-title">📊 Your Progress</h1>
      <p className="section-subtitle">Track your learning journey and performance</p>

      {/* Overview Cards */}
      <div className="progress-overview stagger-children">
        <div className="overview-card">
          <div className="overview-icon" style={{ background: 'rgba(61,79,245,0.15)' }}>⚡</div>
          <div className="overview-info">
            <span className="overview-value">{state.xp}</span>
            <span className="overview-label">Total XP</span>
          </div>
        </div>
        <div className="overview-card">
          <div className="overview-icon" style={{ background: 'rgba(239,68,68,0.15)' }}>🔥</div>
          <div className="overview-info">
            <span className="overview-value">{state.streak}</span>
            <span className="overview-label">Day Streak</span>
          </div>
        </div>
        <div className="overview-card">
          <div className="overview-icon" style={{ background: 'rgba(16,185,129,0.15)' }}>✅</div>
          <div className="overview-info">
            <span className="overview-value">{accuracy}%</span>
            <span className="overview-label">Accuracy</span>
          </div>
        </div>
        <div className="overview-card">
          <div className="overview-icon" style={{ background: 'rgba(249,155,7,0.15)' }}>📝</div>
          <div className="overview-info">
            <span className="overview-value">{state.totalAnswered}</span>
            <span className="overview-label">Answered</span>
          </div>
        </div>
        <div className="overview-card">
          <div className="overview-icon" style={{ background: 'rgba(147,168,255,0.15)' }}>📚</div>
          <div className="overview-info">
            <span className="overview-value">{state.vocabLearned}</span>
            <span className="overview-label">Vocab Learned</span>
          </div>
        </div>
        <div className="overview-card">
          <div className="overview-icon" style={{ background: 'rgba(255,189,32,0.15)' }}>🏆</div>
          <div className="overview-info">
            <span className="overview-value">{state.badges.length}</span>
            <span className="overview-label">Badges</span>
          </div>
        </div>
      </div>

      {/* Daily Goal */}
      <div className="progress-daily glass-card">
        <div className="daily-goal-header">
          <h3>Daily Goal</h3>
          <span className="daily-goal-count">{state.dailyProgress} / {state.dailyGoal} questions</span>
        </div>
        <div className="progress-bar" style={{ height: '12px' }}>
          <div className="progress-bar-fill" style={{ width: `${dailyPct}%` }}></div>
        </div>
        {dailyPct >= 100 && <p className="daily-goal-done">🎉 Daily goal complete! Great work!</p>}
      </div>

      {/* Best Streak */}
      <div className="streak-card glass-card">
        <div className="streak-visual">
          <span className="streak-fire">🔥</span>
          <span className="streak-number">{state.maxPerfectStreak}</span>
        </div>
        <div className="streak-info">
          <h3>Best Correct Streak</h3>
          <p>Most consecutive correct answers in a row</p>
        </div>
      </div>

      {/* Topic Performance */}
      {topicStats.length > 0 && (
        <div className="topic-performance">
          <h2 className="section-title" style={{ fontSize: '1.3rem' }}>Topic Performance</h2>
          <div className="topic-perf-list stagger-children">
            {topicStats.map(t => (
              <div key={t.id} className="topic-perf-row glass-card">
                <span className="topic-perf-icon">{t.icon}</span>
                <div className="topic-perf-info">
                  <span className="topic-perf-name">{t.titleEn}</span>
                  <span className="topic-perf-stats">
                    {t.answered} answered · {t.accuracy}% accurate
                  </span>
                </div>
                <div className="topic-perf-bar">
                  <div className="progress-bar" style={{ width: '120px' }}>
                    <div className="progress-bar-fill" style={{
                      width: `${t.completion}%`,
                      background: t.accuracy >= 80
                        ? 'linear-gradient(90deg, #10b981, #34d399)'
                        : t.accuracy >= 50
                        ? 'linear-gradient(90deg, #f59e0b, #fbbf24)'
                        : 'linear-gradient(90deg, #ef4444, #f87171)',
                    }}></div>
                  </div>
                  <span className="topic-perf-pct">{t.completion}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {topicStats.length === 0 && (
        <div className="progress-empty glass-card">
          <span className="empty-icon">📊</span>
          <h3>No data yet</h3>
          <p>Start practicing to see your progress here!</p>
        </div>
      )}
    </div>
  );
}
