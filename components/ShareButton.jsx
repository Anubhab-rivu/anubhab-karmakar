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
        title="Share this page"
        type="button"
      >
        <svg aria-hidden="true" className="action-svg share-action-svg" viewBox="0 0 24 24">
          <path d="M12 3v12" />
          <path d="M7 8l5-5 5 5" />
          <path d="M5 13v6h14v-6" />
        </svg>
        <span className="action-text">Share</span>
      </button>
      {showToast && (
        <div aria-live="polite" className="toast">Link copied. Share it with your classmates.</div>
      )}
    </>
  );
}
