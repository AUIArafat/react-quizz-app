export default function Answer({ answer }) {
  return (
    <div className="answer-section">
      <div className="icon-section">
        <span className="answer-icon">A</span>
      </div>
      <span>{answer}</span>
    </div>
  );
}
