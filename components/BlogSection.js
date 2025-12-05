import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/BlogSection.module.css';

const blogs = [
    {
        id: 1,
        title: "The Science of Sleep: Why Rest is Your Best Medicine",
        excerpt: "Discover how quality sleep impacts your immune system, mental clarity, and overall longevity. We dive deep into the circadian rhythms and provide actionable tips for better rest.",
        category: "Health",
        date: "Oct 12, 2023",
        author: "Dr. Sarah Miller",
        image: "/images/gallery-meditation.png",
        slug: "science-of-sleep"
    },
    {
        id: 2,
        title: "5 Morning Rituals for a Productive Day",
        excerpt: "Transform your mornings with these simple yet effective habits that set the tone for success. From hydration to mindfulness, learn how to start your day right.",
        category: "Lifestyle",
        date: "Oct 15, 2023",
        author: "James Wilson",
        image: "/images/gallery-morning-yoga.png",
        slug: "morning-rituals"
    },
    {
        id: 3,
        title: "Mindful Eating: A Guide to Better Nutrition",
        excerpt: "Learn to listen to your body and build a healthier relationship with food through mindfulness. It's not just about what you eat, but how you eat.",
        category: "Nutrition",
        date: "Oct 20, 2023",
        author: "Emily Chen",
        image: "/images/gallery-nutrition.png",
        slug: "mindful-eating"
    },
    {
        id: 4,
        title: "Digital Detox: Reclaiming Your Mental Space",
        excerpt: "In a hyper-connected world, taking time to unplug is essential for mental well-being. Here are practical strategies to reduce screen time.",
        category: "Mental Health",
        date: "Oct 25, 2023",
        author: "Alex Rivera",
        image: "/images/gallery-selfcare.png",
        slug: "digital-detox"
    }
];

export default function BlogSection() {
    const [activeBlog, setActiveBlog] = useState(blogs[0]);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Latest Insights</h2>
                    <p className={styles.subtitle}>
                        Explore expert articles, tips, and stories to inspire your wellness journey.
                    </p>
                </div>

                <div className={styles.splitLayout}>
                    {/* List Side */}
                    <div className={styles.blogList}>
                        {blogs.map((blog) => (
                            <div
                                key={blog.id}
                                className={`${styles.listItem} ${activeBlog.id === blog.id ? styles.activeItem : ''}`}
                                onClick={() => setActiveBlog(blog)}
                            >
                                <div className={styles.listImage}>
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        width={80}
                                        height={80}
                                        objectFit="cover"
                                    />
                                </div>
                                <div className={styles.listContent}>
                                    <span className={styles.listCategory}>{blog.category}</span>
                                    <h3 className={styles.listTitle}>{blog.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Detail Side */}
                    <div className={styles.featuredBlog} key={activeBlog.id}>
                        <div className={styles.featuredImage}>
                            <Image
                                src={activeBlog.image}
                                alt={activeBlog.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className={styles.featuredContent}>
                            <div className={styles.featuredMeta}>
                                <span className={styles.featuredCategory}>{activeBlog.category}</span>
                                <span>{activeBlog.date}</span>
                                <span>By {activeBlog.author}</span>
                            </div>

                            <h3 className={styles.featuredTitle}>{activeBlog.title}</h3>
                            <p className={styles.featuredExcerpt}>{activeBlog.excerpt}</p>

                            <Link href={`/blog/${activeBlog.slug}`} className={styles.readMoreBtn}>
                                Read Full Article <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
