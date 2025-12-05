import { FaFire, FaMoon, FaRunning, FaHeart } from "react-icons/fa";
import styles from "../../styles/LifestyleSection.module.css";

export default function StatsSection() {
    const lifestyleStats = [
        { number: "95", label: "Energy Increase", suffix: "%", icon: <FaFire />, color: "#FF6B35" },
        { number: "87", label: "Better Sleep Quality", suffix: "%", icon: <FaMoon />, color: "#4e54c8" },
        { number: "12K", label: "Steps Daily Average", suffix: "+", icon: <FaRunning />, color: "#56ab2f" },
        { number: "100", label: "Self-Love Priority", suffix: "%", icon: <FaHeart />, color: "#f5576c" },
    ];

    return (
        <section className={styles.statsSection}>
            <div className={styles.statsContainer}>
                {lifestyleStats.map((stat, index) => (
                    <div
                        key={index}
                        className={styles.statCard}
                    >
                        <div className={styles.statIcon} style={{ color: stat.color }}>
                            {stat.icon}
                        </div>
                        <div className={styles.statNumber}>
                            {stat.number}{stat.suffix}
                        </div>
                        <div className={styles.statLabel}>{stat.label}</div>
                        <div className={styles.statProgress} style={{ background: stat.color }} />
                    </div>
                ))}
            </div>
        </section>
    );
}
