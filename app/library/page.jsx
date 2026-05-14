'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import SiteFooter from '@/components/SiteFooter';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function LibraryHome() {
  return (
    <>
      <section className="library-hero crosshatch-bg">
        <motion.div
          animate="visible"
          className="library-hero-inner"
          initial="hidden"
          variants={stagger}
        >
          <motion.div className="library-hero-mark" variants={fadeUp} aria-hidden="true">
            AK
          </motion.div>
          <motion.h1 variants={fadeUp}>AK Notes Library</motion.h1>
          <motion.p variants={fadeUp}>
            Free, interactive mechanical engineering notes by <strong>Anubhab Karmakar</strong>,
            Lecturer at NHIT.
          </motion.p>
        </motion.div>
      </section>

      <main className="library-programs">
        <motion.div
          animate="visible"
          className="program-choice-grid"
          initial="hidden"
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <Link className="program-choice-card diploma" href="/library/diploma">
              <span className="program-choice-icon" aria-hidden="true">D</span>
              <h2>Diploma Mechanical Engineering</h2>
              <p>WBSCTVESD syllabus across all 6 semesters, with full Engineering Mechanics modules.</p>
              <strong>Open 3-year path</strong>
            </Link>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link className="program-choice-card btech" href="/library/btech">
              <span className="program-choice-icon" aria-hidden="true">B</span>
              <h2>B.Tech Mechanical Engineering</h2>
              <p>MAKAUT 8-semester mechanical subject map across the complete 4-year programme.</p>
              <strong>Open 4-year path</strong>
            </Link>
          </motion.div>
        </motion.div>
      </main>

      <SiteFooter />
    </>
  );
}
