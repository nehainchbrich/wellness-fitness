import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
  const heroRef = useRef(null);
  const [dimBackground, setDimBackground] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setDimBackground(!entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={`fixedImg ${dimBackground ? 'fixedImgDim' : ''}`} aria-hidden="true" />
      <section ref={heroRef} className={styles.section}>
        <div className={styles.gridPattern}></div>

        <div className={styles.container}>
          <div className={styles.inner}>
            <h1 className={styles.title}>
              Your Journey to
              <span className={styles.gradientText}> Better Wellness</span>
            </h1>

            <p className={styles.subtitle}>
              Discover personalized programs designed to nurture your mind, body, and soul.
              Start your wellness transformation today.
            </p>

            <div className={styles.buttons}>
              <Link href="/get-started" className={styles.primaryBtn}>
                Get Started
              </Link>

              <Link href="/about" className={styles.secondaryBtn}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
