'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function LibraryHome() {
  return (
    <>
      {/* HEADER */}
      <section style={{ 
        background: 'var(--navy)', 
        color: 'white', 
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Crosshatch pattern background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 20px)`,
            zIndex: 0
          }}
        />

        <motion.div 
          className="header-inner" 
          style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1 
            variants={fadeUp}
            style={{ 
              fontFamily: 'Merriweather, serif', 
              fontSize: 'clamp(32px, 6vw, 48px)', 
              marginBottom: 16,
              color: 'white'
            }}
          >
            📚 AK Notes Library
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            className="subtitle" 
            style={{ 
              color: 'rgba(255,255,255,0.7)', 
              fontSize: 'clamp(16px, 2.5vw, 18px)', 
              lineHeight: 1.6 
            }}
          >
            Free, interactive engineering notes by <strong style={{ color: 'white' }}>Anubhab Karmakar</strong>, Lecturer at NHIT. <br />
            Choose your programme to get started.
          </motion.p>
        </motion.div>
      </section>

      {/* DEGREE GRID */}
      <div style={{ background: 'var(--paper)', minHeight: '50vh', padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Diploma Card */}
            <motion.div variants={fadeUp} whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Link
                href="/library/diploma"
                style={{
                  background: 'var(--paper-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 20,
                  padding: '40px 32px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  boxShadow: 'var(--shadow)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Accent line */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: 'var(--accent)' }} />
                
                <div style={{ fontSize: 56, marginBottom: 20 }}>🏭</div>
                <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 24, color: 'var(--navy)', marginBottom: 8 }}>
                  Diploma Engineering
                </h2>
                <p style={{ color: 'var(--ink-muted)', fontSize: 15, margin: 0, flex: 1, lineHeight: 1.5 }}>
                  WBSCTE Syllabus. Dive into comprehensive interactive notes designed for diploma students.
                </p>
                
                <div style={{ 
                  marginTop: 24, 
                  fontSize: 14, 
                  color: 'var(--accent)', 
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8
                }}>
                  Semester 2 available <span>→</span>
                </div>
              </Link>
            </motion.div>

            {/* B.Tech Card */}
            <motion.div variants={fadeUp} whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Link
                href="/library/btech"
                style={{
                  background: 'var(--paper-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 20,
                  padding: '40px 32px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  boxShadow: 'var(--shadow)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Accent line */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: '#3498db' }} />
                
                <div style={{ fontSize: 56, marginBottom: 20 }}>🎓</div>
                <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 24, color: 'var(--navy)', marginBottom: 8 }}>
                  B.Tech Engineering
                </h2>
                <p style={{ color: 'var(--ink-muted)', fontSize: 15, margin: 0, flex: 1, lineHeight: 1.5 }}>
                  MAKAUT Syllabus. Advanced, in-depth mechanics and metrology concepts with dynamic diagrams.
                </p>
                
                <div style={{ 
                  marginTop: 24, 
                  fontSize: 14, 
                  color: '#3498db', 
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8
                }}>
                  Semester 4 available <span>→</span>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          background: '#0f1520',
          color: 'rgba(255,255,255,0.5)',
          textAlign: 'center',
          padding: '40px 24px',
          fontSize: 14,
        }}
      >
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)' }}>
          © {new Date().getFullYear()} Anubhab Karmakar. All rights reserved.
        </p>
        <div style={{ marginTop: 12, display: 'flex', justifyContent: 'center', gap: 24 }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}>
            Portfolio
          </Link>
          <Link href="/library" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}>
            Notes Library
          </Link>
        </div>
        <p style={{ marginTop: 16, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
          Built with pride for students of NHIT
        </p>
      </footer>
    </>
  );
}
