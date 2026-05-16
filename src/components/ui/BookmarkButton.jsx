'use client';

import { useEffect, useState } from 'react';

export default function BookmarkButton({ unitId }) {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('ak-bookmarks') || '{}');
      setBookmarked(!!data[unitId]);
    } catch {}
  }, [unitId]);

  const toggle = () => {
    try {
      const data = JSON.parse(localStorage.getItem('ak-bookmarks') || '{}');
      if (bookmarked) delete data[unitId];
      else data[unitId] = Date.now();
      localStorage.setItem('ak-bookmarks', JSON.stringify(data));
      setBookmarked(!bookmarked);
    } catch {}
  };

  return <button className="ak-tool-btn print-hide" type="button" onClick={toggle}>{bookmarked ? 'Bookmarked' : 'Bookmark'}</button>;
}
