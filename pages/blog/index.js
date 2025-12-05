import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/BlogPage.module.css';

const blogsData = [
  {
    id: 1,
    title: "The Science of Sleep: Why Rest is Your Best Medicine",
    excerpt: "Discover how quality sleep impacts your immune system, mental clarity, and overall longevity.",
    category: "Health",
    date: "Oct 12, 2023",
    author: "Dr. Sarah Miller",
    image: "/images/gallery-meditation.png",
    slug: "science-of-sleep",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "5 Morning Rituals for a Productive Day",
    excerpt: "Transform your mornings with these simple yet effective habits that set the tone for success.",
    category: "Lifestyle",
    date: "Oct 15, 2023",
    author: "James Wilson",
    image: "/images/gallery-morning-yoga.png",
    slug: "morning-rituals",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Mindful Eating: A Guide to Better Nutrition",
    excerpt: "Learn to listen to your body and build a healthier relationship with food through mindfulness.",
    category: "Nutrition",
    date: "Oct 20, 2023",
    author: "Emily Chen",
    image: "/images/gallery-nutrition.png",
    slug: "mindful-eating",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Digital Detox: Reclaiming Your Mental Space",
    excerpt: "In a hyper-connected world, taking time to unplug is essential for mental well-being.",
    category: "Mental Health",
    date: "Oct 25, 2023",
    author: "Alex Rivera",
    image: "/images/gallery-selfcare.png",
    slug: "digital-detox",
    readTime: "5 min read"
  },
  {
    id: 5,
    title: "Yoga for Beginners: Finding Your Flow",
    excerpt: "Start your yoga journey with these foundational poses and breathing techniques.",
    category: "Fitness",
    date: "Nov 1, 2023",
    author: "Maya Patel",
    image: "/images/gallery-evening-stretches.png",
    slug: "yoga-beginners",
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "The Power of Gratitude in Daily Life",
    excerpt: "Cultivating gratitude can transform your mindset and improve overall well-being.",
    category: "Mental Health",
    date: "Nov 5, 2023",
    author: "Dr. Sarah Miller",
    image: "/images/gallery-meditation.png",
    slug: "power-of-gratitude",
    readTime: "4 min read"
  }
];

const categories = ["All", "Health", "Lifestyle", "Nutrition", "Mental Health", "Fitness"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogsData.filter(blog => {
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroPattern}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Wellness Insights</h1>
          <p className={styles.heroSubtitle}>
            Explore expert articles, tips, and stories to inspire your wellness journey
          </p>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search articles..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className={styles.searchButton}>Search</button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categories}>
        <div className={styles.categoryTabs}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryTab} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <div className={styles.blogGrid}>
        {filteredBlogs.map((blog) => (
          <Link href={`/blog/${blog.slug}`} key={blog.id} className={styles.blogLink}>
            <article className={styles.blogCard}>
              <div className={styles.cardImage}>
                <span className={styles.categoryBadge}>{blog.category}</span>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span className={styles.readTime}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {blog.readTime}
                  </span>
                </div>
                <h2 className={styles.cardTitle}>{blog.title}</h2>
                <p className={styles.cardExcerpt}>{blog.excerpt}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.author}>
                    <div className={styles.authorAvatar}></div>
                    <span className={styles.authorName}>{blog.author}</span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#64748b' }}>
          <h3>No articles found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}
