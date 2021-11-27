export default function Question({ question }) {
  return (
    <div className="answer-section">
      <div className="icon-section">
        <span className="question-icon">Q</span>
      </div>
      <span>{question}</span>
    </div>
  );
}
