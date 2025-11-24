import React from "react";
import BlogList from "../../components/blog/BlogList";
import Sidebar from "../../components/blog/Sidebar";
import styles from "../../styles/Blog.module.css";
import BlogHeroSection from "../../components/BlogHeroSection";

export default function BlogPage() {
  return (
    <>
    <BlogHeroSection/>
    <main className={`${styles.blogContainer} container`}>
      <div className={`${styles.mainContent} row`}>
        <div className="col-md-12">
        <BlogList />
        </div>
       
      </div>
    </main>
    </>
  );
}
