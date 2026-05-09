'use client';

import { useRef, useEffect, useState } from 'react';
import { SvgWatermark } from './Watermark';

export default function InteractiveDiagram({ children, caption, maxWidth = 600 }) {
  const wrapRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (wrapRef.current) observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, []);

  const handleElementHover = (e) => {
    const target = e.target.closest('[data-tooltip]');
    if (target) {
      const rect = target.getBoundingClientRect();
      const wrapRect = wrapRef.current.getBoundingClientRect();
      setTooltip({
        text: target.getAttribute('data-tooltip'),
        x: rect.left - wrapRect.left + rect.width / 2,
        y: rect.top - wrapRect.top - 8,
      });
    } else {
      setTooltip(null);
    }
  };

  return (
    <div
      ref={wrapRef}
      className="diagram-wrap"
      style={{ position: 'relative' }}
      onMouseMove={handleElementHover}
      onMouseLeave={() => setTooltip(null)}
    >
      <div
        style={{
          maxWidth,
          margin: '0 auto',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        {typeof children === 'function' ? children({ visible, SvgWatermark }) : children}
      </div>

      {tooltip && (
        <div
          style={{
            position: 'absolute',
            left: tooltip.x,
            top: tooltip.y,
            transform: 'translate(-50%, -100%)',
            background: 'var(--paper-card)',
            border: '1px solid var(--navy)',
            borderRadius: 6,
            padding: '6px 10px',
            fontSize: 12,
            fontFamily: 'Source Sans 3, sans-serif',
            color: 'var(--ink)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            zIndex: 10,
          }}
        >
          {tooltip.text}
        </div>
      )}

      {caption && <p className="diagram-caption">{caption}</p>}
    </div>
  );
}
