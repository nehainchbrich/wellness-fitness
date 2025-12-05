import { FaArrowRight } from "react-icons/fa";
import styles from "../../styles/LifestyleSection.module.css";

export default function CTASection() {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>
                        Ready to Transform Your Lifestyle?
                    </h2>
                    <p className={styles.ctaDesc}>
                        Join thousands who've already elevated their daily routines and unlocked their full potential.
                    </p>
                    <button className={styles.ctaButton}>
                        Begin Your Journey Today <FaArrowRight />
                    </button>
                </div>
                <div className={styles.ctaVisual}>
                    <div className={styles.ctaCircle} />
                </div>
            </div>
        </section>
    );
}
