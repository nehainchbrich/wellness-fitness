import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/BlogDetail.module.css";

const blogsData = [
  {
    id: 1,
    title: "The Science of Sleep: Why Rest is Your Best Medicine",
    content: `
      <p>Sleep is often the first thing to be sacrificed when life gets busy, but it's arguably the most important pillar of wellness. Quality sleep is essential for physical repair, cognitive function, and emotional stability.</p>
      
      <h2>The Circadian Rhythm</h2>
      <p>Your body has an internal clock known as the circadian rhythm. Respecting this natural cycle by going to bed and waking up at the same time every day can drastically improve your sleep quality.</p>
      
      <blockquote>"Sleep is the golden chain that ties health and our bodies together." - Thomas Dekker</blockquote>
      
      <h3>The Four Stages of Sleep</h3>
      <p>Understanding sleep stages helps you appreciate why uninterrupted rest is crucial:</p>
      <ul>
        <li><strong>Stage 1 (Light Sleep):</strong> The transition between wakefulness and sleep</li>
        <li><strong>Stage 2 (Deeper Sleep):</strong> Body temperature drops, heart rate slows</li>
        <li><strong>Stage 3 (Deep Sleep):</strong> Physical restoration and immune system strengthening</li>
        <li><strong>REM Sleep:</strong> Brain consolidates memories and processes emotions</li>
      </ul>
      
      <h2>Tips for Better Sleep</h2>
      <p>Implementing these evidence-based strategies can transform your sleep quality:</p>
      <ul>
        <li>Avoid screens 1 hour before bed - blue light disrupts melatonin production</li>
        <li>Keep your bedroom cool (60-67°F) and completely dark</li>
        <li>Establish a calming pre-sleep routine like reading or meditation</li>
        <li>Limit caffeine intake after 2 PM</li>
        <li>Exercise regularly, but not within 3 hours of bedtime</li>
      </ul>
      
      <p>Remember, sleep isn't a luxury—it's a biological necessity. Prioritizing rest is one of the most powerful investments you can make in your overall health and well-being.</p>
    `,
    category: "Health",
    date: "Oct 12, 2023",
    author: "Dr. Sarah Miller",
    authorBio: "Sleep Specialist & Wellness Coach",
    image: "/images/gallery-meditation.png",
    slug: "science-of-sleep",
    readTime: "5 min read",
    tags: ["Sleep", "Health", "Wellness", "Science"]
  },
  {
    id: 2,
    title: "5 Morning Rituals for a Productive Day",
    content: `
      <p>How you start your morning often dictates how the rest of your day unfolds. By implementing a few intentional rituals, you can boost your productivity and mood significantly.</p>
      
      <h2>1. Hydrate Immediately</h2>
      <p>After 8 hours of sleep, your body is dehydrated. Drinking a large glass of water (16-20 oz) first thing in the morning jumpstarts your metabolism and helps flush out toxins.</p>
      
      <h2>2. Move Your Body</h2>
      <p>Even 5-10 minutes of stretching, yoga, or light exercise can wake up your muscles and mind. This doesn't have to be intense—gentle movement is enough to increase blood flow and energy levels.</p>
      
      <h2>3. Practice Mindfulness</h2>
      <p>Spend 5 minutes in meditation or deep breathing. This helps center your mind and reduces stress before the day's demands begin.</p>
      
      <blockquote>"Win the morning, win the day." - Tim Ferriss</blockquote>
      
      <h2>4. Eat a Nutritious Breakfast</h2>
      <p>Fuel your body with protein, healthy fats, and complex carbohydrates. Skip the sugary cereals and opt for eggs, oatmeal, or a smoothie packed with nutrients.</p>
      
      <h2>5. Set Daily Intentions</h2>
      <p>Take 2 minutes to write down your top 3 priorities for the day. This simple act provides clarity and direction, helping you focus on what truly matters.</p>
    `,
    category: "Lifestyle",
    date: "Oct 15, 2023",
    author: "James Wilson",
    authorBio: "Productivity Coach & Author",
    image: "/images/gallery-morning-yoga.png",
    slug: "morning-rituals",
    readTime: "4 min read",
    tags: ["Morning Routine", "Productivity", "Habits", "Lifestyle"]
  },
  {
    id: 3,
    title: "Mindful Eating: A Guide to Better Nutrition",
    content: `
      <p>Mindful eating is about developing a new relationship with food. It involves paying full attention to the experience of eating and drinking, both inside and outside the body.</p>
      
      <h2>What is Mindful Eating?</h2>
      <p>It allows you to become aware of positive and nurturing opportunities that are available through food selection and preparation by respecting your own inner wisdom.</p>
      
      <h3>Core Principles</h3>
      <ul>
        <li>Eat slowly and without distraction</li>
        <li>Listen to physical hunger cues</li>
        <li>Distinguish between true hunger and non-hunger triggers</li>
        <li>Engage your senses by noticing colors, smells, textures, and flavors</li>
        <li>Learn to cope with guilt and anxiety about food</li>
      </ul>
      
      <blockquote>"When you eat, eat. When you walk, walk." - Zen Proverb</blockquote>
      
      <h2>Benefits of Mindful Eating</h2>
      <p>Research shows that mindful eating can help with weight management, reduce binge eating, and improve your relationship with food. It's not a diet—it's a sustainable approach to nourishment.</p>
    `,
    category: "Nutrition",
    date: "Oct 20, 2023",
    author: "Emily Chen",
    authorBio: "Registered Dietitian & Nutrition Expert",
    image: "/images/gallery-nutrition.png",
    slug: "mindful-eating",
    readTime: "6 min read",
    tags: ["Nutrition", "Mindfulness", "Healthy Eating", "Wellness"]
  },
  {
    id: 4,
    title: "Digital Detox: Reclaiming Your Mental Space",
    content: `
      <p>In our hyper-connected world, constant notifications can lead to chronic stress and anxiety. A digital detox isn't about quitting technology, but about setting healthy boundaries.</p>
      
      <h2>Why Digital Detox Matters</h2>
      <p>Studies show that excessive screen time is linked to sleep problems, decreased attention span, and increased anxiety. Taking regular breaks from digital devices can restore mental clarity and improve relationships.</p>
      
      <h3>Practical Steps for a Digital Detox</h3>
      <ul>
        <li>Set "phone-free zones" in your house (bedroom, dining table)</li>
        <li>Turn off non-essential notifications</li>
        <li>Implement a "no screens 1 hour before bed" rule</li>
        <li>Schedule specific times to check email and social media</li>
        <li>Replace scrolling time with reading, walking, or face-to-face conversations</li>
      </ul>
      
      <p>Try setting "phone-free zones" in your house, like the bedroom or dining table, to foster better connection with yourself and others.</p>
      
      <blockquote>"Almost everything will work again if you unplug it for a few minutes, including you." - Anne Lamott</blockquote>
    `,
    category: "Mental Health",
    date: "Oct 25, 2023",
    author: "Alex Rivera",
    authorBio: "Mental Health Advocate & Therapist",
    image: "/images/gallery-selfcare.png",
    slug: "digital-detox",
    readTime: "5 min read",
    tags: ["Mental Health", "Digital Wellness", "Self-Care", "Mindfulness"]
  }
];

