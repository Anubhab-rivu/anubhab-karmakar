/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,mdx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'var(--ink)',
          light: 'var(--ink-light)',
          muted: 'var(--ink-muted)',
        },
        paper: {
          DEFAULT: 'var(--paper)',
          warm: 'var(--paper-warm)',
          card: 'var(--paper-card)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          light: 'var(--accent-light)',
          mid: 'var(--accent-mid)',
        },
        navy: {
          DEFAULT: 'var(--navy)',
          light: 'var(--navy-light)',
        },
        gold: {
          DEFAULT: 'var(--gold)',
          light: 'var(--gold-light)',
        },
        green: {
          DEFAULT: 'var(--green)',
          light: 'var(--green-light)',
        },
        teal: {
          DEFAULT: 'var(--teal)',
          light: 'var(--teal-light)',
        },
        border: {
          DEFAULT: 'var(--border)',
          light: 'var(--border-light)',
        },
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body: ['Source Sans 3', 'Georgia', 'sans-serif'],
        code: ['Source Code Pro', 'monospace'],
      },
      boxShadow: {
        card: 'var(--shadow)',
      },
    },
  },
  plugins: [],
};
