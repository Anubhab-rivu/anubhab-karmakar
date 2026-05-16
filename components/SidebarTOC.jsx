'use client';

import { useEffect, useRef, useState } from 'react';

export default function SidebarTOC() {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');
  const observerRef = useRef(null);

  useEffect(() => {
    const els = document.querySelectorAll('.main-content section[id]');
    const items = Array.from(els).map((el) => ({
      id: el.id,
      text: el.querySelector('h2, h3')?.textContent || el.id,
      level: 2,
    }));
    setHeadings(items);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    els.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <aside className="toc">
      <div className="toc-title">Contents</div>
      {headings.map((h) => (
        <a
          key={h.id}
          href={`#${h.id}`}
          className={`${h.level === 2 ? 'toc-section' : 'toc-sub'} ${
            activeId === h.id ? 'active' : ''
          }`}
        >
          {h.text}
        </a>
      ))}
    </aside>
  );
}
