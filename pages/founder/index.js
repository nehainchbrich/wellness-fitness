import Head from "next/head";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagram, FaQuoteLeft, FaLeaf, FaHeart, FaLightbulb } from "react-icons/fa";
import styles from "../../styles/Founder.module.css";

export default function FounderPage() {
    return (
        <>
            <Head>
                <title>Our Founder | Wellness Website</title>
                <meta name="description" content="Meet the visionary behind our wellness journey." />
            </Head>

            <div className={styles.container}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroText}>
                            <span className={styles.heroLabel}>The Visionary</span>
                            <h1 className={styles.heroTitle}>
                                Elena <span className={styles.highlight}>Vance</span>
                            </h1>
                            <p className={styles.heroSubtitle}>
                                "True wellness isn't just about the body; it's a symphony of mind, soul, and daily intention."
                            </p>
                        </div>
                        <div className={styles.heroImageWrapper}>
                            <Image
                                src="/images/about.jpg"
                                alt="Elena Vance - Founder"
                                layout="fill"
                                objectFit="cover"
                                className={styles.heroImage}
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Biography Section (Timeline) */}
                <section className={styles.bioSection}>
                    <div className={styles.bioContainer}>
                        <div className={styles.bioSidebar}>
                            <div className={styles.bioStats}>
                                <div className={styles.statItem}>
                                    <div className={styles.statValue}>15+</div>
                                    <div className={styles.statLabel}>Years Experience</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statValue}>50k+</div>
                                    <div className={styles.statLabel}>Lives Impacted</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statValue}>3</div>
                                    <div className={styles.statLabel}>Best-Sellers</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.timeline}>
                            {/* Chapter 1 */}
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>
                                <div className={styles.timelineContent}>
                                    <span className={styles.chapterTitle}>Chapter 01</span>
                                    <h2 className={styles.timelineTitle}>The Catalyst</h2>
                                    <p className={styles.timelineText}>
                                        Elena's journey began not in a yoga studio, but in the high-pressure world of corporate finance.
                                        Burned out and disconnected, she sought a path back to herself. What started as a simple
                                        morning meditation practice evolved into a lifelong quest to understand the deeper mechanics
                                        of human well-being. It was in the silence of those early mornings that she found her voice again.
                                    </p>
                                </div>
                            </div>

                            {/* Chapter 2 */}
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>
                                <div className={styles.timelineContent}>
                                    <span className={styles.chapterTitle}>Chapter 02</span>
                                    <h2 className={styles.timelineTitle}>The Bridge</h2>
                                    <p className={styles.timelineText}>
                                        After traveling to ashrams in India and studying with leading neuroscientists in the West,
                                        Elena realized that the gap between ancient wisdom and modern science was where the magic happened.
                                        She founded this platform to bridge that gap, offering practical, science-backed tools for
                                        holistic living. She believes that spirituality and science are not opposing forces, but complementary languages describing the same truth.
                                    </p>
                                </div>
                            </div>

                            {/* Chapter 3 */}
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>
                                <div className={styles.timelineContent}>
                                    <span className={styles.chapterTitle}>Chapter 03</span>
                                    <h2 className={styles.timelineTitle}>The Mission</h2>
                                    <p className={styles.timelineText}>
                                        Today, Elena is a renowned wellness advocate, author, and speaker, dedicated to helping
                                        others rewrite their stories and reclaim their vitality. Her mission is simple yet profound:
                                        to empower individuals to become the architects of their own well-being, one conscious choice at a time.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.signature}>Elena Vance</div>
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section className={styles.visionSection}>
                    <div className={styles.visionContainer}>
                        <h2 className={styles.visionTitle}>Core Philosophy</h2>
                        <div className={styles.valuesGrid}>
                            <div className={styles.valueCard}>
                                <div className={styles.valueIcon}><FaLeaf /></div>
                                <h3 className={styles.valueTitle}>Holistic Harmony</h3>
                                <p className={styles.valueDesc}>
                                    We believe that health is an ecosystem. You cannot heal the body without honoring the mind.
                                </p>
                            </div>
                            <div className={styles.valueCard}>
                                <div className={styles.valueIcon}><FaHeart /></div>
                                <h3 className={styles.valueTitle}>Radical Self-Love</h3>
                                <p className={styles.valueDesc}>
                                    Transformation starts with acceptance. We advocate for kindness towards oneself above all else.
                                </p>
                            </div>
                            <div className={styles.valueCard}>
                                <div className={styles.valueIcon}><FaLightbulb /></div>
                                <h3 className={styles.valueTitle}>Conscious Living</h3>
                                <p className={styles.valueDesc}>
                                    Every choice matters. We empower you to live with intention, from what you eat to how you think.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className={styles.quoteSection}>
                    <div className={styles.quoteContainer}>
                        <FaQuoteLeft className={styles.quoteIcon} />
                        <p className={styles.quoteText}>
                            "The most important relationship you will ever have is the one you have with yourself.
                            Nurture it, cherish it, and watch your world transform."
                        </p>
                        <div className={styles.quoteAuthor}>— Elena Vance</div>
                    </div>
                </section>
            </div>
        </>
    );
}
