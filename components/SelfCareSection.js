import Link from "next/link";
import { motion } from "framer-motion";
import { FaSpa, FaBookReader, FaHeart, FaArrowRight } from "react-icons/fa";
import styles from "../styles/SelfCareSection.module.css";

export default function SelfCareSection() {
    const features = [
        {
            icon: <FaSpa />,
            title: "Relaxation Rituals",
            desc: "Create moments of peace with spa experiences, baths, and aromatherapy.",
        },
        {
            icon: <FaBookReader />,
            title: "Mindful Reflection",
            desc: "Journaling and meditation to process emotions and find clarity.",
        },
        {
            icon: <FaHeart />,
            title: "Self-Compassion",
            desc: "Treat yourself with kindness and prioritize your own well-being.",
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
                        Prioritize Self-Care
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Self-care is essential, not selfish. Discover practices that restore your energy and peace.
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
                            Self-Care Image
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

                        <Link href="/self-care" className={styles.button}>
                            Explore Self-Care <FaArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
