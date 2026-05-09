'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO SECTION ═══ */}
      <section
        style={{
          background: 'var(--navy)',
          color: 'white',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Crosshatch pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 20px)`,
          }}
        />

        {/* Floating gear SVG */}
        <svg
          viewBox="0 0 200 200"
          style={{
            position: 'absolute',
            right: '5%',
            top: '15%',
            width: 300,
            height: 300,
            opacity: 0.04,
            animation: 'spin 60s linear infinite',
          }}
        >
          <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
          <path
            d="M100 20 L108 40 L130 35 L125 55 L145 60 L135 78 L150 90 L135 100 L145 115 L125 115 L130 135 L108 128 L100 148 L92 128 L70 135 L75 115 L55 115 L65 100 L50 90 L65 78 L55 60 L75 55 L70 35 L92 40 Z"
            fill="white"
          />
          <circle cx="100" cy="84" r="25" fill="var(--navy)" />
        </svg>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          style={{
            position: 'relative',
            textAlign: 'center',
            maxWidth: 700,
            padding: '40px 24px',
          }}
        >
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: 'Merriweather, serif',
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: 700,
              marginBottom: 12,
              lineHeight: 1.2,
              color: 'white',
            }}
          >
            Anubhab Karmakar
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              color: 'rgba(255,255,255,0.75)',
              marginBottom: 8,
              fontWeight: 500,
            }}
          >
            Mechanical Engineering Lecturer · <a href="https://nhit.in/" target="_blank" rel="noopener" style={{ color: 'var(--accent-mid)', textDecoration: 'none' }}>NHIT</a>
          </motion.p>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: 'clamp(14px, 2vw, 17px)',
              color: 'rgba(255,255,255,0.5)',
              fontStyle: 'italic',
              marginBottom: 36,
            }}
          >
            Turning engineering concepts into living, interactive knowledge
          </motion.p>

          <motion.div
            variants={fadeUp}
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link
              href="/library"
              style={{
                background: 'var(--accent)',
                color: 'white',
                padding: '14px 28px',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16,
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 15px rgba(192,57,43,0.4)',
              }}
            >
              📚 Open Notes Library
            </Link>
            <a
              href="#contact"
              style={{
                border: '2px solid rgba(255,255,255,0.4)',
                color: 'white',
                padding: '14px 28px',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 16,
                textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite',
          }}
        >
          <style>{`@keyframes bounce { 0%,100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(10px); } }`}</style>
          <span style={{ fontSize: 24, opacity: 0.5 }}>▼</span>
        </div>
      </section>

      {/* ═══ ABOUT SECTION ═══ */}
      <section id="about" style={{ background: 'var(--paper)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Profile Photo Placeholder */}
            <div
              style={{
                width: 160,
                height: 160,
                borderRadius: '50%',
                border: '4px solid var(--navy)',
                background: 'var(--paper-warm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 48,
                flexShrink: 0,
                boxShadow: 'var(--shadow)',
              }}
            >
              👨‍🏫
            </div>

            <div style={{ flex: 1, minWidth: 280 }}>
              <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, marginBottom: 16, color: 'var(--navy)' }}>
                About Me
              </h2>
              <p style={{ color: 'var(--ink-light)', lineHeight: 1.8, marginBottom: 14 }}>
                I am a <strong>Mechanical Engineering Lecturer</strong> at the National Highway Institute of Technology (NHIT), with a passion for making engineering education accessible, visual, and interactive. With a B.Tech from Asansol Engineering College (MAKAUT) and a Diploma from Nazrul Centenary Polytechnic (WBSCTE), I bring both academic depth and practical experience to the classroom.
              </p>
              <p style={{ color: 'var(--ink-light)', lineHeight: 1.8, marginBottom: 14 }}>
                My teaching philosophy centres on <em>making the invisible visible</em> — using hand-crafted diagrams, interactive SVG animations, and step-by-step worked examples to demystify complex engineering concepts. I believe every student deserves clear, well-structured notes that they can revisit anytime, anywhere.
              </p>
              <p style={{ color: 'var(--ink-light)', lineHeight: 1.8 }}>
                This website is my contribution to that mission: a <strong>free, open-access notes library</strong> covering the entire Diploma and B.Tech Mechanical Engineering syllabus, designed specifically for students of NHIT and beyond.
              </p>
            </div>
          </div>

          {/* Stat Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginTop: 40 }}>
            {[
              { num: '7+', label: 'Years Learning', icon: '🎓' },
              { num: '3+', label: 'Years Teaching', icon: '📖' },
              { num: '100+', label: 'Students Reached', icon: '👩‍🎓' },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: 'var(--paper-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '24px 20px',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow)',
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontSize: 32, fontWeight: 700, color: 'var(--accent)', fontFamily: 'Merriweather, serif' }}>
                  {s.num}
                </div>
                <div style={{ fontSize: 14, color: 'var(--ink-muted)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXPERIENCE TIMELINE ═══ */}
      <section id="experience" style={{ background: 'var(--paper-warm)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, marginBottom: 40, textAlign: 'center', color: 'var(--navy)' }}>
            Experience
          </h2>
          <div style={{ position: 'relative', paddingLeft: 30 }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: 8, top: 6, bottom: 6, width: 3, background: 'var(--navy)', borderRadius: 2 }} />

            {[
              { period: 'Present', role: 'Mechanical Lecturer', org: 'NHIT — National Highway Institute of Technology', desc: 'Teaching core mechanical engineering subjects to diploma and degree students' },
              { period: 'Previous', role: 'Mechanical Lecturer', org: 'Santiniketan Polytechnic', desc: 'Teaching mechanical engineering subjects' },
              { period: '2021', role: 'Inspection Engineer', org: 'Dhoot Transmission Private Limited', desc: '6 months industrial experience in quality inspection' },
              { period: '2018–2021', role: 'Private Tutor', org: '3 Years Tutoring', desc: 'School students in core subjects (Mathematics, Science)' },
            ].map((item, i) => (
              <div key={i} style={{ position: 'relative', marginBottom: 36, paddingLeft: 24 }}>
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: -26,
                    top: 6,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    border: '3px solid var(--paper-warm)',
                  }}
                />
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>
                  {item.period}
                </div>
                <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 17, color: 'var(--navy)', marginBottom: 4 }}>
                  {item.role}
                </h3>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink-light)', marginBottom: 6 }}>
                  {item.org}
                </div>
                <p style={{ fontSize: 14, color: 'var(--ink-muted)', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EDUCATION ═══ */}
      <section id="education" style={{ background: 'var(--paper)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, marginBottom: 32, textAlign: 'center', color: 'var(--navy)' }}>
            Education
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { degree: 'B.Tech Mechanical Engineering', inst: 'Asansol Engineering College (MAKAUT)', score: '', year: '2021–2024', icon: '🎓' },
              { degree: 'Diploma ME (Production)', inst: 'Nazrul Centenary Polytechnic (WBSCTE)', score: '', year: '2018–2021', icon: '🏭' },
              { degree: 'Higher Secondary (10+2)', inst: 'Asansol Collegiate School (WBCHSE)', score: '', year: '2018', icon: '🏫' },
              { degree: 'Matriculation', inst: 'D.A.V Public School (CBSE)', score: '', year: '2016', icon: '📚' },
            ].map((e) => (
              <div
                key={e.degree}
                style={{
                  background: 'var(--paper-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  boxShadow: 'var(--shadow)',
                }}
              >
                <div style={{ fontSize: 32, flexShrink: 0 }}>{e.icon}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 16, color: 'var(--navy)', marginBottom: 4 }}>
                    {e.degree}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--ink-light)', margin: 0 }}>
                    {e.inst}
                  </p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontWeight: 700, color: 'var(--accent)', fontSize: 16 }}>{e.score}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-muted)' }}>{e.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SKILLS & CERTIFICATIONS ═══ */}
      <section id="skills" style={{ background: 'var(--paper-warm)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, marginBottom: 32, textAlign: 'center', color: 'var(--navy)' }}>
            Skills & Certifications
          </h2>
          <div className="two-col">
            <div className="info-card">
              <h4>Core Subjects Taught</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Engineering Mechanics', 'Metrology & Measurement', 'Manufacturing Processes', 'Material Science', 'Fluid Mechanics', 'Thermodynamics'].map((s) => (
                  <li key={s} style={{ padding: '6px 0', borderBottom: '1px solid var(--border-light)', color: 'var(--ink-light)', fontSize: 14 }}>
                    ⚙️ {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="info-card">
              <h4>Certifications / Training</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Training at Durgapur Steel Plant (11 Days)',
                  'Diploma in IT Application — Youth',
                  'Intro to Machine Learning — Duke University',
                  'Work Smarter with MS Excel — Microsoft',
                ].map((c) => (
                  <li key={c} style={{ padding: '6px 0', borderBottom: '1px solid var(--border-light)', color: 'var(--ink-light)', fontSize: 14 }}>
                    🏅 {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROJECT ═══ */}
      <section id="project" style={{ background: 'var(--paper)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, marginBottom: 32, textAlign: 'center', color: 'var(--navy)' }}>
            Research Project
          </h2>
          <div
            style={{
              background: 'var(--paper-card)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '28px 32px',
              boxShadow: 'var(--shadow)',
            }}
          >
            <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 18, color: 'var(--navy)', marginBottom: 12 }}>
              Study of Effect of Different Process Parameters on Various Properties of Moulding Sand
            </h3>
            <p style={{ color: 'var(--ink-light)', lineHeight: 1.7, fontSize: 15 }}>
              A research project analyzing how process parameters (moisture content, grain fineness, clay content) affect the green strength, permeability, and hardness of moulding sand used in metal casting processes.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ ACHIEVEMENTS & INTERESTS ═══ */}
      <section id="interests" style={{ background: 'var(--paper-warm)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 28, marginBottom: 32, textAlign: 'center', color: 'var(--navy)' }}>
            Achievements & Interests
          </h2>
          <div className="two-col">
            <div className="info-card" style={{ textAlign: 'center', padding: 28 }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🏆</div>
              <h4 style={{ borderBottom: 'none', paddingBottom: 0 }}>Achievement</h4>
              <p style={{ fontSize: 15, marginTop: 8 }}>
                2nd place — Photography Competition
                <br />
                <em style={{ fontSize: 13, color: 'var(--ink-muted)' }}>The Institute of Engineers</em>
              </p>
            </div>
            <div className="info-card" style={{ textAlign: 'center', padding: 28 }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🎯</div>
              <h4 style={{ borderBottom: 'none', paddingBottom: 0 }}>Interests</h4>
              <p style={{ fontSize: 15, marginTop: 8 }}>
                📱 Mobile Photography
                <br />
                🏏 Playing & Watching Cricket
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      {/* ═══ CONTACT ═══ */}
      <section id="contact" style={{ background: 'var(--navy)', color: 'white', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: -100, right: -100, width: 300, height: 300, background: 'radial-gradient(circle, rgba(192,57,43,0.15) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -100, left: -100, width: 300, height: 300, background: 'radial-gradient(circle, rgba(52,152,219,0.1) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 36, marginBottom: 16, color: 'white' }}>
              Let's Connect
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>
              Whether you're a student looking for help or someone interested in collaboration, feel free to reach out.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40, alignItems: 'stretch' }}>
            
            {/* Contact Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: '📞', label: 'Call Me', value: '+91 8392060676', href: 'tel:+918392060676' },
                { icon: '✉️', label: 'Email Me', value: 'anubhab.nhit.me@gmail.com', href: 'mailto:anubhab.nhit.me@gmail.com' },
                { icon: '📍', label: 'Location', value: 'Asansol, Paschim Bardhaman, WB', href: 'https://maps.google.com/?q=Asansol,West+Bengal' },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    gap: 20,
                    alignItems: 'center',
                    padding: '24px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 16,
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ 
                    width: 54, 
                    height: 54, 
                    borderRadius: '50%', 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: 24,
                    flexShrink: 0
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6, fontWeight: 600 }}>
                      {c.label}
                    </div>
                    <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.target);
                const name = fd.get('name');
                const email = fd.get('email');
                const message = fd.get('message');
                window.location.href = `mailto:anubhab.nhit.me@gmail.com?subject=Message from ${name} (${email})&body=${encodeURIComponent(message)}`;
              }}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 20,
                background: 'rgba(255,255,255,0.02)',
                padding: '40px',
                borderRadius: 24,
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 24px 48px rgba(0,0,0,0.2)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 20 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 600, letterSpacing: 0.5 }}>NAME</label>
                  <input
                    name="name"
                    placeholder="John Doe"
                    required
                    style={{
                      padding: '16px 20px',
                      borderRadius: 12,
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: 'rgba(0,0,0,0.2)',
                      color: 'white',
                      fontSize: 15,
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      width: '100%',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 600, letterSpacing: 0.5 }}>EMAIL</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    style={{
                      padding: '16px 20px',
                      borderRadius: 12,
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: 'rgba(0,0,0,0.2)',
                      color: 'white',
                      fontSize: 15,
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      width: '100%',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 600, letterSpacing: 0.5 }}>MESSAGE</label>
                <textarea
                  name="message"
                  placeholder="How can I help you?"
                  rows={5}
                  required
                  style={{
                    padding: '16px 20px',
                    borderRadius: 12,
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(0,0,0,0.2)',
                    color: 'white',
                    fontSize: 15,
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s',
                    width: '100%',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              
              <button
                type="submit"
                style={{
                  padding: '18px 32px',
                  background: 'var(--accent)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: 16,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  marginTop: 12,
                  boxShadow: '0 8px 20px rgba(192,57,43,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 12,
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(192,57,43,0.4)';
                  e.currentTarget.style.background = '#d94130';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(192,57,43,0.3)';
                  e.currentTarget.style.background = 'var(--accent)';
                }}
              >
                Send Message <span style={{ fontSize: 18 }}>🚀</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer
        style={{
          background: '#0f1520',
          color: 'rgba(255,255,255,0.5)',
          textAlign: 'center',
          padding: '24px',
          fontSize: 13,
        }}
      >
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)' }}>
          © 2025 Anubhab Karmakar. All rights reserved.
        </p>
        <div style={{ marginTop: 8, display: 'flex', justifyContent: 'center', gap: 20 }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Portfolio</Link>
          <Link href="/library" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Notes Library</Link>
        </div>
        <p style={{ marginTop: 8, fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>
          Built with pride for students of NHIT
        </p>
      </footer>
    </>
  );
}
