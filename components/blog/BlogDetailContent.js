import React from "react";
import Image from "next/image";
import styles from "../../styles/BlogDetail.module.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function BlogDetailContent({ blog }) {
  return (
    <div className={styles.content}>
      {/* Hero Image */}
      <div className={styles.hero}>
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1>{blog.title}</h1>
          <p className={styles.subtitle}>{blog.description}</p>
          <p className={styles.meta}>
            By <span>{blog.author}</span> • {blog.date}
          </p>
        </div>
      </div>

      {/* Blog Body */}
      <div className={styles.body}>
      <div
  className={styles.text}
  dangerouslySetInnerHTML={{
    __html: (blog.content || "")
      .replace(/### (.*?)\n/g, "<h3>$1</h3>")
      .replace(/\n\n/g, "<p></p>"),
  }}
/>
<p>{blog.description}</p>
 {/* Social Share Icons */}
 <div className={styles.shareSection}>
          <h4>Share this article</h4>
          <div className={styles.shareIcons}>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.href : ""
              )}`}
              target="_blank"
            >
              <FaFacebookF />
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.href : ""
              )}&text=${blog.title}`}
              target="_blank"
            >
              <FaTwitter />
            </a>

            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.href : ""
              )}&title=${blog.title}`}
              target="_blank"
            >
              <FaLinkedinIn />
            </a>

            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                blog.title + " - " + (typeof window !== "undefined" ? window.location.href : "")
              )}`}
              target="_blank"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
