import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
  const [isBreathing, setIsBreathing] = useState(false);
  const [instruction, setInstruction] = useState("Click to Breathe");
  const cardRef = useRef(null);

  // Breathing Cycle Logic
  useEffect(() => {
    let interval;
    if (isBreathing) {
      let phase = 0; // 0: Inhale, 1: Hold, 2: Exhale, 3: Hold
      const runCycle = () => {
        switch (phase) {
          case 0: setInstruction("Inhale..."); phase = 1; break;
          case 1: setInstruction("Hold..."); phase = 2; break;
          case 2: setInstruction("Exhale..."); phase = 3; break;
          case 3: setInstruction("Hold..."); phase = 0; break;
        }
      };
      runCycle(); // Start immediately
      interval = setInterval(runCycle, 4000); // Change every 4 seconds (simplified 4-4-4-4 box breathing)
    } else {
      setInstruction("Click to Breathe");
    }
    return () => clearInterval(interval);
  }, [isBreathing]);

  // 3D Tilt Effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    cardRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <section className={styles.section}>
      {/* Animated Background */}
      <div className={styles.background}>
        <div className={`${styles.blob} ${styles.blob1}`}></div>
        <div className={`${styles.blob} ${styles.blob2}`}></div>
        <div className={`${styles.blob} ${styles.blob3}`}></div>
      </div>

      <div className={styles.container}>
        {/* Content Side */}
        <div className={styles.content}>
          <span className={styles.badge}>New Wellness Era</span>
          <h1 className={styles.title}>
            Elevate Your
            <span className={styles.gradientText}>Mind, Body & Soul</span>
          </h1>
          <p className={styles.subtitle}>
            Experience a holistic approach to wellness. Join our community and transform your daily routine into a ritual of self-care and growth.
          </p>
          <div className={styles.buttons}>
            <Link href="/get-started" className={styles.primaryBtn}>
              Start Journey
            </Link>
            <Link href="/about" className={styles.secondaryBtn}>
              Learn More
            </Link>
          </div>
        </div>

        {/* Interactive Side - The Portal */}
        <div className={styles.portalWrapper}>
          <div
            className={`${styles.portalCard} ${isBreathing ? styles.breathing : ''}`}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.portalRing}></div>
            <div
              className={styles.breatheCircle}
              onClick={() => setIsBreathing(!isBreathing)}
            >
              <span className={styles.breatheText}>
                {isBreathing ? "Stop" : "Start"}
              </span>
            </div>
            <div className={styles.instruction}>
              {instruction}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
