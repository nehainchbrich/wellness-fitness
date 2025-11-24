import React from "react";
import Image from "next/image";
import styles from "../../styles/About.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
        {/* <Image src="/images/about.jpg" width={100} height={100}/> */}
      <div className={styles.heroContent}>
        <h1>About Our Wellness Journey</h1>
        <p>Empowering you to live a healthier, balanced, and peaceful life.</p>
      </div>
    </section>
  );
}