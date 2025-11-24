import Link from 'next/link';
import styles from '../styles/BlogHeroSection.module.css';
import Image from 'next/image';

export default function BlogHeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.gridPattern}>
        <Image src="/images/about.jpg" alt="Hero Image"
          fill={false} 
          width={1000}
          height={600}></Image>
      </div>

      <div className={styles.container}>
        <div className={styles.inner}>
          
          <h1 className={styles.title}>
            Your Journey to Better Wellness
          </h1>
          <div className={styles.searchWrapper}>
  <input
    type="text"
    placeholder="Search blogs..."
    className={styles.searchInput}
  />
  <button className={styles.searchBtn}>Search</button>
</div>
       
        </div>
      
      </div>
    </section>
  );
}
