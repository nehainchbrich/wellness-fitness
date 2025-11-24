import React from "react";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";

export default function Sidebar() {
  const categories = ["Mindfulness", "Yoga", "Nutrition", "Lifestyle"];
  const recentPosts = [
    "Simple Habits for Daily Balance",
    "Guided Meditation for Sleep",
    "How to Build a Self-Care Routine",
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.widget}>
        <h3>Search</h3>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
      </div>

      <div className={styles.widget}>
        <h3>Categories</h3>
        <ul>
          {categories.map((cat, i) => (
            <li key={i}>
              <Link href="#">{cat}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.widget}>
        <h3>Recent Posts</h3>
        <ul>
          {recentPosts.map((post, i) => (
            <li key={i}>
              <Link href="#">{post}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
