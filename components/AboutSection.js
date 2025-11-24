import { useEffect, useState } from 'react';
import styles from '../styles/AboutSection.module.css';

const aboutContent =
  'At Wellness, we blend science-backed strategies with compassionate coaching to create personalized pathways toward a healthier, more balanced life. Our multidisciplinary team guides you through mindful movement, nourishing nutrition, and restorative rituals so you can thrive in every season of life.';

const stats = [
  { label: 'Holistic Programs', value: '25+' },
  { label: 'Certified Coaches', value: '18' },
  { label: 'Community Members', value: '12K+' },
  { label: 'Success Stories', value: '4.9★' },
];

export default function AboutSection() {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(aboutContent.slice(0, index + 1));
      index += 1;
      if (index === aboutContent.length) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingGroup}>
          <p className={styles.eyebrow}>About Us</p>
          <h2 className={styles.heading}>We Champion Whole-Person Wellness</h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.heroImage}
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
              alt="People practicing wellness activities outdoors"
              loading="lazy"
            />
            <div className={styles.imageOverlay} aria-hidden="true" />
            <div className={styles.imageBadge}>
              <p className={styles.badgeEyebrow}>10+ Years</p>
              <p className={styles.badgeTitle}>Transforming Wellness Journeys</p>
            </div>
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.storyHeading}>
              <span className={styles.logoBadge}>W</span>
              <div className={styles.storyMeta}>
                <span className={styles.storyEyebrow}>Our Story</span>
                <p className={styles.storyTitle}>Wellness Collective</p>
              </div>
            </div>

            <p className={styles.typingText}>
              {displayedText}
              <span className={styles.caret} />
            </p>

            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statCard}>
                  <p className={styles.statValue}>{stat.value}</p>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
