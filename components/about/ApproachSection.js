import React from "react";
import styles from "../../styles/About.module.css";
import Image from "next/image";

export default function ApproachSection() {
  const items = [
    {
      icon: "/images/yoga-icon.png",
      title: "Yoga & Mindfulness",
      text: "Cultivate balance through mindful breathing, yoga, and meditation practices.",
    },
    {
      icon: "/images/nutrition-icon.jpg",
      title: "Nutrition & Healing",
      text: "Restore your natural energy with nourishing, holistic nutrition guidance.",
    },
    {
      icon: "/images/growth-icon.png",
      title: "Personal Growth",
      text: "Empower your mind and body to reach their highest potential with clarity.",
    },
  ];

  return (
    <section className={styles.approach}>
      <div className={styles.approachInner}>
        <h2 className={styles.approachTitle}>Our Approach</h2>
        <p className={styles.approachText}>
          We blend timeless wellness wisdom with modern science — creating a
          personalized path toward harmony and holistic well-being.
        </p>

        <div className={styles.approachGrid}>
          {items.map((item, index) => (
            <div key={index} className={styles.approachCard}>
              <div className={styles.iconWrap}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className={styles.icon}
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
