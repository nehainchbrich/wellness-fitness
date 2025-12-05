import Link from "next/link";
import { motion } from "framer-motion";
import { FaLeaf, FaDumbbell, FaBrain, FaMoon } from "react-icons/fa";
import styles from "../styles/Service.module.css";

export default function ServicesSection() {
  const services = [
    {
      title: "Nutrition Coaching",
      description: "Personalized meal plans and nutrition guidance to fuel your body.",
      icon: <FaLeaf />,
      colorClass: styles.green,
    },
    {
      title: "Fitness Programs",
      description: "Custom workout routines designed for your fitness level and goals.",
      icon: <FaDumbbell />,
      colorClass: styles.teal,
    },
    {
      title: "Mindfulness & Meditation",
      description: "Stress relief techniques and meditation practices for mental clarity.",
      icon: <FaBrain />,
      colorClass: styles.cyan,
    },
    {
      title: "Sleep Optimization",
      description: "Improve your sleep quality with science-backed strategies.",
      icon: <FaMoon />,
      colorClass: styles.blue,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Our Premium Services</h2>
          <p className={styles.subtitle}>
            Elevate your lifestyle with our comprehensive wellness solutions tailored just for you.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} className={styles.card} variants={itemVariants}>
              <div className={`${styles.iconWrapper} ${service.colorClass}`}>
                {service.icon}
              </div>

              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>

                <Link href="/services" className={styles.link}>
                  <span>Learn More</span>
                  <svg className={styles.arrow} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </div>

              <div className={styles.glow} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
