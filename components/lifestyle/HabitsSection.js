import { useState } from "react";
import { FaSun, FaWater, FaRunning, FaBrain, FaHeart, FaMoon, FaLeaf, FaArrowRight } from "react-icons/fa";
import styles from "../../styles/LifestyleSection.module.css";

export default function HabitsSection() {
    const [activeHabit, setActiveHabit] = useState(0);

    const coreHabits = [
        {
            icon: <FaSun />,
            title: "Morning Power Hour",
            desc: "Transform your mornings with intention. Wake early, hydrate, meditate, and move your body to unlock peak performance.",
            gradient: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
            color: "#FFD700",
            stats: "6:00 AM Start"
        },
        {
            icon: <FaWater />,
            title: "Hydration Mastery",
            desc: "Fuel your body with pure hydration. 8+ glasses daily for optimal energy, mental clarity, and radiant skin.",
            gradient: "linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)",
            color: "#00B4DB",
            stats: "2L+ Daily"
        },
        {
            icon: <FaRunning />,
            title: "Movement Medicine",
            desc: "Your body craves movement. From yoga to HIIT, dancing to hiking—find your flow and make it daily.",
            gradient: "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)",
            color: "#56ab2f",
            stats: "30+ Min/Day"
        },
        {
            icon: <FaBrain />,
            title: "Mental Mastery",
            desc: "Feed your mind daily. Read, learn, meditate, journal. Growth happens when you challenge your brain.",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "#667eea",
            stats: "20+ Min Focus"
        },
        {
            icon: <FaHeart />,
            title: "Self-Care Rituals",
            desc: "Prioritize yourself without guilt. Skincare, relaxation, hobbies—these aren't luxuries, they're necessities.",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            color: "#f093fb",
            stats: "Daily Practice"
        },
        {
            icon: <FaMoon />,
            title: "Sleep Sanctuary",
            desc: "Quality sleep is your superpower. Create a wind-down ritual for 7-9 hours of deep, restorative rest.",
            gradient: "linear-gradient(135deg, #4e54c8 0%, #8f94fb 100%)",
            color: "#4e54c8",
            stats: "7-9 Hours"
        },
    ];

    return (
        <section className={styles.habitsSection}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionBadge}>
                    <FaLeaf /> THE FOUNDATIONS
                </div>
                <h2 className={styles.sectionTitle}>
                    6 Pillars of <span className={styles.highlight}>Elite</span> Living
                </h2>
                <p className={styles.sectionDesc}>
                    These aren't just habits—they're the building blocks of an exceptional life.
                    Master these pillars and watch every area of your life transform.
                </p>
            </div>

            <div className={styles.habitsGrid}>
                {coreHabits.map((habit, index) => (
                    <div
                        key={index}
                        className={styles.habitCard}
                        onMouseEnter={() => setActiveHabit(index)}
                    >
                        <div className={styles.habitGlow} style={{ background: habit.gradient }} />

                        <div className={styles.habitHeader}>
                            <div
                                className={styles.habitIcon}
                                style={{ background: habit.gradient }}
                            >
                                {habit.icon}
                            </div>
                            <div className={styles.habitStats}>{habit.stats}</div>
                        </div>

                        <h3 className={styles.habitTitle}>{habit.title}</h3>
                        <p className={styles.habitDesc}>{habit.desc}</p>

                        <div className={styles.habitFooter}>
                            <span className={styles.learnMore}>
                                Learn More <FaArrowRight />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
