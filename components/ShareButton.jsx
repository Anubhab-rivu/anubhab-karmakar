'use client';

import { useState } from 'react';

export default function ShareButton({ title, text }) {
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: title || document.title,
      text: text || 'Check out these notes by Anubhab Karmakar',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        /* User cancelled the native share sheet. */
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } catch {
        const input = document.createElement('input');
        input.value = window.location.href;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    }
  };

  return (
    <>
      <button
        aria-label="Share this page"
        className="nav-icon-btn share-btn"
        onClick={handleShare}
        type="button"
      >
        <span aria-hidden="true" className="share-glyph" />
        <span className="action-text">Share</span>
      </button>
      {showToast && (
        <div className="toast">Link copied. Share it with your classmates.</div>
      )}
    </>
  );
}
