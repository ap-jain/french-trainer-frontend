import { useState } from 'react';
import './QuestionStyles.css';

export default function FillQuestion({ question, onAnswer, answered, isCorrect }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answered || !input.trim()) return;
    const correct = input.trim().toLowerCase() === question.answer.toLowerCase();
    onAnswer(correct);
  };

  return (
    <div className="question-card">
      <span className="question-type-badge">✏️ Fill in the Blank</span>
      <p className="question-text">{question.question}</p>
      {question.hint && (
        <p className="question-hint">
          <span className="hint-icon">💡</span> Hint: {question.hint}
        </p>
      )}
      <form className="fill-form" onSubmit={handleSubmit}>
        <div className="fill-input-wrap">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your answer..."
            className={`fill-input ${answered ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
            disabled={answered}
            autoFocus
          />
          {!answered && (
            <button type="submit" className="btn btn-primary fill-submit" disabled={!input.trim()}>
              Check
            </button>
          )}
        </div>
      </form>
      {answered && !isCorrect && (
        <div className="correct-answer animate-slide-up">
          <span className="correct-label">Correct answer:</span>
          <span className="correct-value">{question.answer}</span>
        </div>
      )}
      {answered && question.explanation && (
        <div className="explanation animate-slide-up">
          <span className="explanation-icon">💡</span>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
