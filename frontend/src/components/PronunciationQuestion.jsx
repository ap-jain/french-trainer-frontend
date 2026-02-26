import { useState, useCallback } from 'react';
import './QuestionStyles.css';

export default function PronunciationQuestion({ question, onAnswer, answered }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);

  const speak = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(question.text);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.85;
      utterance.pitch = 1;

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => {
        setIsPlaying(false);
        setPlayCount(prev => prev + 1);
      };
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    }
  }, [question.text]);

  const speakSlow = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(question.text);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.5;
      utterance.pitch = 1;

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => {
        setIsPlaying(false);
        setPlayCount(prev => prev + 1);
      };

      window.speechSynthesis.speak(utterance);
    }
  }, [question.text]);

  const handlePracticed = () => onAnswer(true);
  const handleNeedMore = () => onAnswer(false);

  return (
    <div className="question-card pronunciation-card">
      <span className="question-type-badge">🎤 Pronunciation</span>

      <div className="pron-text-section">
        <h2 className="pron-french">{question.text}</h2>
        <p className="pron-translation">{question.translation}</p>
        {question.phonetic && (
          <p className="pron-phonetic">/{question.phonetic}/</p>
        )}
      </div>

      <div className="pron-controls">
        <button
          className={`pron-play-btn ${isPlaying ? 'playing' : ''}`}
          onClick={speak}
          disabled={isPlaying}
        >
          <span className="play-icon">{isPlaying ? '🔊' : '▶️'}</span>
          <span>{isPlaying ? 'Playing...' : 'Listen'}</span>
        </button>

        <button
          className="pron-slow-btn"
          onClick={speakSlow}
          disabled={isPlaying}
        >
          🐢 Slow
        </button>
      </div>

      {playCount > 0 && (
        <div className="pron-tip animate-fade-in">
          <span className="tip-icon">💡</span>
          <span>Try repeating the sentence out loud after listening!</span>
        </div>
      )}

      {!answered && playCount > 0 && (
        <div className="pron-assess animate-slide-up">
          <p className="assess-prompt">How did your pronunciation go?</p>
          <div className="assess-buttons">
            <button className="btn btn-success" onClick={handlePracticed}>
              👍 I can say it
            </button>
            <button className="btn btn-ghost" onClick={handleNeedMore}>
              🔄 Need more practice
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
