import Link from "next/link";
import { motion } from "framer-motion";
import { FaLeaf, FaRunning, FaMoon, FaArrowRight } from "react-icons/fa";
import styles from "../styles/LifestyleSection.module.css";

export default function LifestyleSection() {
    const features = [
        {
            icon: <FaLeaf />,
            title: "Mindful Living",
            desc: "Incorporate mindfulness into your daily routine to reduce stress and enhance clarity.",
        },
        {
            icon: <FaRunning />,
            title: "Active Movement",
            desc: "Find joy in movement with exercises that suit your body and energy levels.",
        },
        {
            icon: <FaMoon />,
            title: "Rest & Recovery",
            desc: "Prioritize sleep and relaxation to recharge your body and mind effectively.",
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
                        Embrace a Wellness Lifestyle
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Wellness is more than just a practice; it's a way of life. Discover habits that nurture you.
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
                            Lifestyle Image
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

                        <Link href="/lifestyle" className={styles.button}>
                            Explore Lifestyle <FaArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
