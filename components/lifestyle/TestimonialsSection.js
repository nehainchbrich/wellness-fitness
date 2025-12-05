import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import styles from "../../styles/LifestyleSection.module.css";

export default function TestimonialsSection() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            quote: "Transforming my lifestyle didn't happen overnight, but these daily habits changed everything. I wake up energized and end each day fulfilled.",
            name: "Sarah Mitchell",
            role: "Wellness Coach",
            image: "🌟"
        },
        {
            quote: "The morning routine alone was a game-changer. I've never felt more focused, productive, and genuinely happy in my life.",
            name: "Marcus Chen",
            role: "Entrepreneur",
            image: "✨"
        },
        {
            quote: "I used to think self-care was selfish. Now I understand it's the foundation of everything. My relationships, work, and health have all improved.",
            name: "Emma Rodriguez",
            role: "Teacher & Mom",
            image: "💫"
        },
    ];

    useEffect(() => {
        // Auto-rotate testimonials
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionBadge}>
                    <FaQuoteLeft /> REAL TRANSFORMATIONS
                </div>
                <h2 className={styles.sectionTitle}>
                    Stories of <span className={styles.highlight}>Transformation</span>
                </h2>
            </div>

            <div className={styles.testimonialContainer}>
                <div className={styles.testimonialCard}>
                    <div className={styles.quoteIcon}>
                        <FaQuoteLeft />
                    </div>
                    <p className={styles.testimonialQuote}>
                        {testimonials[activeTestimonial].quote}
                    </p>
                    <div className={styles.testimonialAuthor}>
                        <div className={styles.authorImage}>
                            {testimonials[activeTestimonial].image}
                        </div>
                        <div className={styles.authorInfo}>
                            <div className={styles.authorName}>
                                {testimonials[activeTestimonial].name}
                            </div>
                            <div className={styles.authorRole}>
                                {testimonials[activeTestimonial].role}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.testimonialDots}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === activeTestimonial ? styles.activeDot : ''}`}
                            onClick={() => setActiveTestimonial(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
