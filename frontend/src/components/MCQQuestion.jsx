import { useState } from 'react';
import './QuestionStyles.css';

export default function MCQQuestion({ question, onAnswer, answered, isCorrect }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (idx) => {
    if (answered) return;
    setSelected(idx);
    onAnswer(idx === question.correct);
  };

  return (
    <div className="question-card">
      <span className="question-type-badge">🔘 Multiple Choice</span>
      <p className="question-text">{question.question}</p>
      <div className="mcq-options">
        {question.options.map((opt, idx) => {
          let cls = 'mcq-option';
          if (answered) {
            if (idx === question.correct) cls += ' correct';
            else if (idx === selected && !isCorrect) cls += ' incorrect';
          } else if (idx === selected) {
            cls += ' selected';
          }
          return (
            <button key={idx} className={cls} onClick={() => handleSelect(idx)} disabled={answered}>
              <span className="mcq-letter">{String.fromCharCode(65 + idx)}</span>
              <span className="mcq-text">{opt}</span>
              {answered && idx === question.correct && <span className="mcq-check">✓</span>}
            </button>
          );
        })}
      </div>
      {answered && question.explanation && (
        <div className="explanation animate-slide-up">
          <span className="explanation-icon">💡</span>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
