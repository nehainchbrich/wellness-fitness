import React from "react";
import Image from "next/image";
import styles from "../../styles/About.module.css";

export default function MissionSection() {
  return (
    <section className={styles.missionSection}>
      <div className={styles.missionContent}>
        <div className={styles.missionText}>
          <h2>Our Mission</h2>
          <p>
            To inspire mindful living by connecting ancient wellness wisdom with 
            modern science — nurturing your mind, body, and soul to rediscover inner harmony.
          </p>
          <div className={styles.missionQuote}>
            “True wellness begins when you align your body with your purpose.”
          </div>
        </div>

        <div className={styles.missionVisual}>
          <div className={styles.circleBlur}></div>
          <Image
            src="/images/our-mission.jpg"
            alt="Wellness Mission"
            width={500}
            height={500}
            className={styles.missionImage}
          />
        </div>
      </div>
    </section>
  );
}
