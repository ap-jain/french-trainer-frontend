import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { getActiveTopics, getAllTopics } from '../data/curriculum';
import { getExerciseQuestions } from '../data/a1Questions';
import { getVocabQuestions } from '../data/a1Vocab';
import MCQQuestion from '../components/MCQQuestion';
import FillQuestion from '../components/FillQuestion';
import VocabQuestion from '../components/VocabQuestion';
import PronunciationQuestion from '../components/PronunciationQuestion';
import './Practice.css';

function loadQuestions(exerciseId) {
  // Try grammar questions first, then vocab
  let qs = getExerciseQuestions(exerciseId);
  if (qs.length === 0) qs = getVocabQuestions(exerciseId);
  return qs;
}

export default function Practice() {
  const [searchParams] = useSearchParams();
  const exerciseId = searchParams.get('exercise');
  const topicId = searchParams.get('topic');
  const { state, dispatch } = useApp();

  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [sessionStats, setSessionStats] = useState({ correct: 0, total: 0 });
  const [showResults, setShowResults] = useState(false);

  // Find topic info
  const allTopics = getAllTopics();
  const topic = allTopics.find(t => t.id === topicId);
  const exercise = topic?.exercises?.find(e => e.id === exerciseId);

  useEffect(() => {
    let qs = [];
    if (exerciseId) {
      qs = loadQuestions(exerciseId);
    } else if (topicId && topic) {
      // Load all exercises for this topic
      topic.exercises.forEach(ex => {
        const exQs = loadQuestions(ex.id);
        qs.push(...exQs);
      });
    } else {
      // Mixed practice: gather some from all active topics
      const active = getActiveTopics();
      active.forEach(t => {
        t.exercises.forEach(ex => {
          const exQs = loadQuestions(ex.id);
          qs.push(...exQs.slice(0, 2));
        });
      });
      qs = qs.slice(0, 20);
    }
    const shuffled = [...qs].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentIdx(0);
    setAnswered(false);
    setIsCorrect(null);
    setSessionStats({ correct: 0, total: 0 });
    setShowResults(false);
  }, [exerciseId, topicId]);

  const currentQuestion = questions[currentIdx];

  const handleAnswer = useCallback((correct) => {
    setAnswered(true);
    setIsCorrect(correct);
    setSessionStats(prev => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1,
    }));
    dispatch({
      type: 'ANSWER_QUESTION',
      payload: {
        correct,
        topicId: exerciseId || topicId || 'mixed',
        questionId: currentQuestion?.id || 'unknown',
        questionType: currentQuestion?.type || 'mcq',
      },
    });
  }, [currentQuestion, exerciseId, topicId, dispatch]);

  const handleNext = () => {
    if (currentIdx + 1 >= questions.length) {
      setShowResults(true);
    } else {
      setCurrentIdx(prev => prev + 1);
      setAnswered(false);
      setIsCorrect(null);
    }
  };

  const handleRestart = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentIdx(0);
    setAnswered(false);
    setIsCorrect(null);
    setSessionStats({ correct: 0, total: 0 });
    setShowResults(false);
  };

  if (questions.length === 0) {
    return (
      <div className="practice animate-fade-in" id="practice-page">
        <div className="practice-empty">
          <span className="empty-icon">📝</span>
          <h2>No Questions Available</h2>
          <p>Select an exercise from the course library to start practicing.</p>
          <Link to="/topics" className="btn btn-primary">📖 Browse Topics</Link>
        </div>
      </div>
    );
  }

  if (showResults) {
    const pct = Math.round((sessionStats.correct / sessionStats.total) * 100);
    const xpEarned = sessionStats.correct * 10 + (sessionStats.total - sessionStats.correct) * 2;
    return (
      <div className="practice animate-fade-in" id="practice-page">
        <div className="results-card animate-scale-in">
          <div className="results-header">
            <span className="results-emoji">{pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪'}</span>
            <h2 className="results-title">
              {pct >= 80 ? 'Excellent !' : pct >= 50 ? 'Bien joué !' : 'Continue d\'essayer !'}
            </h2>
          </div>
          <div className="results-score">
            <div className="score-circle" style={{ '--pct': pct }}>
              <span className="score-value">{pct}%</span>
            </div>
          </div>
          <div className="results-stats">
            <div className="result-stat">
              <span className="result-stat-value">{sessionStats.correct}</span>
              <span className="result-stat-label">Correct</span>
            </div>
            <div className="result-stat">
              <span className="result-stat-value">{sessionStats.total - sessionStats.correct}</span>
              <span className="result-stat-label">Incorrect</span>
            </div>
            <div className="result-stat">
              <span className="result-stat-value">+{xpEarned}</span>
              <span className="result-stat-label">XP Earned</span>
            </div>
          </div>
          <div className="results-actions">
            <button className="btn btn-primary btn-lg" onClick={handleRestart}>🔄 Try Again</button>
            <Link to="/topics" className="btn btn-ghost btn-lg">📖 More Exercises</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="practice animate-fade-in" id="practice-page">
      <div className="practice-header">
        <div className="practice-info">
          <div>
            <h2 className="practice-title">{exercise?.title || topic?.titleEn || 'Mixed Practice'}</h2>
            <span className="practice-subtitle">
              {topic ? `${topic.title} — ${topic.titleEn}` : 'Questions from all A1 topics'}
            </span>
          </div>
        </div>
        <div className="practice-progress-info">
          <span className="practice-counter">{currentIdx + 1} / {questions.length}</span>
          <div className="progress-bar" style={{ width: '200px' }}>
            <div className="progress-bar-fill" style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}></div>
          </div>
        </div>
      </div>

      <div className="question-area">
        {currentQuestion.type === 'mcq' && (
          <MCQQuestion question={currentQuestion} onAnswer={handleAnswer} answered={answered} isCorrect={isCorrect} />
        )}
        {currentQuestion.type === 'fill' && (
          <FillQuestion question={currentQuestion} onAnswer={handleAnswer} answered={answered} isCorrect={isCorrect} />
        )}
        {currentQuestion.type === 'vocab' && (
          <VocabQuestion question={currentQuestion} onAnswer={handleAnswer} answered={answered} />
        )}
        {currentQuestion.type === 'pronunciation' && (
          <PronunciationQuestion question={currentQuestion} onAnswer={handleAnswer} answered={answered} />
        )}
      </div>

      {answered && (
        <div className="practice-nav animate-slide-up">
          <div className={`answer-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
            <span className="feedback-icon">{isCorrect ? '✅' : '❌'}</span>
            <span className="feedback-text">{isCorrect ? 'Correct ! +10 XP' : 'Not quite. +2 XP for trying!'}</span>
          </div>
          <button className="btn btn-primary btn-lg" onClick={handleNext}>
            {currentIdx + 1 >= questions.length ? '📊 See Results' : 'Next Question →'}
          </button>
        </div>
      )}
    </div>
  );
}
