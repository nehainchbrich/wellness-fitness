import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaSpa, FaBookReader, FaMobileAlt, FaPalette, FaMusic, FaCheckCircle } from "react-icons/fa";
import styles from "../../styles/SelfCare.module.css";

export default function SelfCare() {
    const practices = [
        {
            icon: <FaSpa />,
            title: "Spa Rituals",
            desc: "Transform your bathroom into a sanctuary. Indulge in warm baths, clay masks, and the soothing scent of lavender.",
        },
        {
            icon: <FaBookReader />,
            title: "Mindful Journaling",
            desc: "Unload your thoughts onto paper. Reflect on gratitude, track your moods, and find clarity in the written word.",
        },
        {
            icon: <FaMobileAlt />,
            title: "Digital Detox",
            desc: "Unplug to recharge. Set boundaries with technology to reclaim your time and mental space.",
        },
        {
            icon: <FaPalette />,
            title: "Creative Flow",
            desc: "Engage in art, gardening, or cooking. Let creativity be your meditation and source of joy.",
        },
        {
            icon: <FaMusic />,
            title: "Sound Healing",
            desc: "Immerse yourself in calming frequencies. Use binaural beats or nature sounds to reset your nervous system.",
        },
        {
            icon: <FaCheckCircle />,
            title: "Boundary Setting",
            desc: "The ultimate act of self-care. Learn to say no to what drains you and yes to what nourishes you.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Self-Care Sanctuary | Wellness Website</title>
                <meta name="description" content="Prioritize self-care and nurture your well-being with our curated practices." />
            </Head>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className={styles.heroLabel}>Rest & Restore</span>
                    <h1 className={styles.title}>
                        The Art of <span className={styles.titleHighlight}>Self-Care</span>
                    </h1>
                    <p className={styles.subtitle}>
                        In a world that demands your constant attention, reclaiming your energy is a revolutionary act.
                        Discover practices that nourish your soul.
                    </p>
                </motion.div>
            </section>

            {/* Practices Grid */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Essential Practices</h2>
                    <p className={styles.sectionDesc}>
                        Curated rituals to help you find balance, reduce stress, and cultivate a deeper connection with yourself.
                    </p>
                </div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {practices.map((practice, index) => (
                        <motion.div key={index} className={styles.card} variants={itemVariants}>
                            <div className={styles.iconBox}>{practice.icon}</div>
                            <h3 className={styles.cardTitle}>{practice.title}</h3>
                            <p className={styles.cardText}>{practice.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Featured Routine Section */}
            <section className={styles.section}>
                <div className={styles.splitSection}>
                    <motion.div
                        className={styles.splitContent}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.routineBadge}>Weekly Ritual</span>
                        <h3>The Sunday Reset</h3>
                        <p>
                            Prepare for the week ahead with intention. This simple Sunday routine is designed to clear your mind
                            and reset your energy, ensuring you start Monday feeling grounded and inspired.
                        </p>
                        <ul className={styles.routineList}>
                            <li className={styles.routineItem}>
                                <FaCheckCircle className={styles.checkIcon} />
                                <span>Morning gentle yoga flow (20 mins)</span>
                            </li>
                            <li className={styles.routineItem}>
                                <FaCheckCircle className={styles.checkIcon} />
                                <span>Nourishing brunch with whole foods</span>
                            </li>
                            <li className={styles.routineItem}>
                                <FaCheckCircle className={styles.checkIcon} />
                                <span>Afternoon digital detox & nature walk</span>
                            </li>
                            <li className={styles.routineItem}>
                                <FaCheckCircle className={styles.checkIcon} />
                                <span>Evening bath with epsom salts</span>
                            </li>
                            <li className={styles.routineItem}>
                                <FaCheckCircle className={styles.checkIcon} />
                                <span>Plan goals & intentions for the week</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className={styles.splitImage}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Image
                            src="/images/gallery-selfcare.png"
                            alt="Woman enjoying a self-care moment"
                            layout="fill"
                            objectFit="cover"
                            className={styles.splitImageInner}
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
