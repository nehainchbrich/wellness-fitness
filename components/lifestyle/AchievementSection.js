import { FaChartLine } from "react-icons/fa";
import styles from "../../styles/LifestyleSection.module.css";

export default function AchievementSection() {
    const achievements = [
        { label: "Consistency Streak", value: 90, max: 100, color: "#56ab2f" },
        { label: "Wellness Score", value: 85, max: 100, color: "#667eea" },
        { label: "Daily Goals Met", value: 95, max: 100, color: "#FFD700" },
        { label: "Energy Levels", value: 88, max: 100, color: "#FF6B35" },
    ];

    return (
        <section className={styles.achievementSection}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionBadge}>
                    <FaChartLine /> TRACK YOUR PROGRESS
                </div>
                <h2 className={styles.sectionTitle}>
                    Your Wellness <span className={styles.highlight}>Dashboard</span>
                </h2>
            </div>

            <div className={styles.achievementGrid}>
                {achievements.map((achievement, index) => (
                    <div
                        key={index}
                        className={styles.achievementCard}
                    >
                        <div className={styles.achievementLabel}>{achievement.label}</div>
                        <div className={styles.achievementValue}>{achievement.value}%</div>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressFill}
                                style={{
                                    background: achievement.color,
                                    width: `${achievement.value}%`
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}