import React from "react";
import styles from "../../styles/Blog.module.css";
import Image from "next/image";
import Link from "next/link";

export default function BlogList() {

  const featuredBlog = {
    id: 1,
    title: "The Future of Wellness & Meditation",
    description: "Explore how the new era of wellness is shaping mental clarity...",
    img: "/images/our-mission.jpg",
  };

  const smallBlogs = [
    {
      id: 2,
      title: "How Yoga Helps Mind",
      description: "Short explanation of yoga benefits...",
      img: "/images/our-mission.jpg",
    },
    {
      id: 3,
      title: "Ayurveda for Modern Life",
      description: "Ancient science that still works today...",
      img: "/images/our-mission.jpg",
    },
    {
      id: 4,
      title: "Breathing Techniques",
      description: "Master the art of mindful breathing...",
      img: "/images/our-mission.jpg",
    },
    {
      id: 5,
      title: "Breathing Techniques",
      description: "Master the art of mindful breathing...",
      img: "/images/our-mission.jpg",
    },
    {
      id: 6,
      title: "Breathing Techniques",
      description: "Master the art of mindful breathing...",
      img: "/images/our-mission.jpg",
    },
  ];

  const gridBlogs = [
    {
      id: 5,
      title: "Daily Self Care Tips",
      img: "/images/our-mission.jpg",
    },
    {
      id: 6,
      title: "Best Foods for Immunity",
      img: "/images/our-mission.jpg",
    },
    {
      id: 7,
      title: "Morning Meditation Routine",
      img: "/images/our-mission.jpg",
    },
    
  ];

  return (
    <div className={styles.blogWrapper}>

      {/* --------------- Row 1 (Two Column) ---------------- */}
      <div className={styles.rowOne}>
        
        {/* Left: Big Featured Blog */}
        <div className={styles.featured}>
        <Link href={`/blog/${featuredBlog.id}`} className={styles.featured}>
          <Image
            src={featuredBlog.img}
            width={600}
            height={350}
            alt={featuredBlog.title}
            className={styles.featuredImg}
          />
          <h2>{featuredBlog.title}</h2>
          <p>{featuredBlog.description}</p>
          </Link>
        </div>

        {/* Right: Small Blog List */}
        <div className={styles.smallBlogsSection}>
          {smallBlogs.map((item) => (
            <Link className={styles.decorationNone} key={item.id} href={`/blog/${item.id}`}>
            <div key={item.id} className={styles.smallBlog}>
              <Image
                src={item.img}
                width={120}
                height={90}
                alt={item.title}
                className={styles.smallImg}
              />
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>

      </div>

      {/* --------------- Row 2 (3 Column Grid) ---------------- */}
      <h4>Popular Articles</h4>
      <div className={styles.rowTwo}>
        {gridBlogs.map((blog) => (
          <Link href={`/blog/${blog.id}`} className={styles.decorationNone} key={blog.id}>
          <div key={blog.id} className={styles.gridCard}>
            <Image
              src={blog.img}
              width={350}
              height={220}
              alt={blog.title}
              className={styles.gridImg}
            />
            <h3>{blog.title}</h3>
          </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
}
