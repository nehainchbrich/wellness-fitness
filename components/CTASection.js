import Link from 'next/link';
import styles from '../styles/CTA.module.css';

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>
            Ready to Start Your Wellness Journey?
          </h2>

          <p className={styles.subtitle}>
            Join thousands of people who have transformed their lives with our wellness programs.
          </p>

          <Link href="/get-started" className={styles.ctaButton}>
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
}
