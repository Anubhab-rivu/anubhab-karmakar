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
        /* user cancelled */
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } catch {
        /* fallback */
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
        onClick={handleShare}
        className="share-btn"
        style={{
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.25)',
          borderRadius: 8,
          padding: '6px 12px',
          cursor: 'pointer',
          fontSize: 13,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          transition: 'background 0.2s',
        }}
        aria-label="Share this page"
      >
        📤 Share
      </button>
      {showToast && (
        <div className="toast">Link copied! Share it with your classmates 📎</div>
      )}
    </>
  );
}
