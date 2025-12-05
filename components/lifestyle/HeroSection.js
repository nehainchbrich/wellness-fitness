import { FaArrowRight } from "react-icons/fa";
import styles from "../../styles/LifestyleSection.module.css";

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBackground} />
            <div className={styles.heroOverlay} />

            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    Live Your Most
                    <span className={styles.titleGradient}> Extraordinary Life</span>
                </h1>

                <p className={styles.heroSubtitle}>
                    Master the art of intentional living. Cultivate daily habits that transform your body,
                    elevate your mind, and nurture your soul. This is wellness redefined.
                </p>

                <div className={styles.heroCTA}>
                    <button className={styles.primaryBtn}>
                        Start Your Transformation <FaArrowRight />
                    </button>
                    <button className={styles.secondaryBtn}>
                        Explore Habits
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <div className={styles.scrollMouse}>
                    <div className={styles.scrollWheel} />
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    );
}
