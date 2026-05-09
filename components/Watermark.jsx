'use client';

export function Watermark() {
  const svgText =
    '<svg xmlns="http://www.w3.org/2000/svg" width="220" height="100">' +
    '<text transform="rotate(-35, 110, 50)" x="10" y="60" ' +
    'font-family="Source Sans 3, sans-serif" font-size="13" ' +
    'fill="%231a2744" opacity="0.06">© Anubhab Karmakar, Lecturer</text>' +
    '</svg>';

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svgText)}")`,
        backgroundRepeat: 'repeat',
      }}
    />
  );
}

/** Watermark text to embed inside every SVG diagram */
export function SvgWatermark() {
  return (
    <text
      x="95%"
      y="96%"
      textAnchor="end"
      fontSize="9"
      fontFamily="Source Sans 3, sans-serif"
      fill="#1a2744"
      opacity="0.2"
    >
      © Anubhab Karmakar
    </text>
  );
}
