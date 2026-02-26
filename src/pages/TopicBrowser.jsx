import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { GRAMMAR_SECTIONS, VOCABULARY_SECTIONS, CATEGORIES, LEVELS } from '../data/curriculum';
import './TopicBrowser.css';

export default function TopicBrowser() {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || 'grammar';
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedTopic, setExpandedTopic] = useState(null);
  const { state } = useApp();

  const sections = activeCategory === 'grammar' ? GRAMMAR_SECTIONS
    : activeCategory === 'vocabulary' ? VOCABULARY_SECTIONS
    : [];

  const toggleSection = (id) => {
    setExpandedSection(prev => prev === id ? null : id);
    setExpandedTopic(null);
  };

  const toggleTopic = (id) => {
    setExpandedTopic(prev => prev === id ? null : id);
  };

  const getTopicProgress = (topic) => {
    let total = 0, completed = 0;
    topic.exercises.forEach(ex => {
      total++;
      if (state.topicProgress[ex.id]?.answered > 0) completed++;
    });
    return { total, completed, pct: total > 0 ? Math.round((completed / total) * 100) : 0 };
  };

  return (
    <div className="topic-browser animate-fade-in" id="topics-page">
      <div className="topic-browser-header">
        <div>
          <h1 className="section-title">📖 Course Library</h1>
          <p className="section-subtitle">Structured French curriculum aligned with TCF requirements</p>
        </div>
      </div>

      {/* Level badges */}
      <div className="level-indicators">
        {LEVELS.map(level => (
          <div key={level.id} className={`level-indicator ${level.active ? 'active' : 'locked'}`}
               style={{ '--lc': level.color }}>
            <span className="li-dot" style={{ background: level.color }}></span>
            <span className="li-label">{level.id}</span>
            {!level.active && <span className="li-soon">Coming Soon</span>}
          </div>
        ))}
      </div>

      {/* Category tabs */}
      <div className="category-tabs">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`cat-tab ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => { setActiveCategory(cat.id); setExpandedSection(null); setExpandedTopic(null); }}
            style={{ '--cat-color': cat.color }}
            disabled={cat.id === 'listening-reading' || cat.id === 'test'}
          >
            <span className="cat-icon">{cat.icon}</span>
            <span className="cat-label">{cat.label}</span>
            {(cat.id === 'listening-reading' || cat.id === 'test') && (
              <span className="cat-soon">Soon</span>
            )}
          </button>
        ))}
      </div>

      {/* Sections accordion */}
      <div className="curriculum-sections stagger-children">
        {sections.map(section => (
          <div key={section.id} className="curriculum-section">
            <button className={`section-header ${expandedSection === section.id ? 'expanded' : ''}`}
                    onClick={() => toggleSection(section.id)}>
              <span className="section-icon">{section.icon}</span>
              <div className="section-info">
                <span className="section-name">{section.title}</span>
                <span className="section-name-fr">{section.titleFr}</span>
              </div>
              <span className="section-count">{section.topics.length} topics</span>
              <span className="section-chevron">{expandedSection === section.id ? '▼' : '▶'}</span>
            </button>

            {expandedSection === section.id && (
              <div className="section-topics animate-slide-up">
                {section.topics.map(topic => {
                  const prog = getTopicProgress(topic);
                  const locked = topic.comingSoon;
                  return (
                    <div key={topic.id} className={`topic-item ${locked ? 'locked' : ''}`}>
                      <button
                        className={`topic-header ${expandedTopic === topic.id ? 'expanded' : ''}`}
                        onClick={() => !locked && toggleTopic(topic.id)}
                        disabled={locked}
                      >
                        <span className="topic-icon-small">{topic.icon}</span>
                        <div className="topic-info">
                          <span className="topic-name">{topic.title}</span>
                          <span className="topic-name-en">{topic.titleEn}</span>
                        </div>
                        <span className={`badge badge-${topic.level.toLowerCase()}`}>{topic.level}</span>
                        {locked && <span className="coming-soon-badge">🔒 Coming Soon</span>}
                        {!locked && prog.completed > 0 && (
                          <div className="topic-mini-progress">
                            <div className="progress-bar" style={{ width: '60px', height: '4px' }}>
                              <div className="progress-bar-fill" style={{ width: `${prog.pct}%` }}></div>
                            </div>
                            <span className="topic-mini-pct">{prog.pct}%</span>
                          </div>
                        )}
                        {!locked && <span className="topic-chevron">{expandedTopic === topic.id ? '▼' : '▶'}</span>}
                      </button>

                      {expandedTopic === topic.id && !locked && (
                        <div className="exercise-list animate-fade-in">
                          {topic.exercises.map((ex, i) => {
                            const exProgress = state.topicProgress[ex.id];
                            const done = exProgress?.answered > 0;
                            return (
                              <Link
                                to={`/practice?exercise=${ex.id}&topic=${topic.id}`}
                                key={ex.id}
                                className={`exercise-item ${done ? 'completed' : ''}`}
                              >
                                <span className="exercise-number">{i + 1}</span>
                                <span className="exercise-title">{ex.title}</span>
                                <span className="exercise-type-tag">{ex.type}</span>
                                {done && <span className="exercise-check">✅</span>}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {sections.length === 0 && (
        <div className="topics-empty">
          <span className="empty-icon">🚧</span>
          <p>This section is coming soon!</p>
        </div>
      )}
    </div>
  );
}
