export default function ExamTip({ children }) {
  return (
    <div className="exam-tip">
      <div className="tip-label">🎯 Exam Tip</div>
      {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
  );
}