export default function BlogDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!router.isReady) return <div className={styles.loading}>Loading...</div>;

  const blog = blogsData.find(b => b.slug === slug);

  if (!blog) return (
    <div className={styles.notFound}>
      <h2>Blog not found</h2>
      <Link href="/blog" className={styles.backLink}>Return to Blog</Link>
    </div>
  );

  // Get related articles (excluding current)
  const relatedArticles = blogsData
    .filter(b => b.slug !== slug && (b.category === blog.category || b.tags.some(tag => blog.tags.includes(tag))))
    .slice(0, 3);

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src={blog.image}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroInner}>
            <span className={styles.categoryBadge}>{blog.category}</span>
            <h1 className={styles.title}>{blog.title}</h1>
            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {blog.date}
              </span>
              <span className={styles.separator}>•</span>
              <span className={styles.metaItem}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className={styles.contentWrapper}>
        <article className={styles.contentCard}>
          {/* Author Section */}
          <div className={styles.authorSection}>
            <div className={styles.authorAvatar}>
              {blog.author.charAt(0)}
            </div>
            <div className={styles.authorInfo}>
              <div className={styles.authorName}>{blog.author}</div>
              <div className={styles.authorBio}>{blog.authorBio}</div>
            </div>
            <div className={styles.socialShare}>
              <button className={styles.shareButton} title="Share on Twitter">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </button>
              <button className={styles.shareButton} title="Share on Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </button>
              <button className={styles.shareButton} title="Share on LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: blog.content }} />

          {/* Tags */}
          <div className={styles.tagsSection}>
            <div className={styles.tagsLabel}>Tags</div>
            <div className={styles.tags}>
              {blog.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.navigation}>
            <Link href="/blog" className={styles.backButton}>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Articles
            </Link>
          </div>
        </article>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className={styles.relatedSection}>
          <h2 className={styles.relatedTitle}>Related Articles</h2>
          <div className={styles.relatedGrid}>
            {relatedArticles.map((article) => (
              <Link href={`/blog/${article.slug}`} key={article.id}>
                <div className={styles.relatedCard}>
                  <div className={styles.relatedImage}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.relatedContent}>
                    <h3 className={styles.relatedCardTitle}>{article.title}</h3>
                    <div className={styles.relatedMeta}>
                      {article.category} • {article.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
