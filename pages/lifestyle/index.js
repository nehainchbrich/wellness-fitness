import Head from "next/head";
import styles from "../../styles/LifestyleSection.module.css";
import HeroSection from "../../components/lifestyle/HeroSection";
import StatsSection from "../../components/lifestyle/StatsSection";
import HabitsSection from "../../components/lifestyle/HabitsSection";
import ScheduleSection from "../../components/lifestyle/ScheduleSection";
import AchievementSection from "../../components/lifestyle/AchievementSection";
import TestimonialsSection from "../../components/lifestyle/TestimonialsSection";
import CTASection from "../../components/lifestyle/CTASection";

export default function Lifestyle() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lifestyle Excellence | Wellness Retreat</title>
                <meta name="description" content="Design a lifestyle that elevates every aspect of your wellbeing. Premium habits for extraordinary living." />
            </Head>

            <HeroSection />
            <StatsSection />
            <HabitsSection />
            <ScheduleSection />
            <AchievementSection />
            <TestimonialsSection />
            <CTASection />
        </div>
    );
}

// Enable full layout control for professional design
Lifestyle.useOwnLayout = true;
