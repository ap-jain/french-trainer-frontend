import { useState } from 'react';
import './QuestionStyles.css';

export default function VocabQuestion({ question, onAnswer, answered }) {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleKnew = () => {
    onAnswer(true);
  };

  const handleDidntKnow = () => {
    onAnswer(false);
  };

  return (
    <div className="question-card vocab-card">
      <span className="question-type-badge">📚 Vocabulary</span>

      <div className="vocab-word-section">
        <h2 className="vocab-word">{question.word}</h2>
        {!revealed && !answered && (
          <p className="vocab-prompt">Do you know what this word means?</p>
        )}
      </div>

      {!revealed && !answered && (
        <button className="btn btn-accent btn-lg vocab-reveal-btn" onClick={handleReveal}>
          👁️ Reveal Meaning
        </button>
      )}

      {(revealed || answered) && (
        <div className="vocab-meaning-section animate-scale-in">
          <div className="vocab-meaning-card">
            <span className="vocab-meaning-label">Meaning</span>
            <p className="vocab-meaning">{question.meaning}</p>
          </div>

          {question.context && (
            <div className="vocab-context">
              <span className="vocab-context-label">Example</span>
              <p className="vocab-context-fr">"{question.context}"</p>
              <p className="vocab-context-en">{question.contextTranslation}</p>
            </div>
          )}

          {!answered && (
            <div className="vocab-self-assess">
              <p className="assess-prompt">Did you know this word?</p>
              <div className="assess-buttons">
                <button className="btn btn-success" onClick={handleKnew}>
                  ✅ I knew it
                </button>
                <button className="btn btn-ghost" onClick={handleDidntKnow}>
                  ❌ I didn't know
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
