import React from "react";
import Image from "next/image";
import styles from "../../styles/About.module.css";

const team = [
  {
    name: "Dr. Anjali Mehra",
    role: "Wellness Coach",
    image: "/images/circle-icon.webp",
    desc: "Dr. Anjali blends ancient healing wisdom with modern science to help individuals find harmony and holistic health.",
  },
  {
    name: "Rohan Patel",
    role: "Nutrition Expert",
    image: "/images/circle-icon.webp",
    desc: "Rohan crafts personalized nutrition plans that empower people to thrive with energy and mindfulness.",
  },
  {
    name: "Sia Sharma",
    role: "Yoga Instructor",
    image: "/images/circle-icon.webp",
    desc: "Sia believes in balance through movement and breath, helping you discover peace through yoga.",
  },
];

export default function TeamSection() {
  return (
    <section className={styles.creativeTeamSection}>
      <h2 className={styles.creativeTeamTitle}>Our Wellness Experts</h2>
      <p className={styles.creativeTeamSubtitle}>
        Meet the minds and hearts guiding your transformation journey.
      </p>

      <div className={styles.creativeTeamContainer}>
        {team.map((member, index) => (
          <div
            key={index}
            className={`${styles.creativeTeamCard} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.creativeImageWrapper}>
              <Image
                src={member.image}
                alt={member.name}
                width={260}
                height={260}
                className={styles.creativeImage}
              />
            </div>
            <div className={styles.creativeInfo}>
              <h3>{member.name}</h3>
              <span>{member.role}</span>
              <p>{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
