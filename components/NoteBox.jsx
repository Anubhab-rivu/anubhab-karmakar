export default function NoteBox({ label = 'Important Note', children }) {
  return (
    <div className="note-box">
      <div className="note-label">{label}</div>
      {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
  );
}
