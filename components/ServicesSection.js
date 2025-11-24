import Link from "next/link";
import styles from "../styles/Service.module.css";

export default function ServicesSection() {
  const services = [
    {
      title: "Nutrition Coaching",
      description: "Personalized meal plans and nutrition guidance to fuel your body.",
      color: styles.green,
    },
    {
      title: "Fitness Programs",
      description: "Custom workout routines designed for your fitness level and goals.",
      color: styles.teal,
    },
    {
      title: "Mindfulness & Meditation",
      description: "Stress relief techniques and meditation practices for mental clarity.",
      color: styles.cyan,
    },
    {
      title: "Sleep Optimization",
      description: "Improve your sleep quality with science-backed strategies.",
      color: styles.blue,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            Explore our comprehensive range of wellness services
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={`${styles.bgCircle} ${service.color}`}></div>

              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>

                <Link href="/services" className={styles.link}>
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
