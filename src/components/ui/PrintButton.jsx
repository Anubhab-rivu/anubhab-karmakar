'use client';

export default function PrintButton() {
  return (
    <button className="ak-tool-btn print-hide" type="button" onClick={() => window.print()}>
      Print Notes
    </button>
  );
}
