import styles from "../styles/Features.module.css";

export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Holistic Health",
      description:
        "Comprehensive wellness programs that address your physical, mental, and emotional well-being.",
    },
    {
      icon: (
        <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Personalized Plans",
      description:
        "Tailored programs designed specifically for your unique needs and wellness goals.",
    },
    {
      icon: (
        <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Expert Guidance",
      description:
        "Access to certified wellness coaches and nutritionists to guide your journey.",
    },
    {
      icon: (
        <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Flexible Schedule",
      description:
        "Wellness programs that fit into your busy lifestyle, available 24/7.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Choose Wellness?</h2>
          <p className={styles.subtitle}>
            Comprehensive wellness solutions designed to help you achieve your health goals
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{feature.icon}</div>

              <h3 className={styles.cardTitle}>{feature.title}</h3>

              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
