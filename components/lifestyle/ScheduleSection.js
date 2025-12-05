import { FaClock } from "react-icons/fa";
import styles from "../../styles/LifestyleSection.module.css";

export default function ScheduleSection() {
    const dailySchedule = [
        { time: "5:30", activity: "Rise & Shine", icon: "🌅", category: "morning" },
        { time: "6:00", activity: "Meditation & Gratitude", icon: "🧘‍♀️", category: "morning" },
        { time: "7:00", activity: "Nourishing Breakfast", icon: "🥑", category: "morning" },
        { time: "8:00", activity: "Deep Work Session", icon: "💼", category: "work" },
        { time: "12:00", activity: "Mindful Lunch Break", icon: "🥗", category: "work" },
        { time: "15:00", activity: "Movement & Fresh Air", icon: "🚶‍♀️", category: "wellness" },
        { time: "18:00", activity: "Strength Training", icon: "🏋️‍♀️", category: "wellness" },
        { time: "19:30", activity: "Wholesome Dinner", icon: "🍱", category: "evening" },
        { time: "21:00", activity: "Wind Down Ritual", icon: "📖", category: "evening" },
        { time: "22:00", activity: "Restorative Sleep", icon: "😴", category: "evening" },
    ];

    return (
        <section className={styles.scheduleSection}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionBadge}>
                    <FaClock /> YOUR PERFECT DAY
                </div>
                <h2 className={styles.sectionTitle}>
                    A Day in the Life of <span className={styles.highlight}>Excellence</span>
                </h2>
                <p className={styles.sectionDesc}>
                    Discover how intentional structure creates freedom. Here's a blueprint for an optimized day.
                </p>
            </div>

            <div className={styles.scheduleTimeline}>
                {dailySchedule.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.scheduleItem} ${styles[item.category]}`}
                    >
                        <div className={styles.scheduleTime}>{item.time}</div>
                        <div className={styles.scheduleIcon}>{item.icon}</div>
                        <div className={styles.scheduleActivity}>{item.activity}</div>
                        <div className={styles.scheduleLine} />
                    </div>
                ))}
            </div>
        </section>
    );
}
