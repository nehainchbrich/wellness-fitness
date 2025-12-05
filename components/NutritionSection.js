import Link from "next/link";
import { motion } from "framer-motion";
import { FaAppleAlt, FaBalanceScale, FaHeart, FaArrowRight } from "react-icons/fa";
import styles from "../styles/NutritionSection.module.css";

export default function NutritionSection() {
    const features = [
        {
            icon: <FaAppleAlt />,
            title: "Whole Foods",
            desc: "Focus on natural, unprocessed foods that nourish your body.",
        },
        {
            icon: <FaBalanceScale />,
            title: "Balanced Diet",
            desc: "Get the right mix of nutrients to fuel your daily activities.",
        },
        {
            icon: <FaHeart />,
            title: "Mindful Choices",
            desc: "Build a positive relationship with food and enjoy every meal.",
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Fuel Your Body Right
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Discover wholesome nutrition that energizes and transforms your health.
                    </motion.p>
                </div>

                <div className={styles.content}>
                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.imagePlaceholder}>
                            Nutrition Image
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.textContent}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <ul className={styles.featureList}>
                            {features.map((feature, index) => (
                                <li key={index} className={styles.featureItem}>
                                    <div className={styles.iconBox}>{feature.icon}</div>
                                    <div>
                                        <span className={styles.featureTitle}>{feature.title}</span>
                                        <p className={styles.featureDesc}>{feature.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <Link href="/nutrition" className={styles.button}>
                            Explore Nutrition <FaArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}