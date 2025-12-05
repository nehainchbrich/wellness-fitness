import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/BeforeAfter.module.css';

const BeforeAfter = () => {
    const [activeProfile, setActiveProfile] = useState(0);
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const transformations = [
        {
            id: 1,
            name: 'Sarah Thompson',
            timeframe: '6 Months Journey',
            beforeImage: '/images/gallery-morning-yoga.png', // Using existing images as placeholders
            afterImage: '/images/gallery-evening-stretches.png',
            stats: [
                { label: 'Weight Loss', value: '25 lbs', icon: '⚖️' },
                { label: 'Energy Level', value: '+85%', icon: '⚡' },
                { label: 'Sleep Quality', value: '+60%', icon: '😴' },
                { label: 'Confidence', value: '+100%', icon: '💪' }
            ],
            testimonial: 'Wellness program transformed my life completely. I feel stronger, healthier, and more confident than ever before!'
        },
        {
            id: 2,
            name: 'Michael Chen',
            timeframe: '4 Months Journey',
            beforeImage: '/images/gallery-nutrition.png',
            afterImage: '/images/gallery-selfcare.png',
            stats: [
                { label: 'Muscle Gain', value: '12 lbs', icon: '💪' },
                { label: 'Body Fat', value: '-8%', icon: '📉' },
                { label: 'Stamina', value: '+50%', icon: '🏃' },
                { label: 'Focus', value: '+90%', icon: '🧠' }
            ],
            testimonial: 'The nutrition and workout plans were easy to follow. I achieved my fitness goals faster than I expected!'
        },
        {
            id: 3,
            name: 'Emma Davis',
            timeframe: '3 Months Journey',
            beforeImage: '/images/gallery-meditation.png',
            afterImage: '/images/gallery-morning-yoga.png',
            stats: [
                { label: 'Flexibility', value: '+40%', icon: '🧘‍♀️' },
                { label: 'Stress', value: '-60%', icon: '😌' },
                { label: 'Balance', value: '+75%', icon: '⚖️' },
                { label: 'Mindfulness', value: 'Daily', icon: '🧠' }
            ],
            testimonial: 'Yoga and meditation have brought so much peace into my life. I feel more balanced and centered.'
        }
    ];

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const handleTouchMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const nextProfile = () => {
        setActiveProfile((prev) => (prev + 1) % transformations.length);
        setSliderPosition(50); // Reset slider position
    };

    const prevProfile = () => {
        setActiveProfile((prev) => (prev - 1 + transformations.length) % transformations.length);
        setSliderPosition(50); // Reset slider position
    };

    const currentTransformation = transformations[activeProfile];

    return (
        <section className={styles.section}>
            {/* Floating Background */}
            <div className={styles.floatingBg}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Amazing Transformations</h2>
                    <p className={styles.subtitle}>
                        Real results from real people on their wellness journey
                    </p>
                </div>

                {/* Profile Navigation */}
                <div className={styles.sliderControls}>
                    <button onClick={prevProfile} className={styles.navButton} aria-label="Previous story">←</button>
                    <div className={styles.profileIndicators}>
                        {transformations.map((_, index) => (
                            <span
                                key={index}
                                className={`${styles.indicator} ${index === activeProfile ? styles.activeIndicator : ''}`}
                                onClick={() => setActiveProfile(index)}
                            />
                        ))}
                    </div>
                    <button onClick={nextProfile} className={styles.navButton} aria-label="Next story">→</button>
                </div>

                <div className={styles.transformationCard}>
                    {/* User Info */}
                    <div className={styles.userInfo}>
                        <h3 className={styles.userName}>{currentTransformation.name}</h3>
                        <p className={styles.timeframe}>{currentTransformation.timeframe}</p>
                    </div>

                    {/* Image Comparison Slider */}
                    <div
                        ref={containerRef}
                        className={styles.comparisonContainer}
                        onMouseMove={handleMouseMove}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onTouchMove={handleTouchMove}
                        onTouchStart={() => setIsDragging(true)}
                        onTouchEnd={() => setIsDragging(false)}
                    >
                        {/* Before Image */}
                        <div className={styles.imageWrapper}>
                            <div className={styles.beforeImage}>
                                <Image
                                    src={currentTransformation.beforeImage}
                                    alt="Before transformation"
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <div className={styles.imageOverlay}></div>
                            </div>
                            <div className={styles.label + ' ' + styles.labelBefore}>BEFORE</div>
                        </div>

                        {/* After Image */}
                        <div
                            className={styles.afterImageContainer}
                            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                            <div className={styles.afterImage}>
                                <Image
                                    src={currentTransformation.afterImage}
                                    alt="After transformation"
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <div className={styles.imageOverlay}></div>
                            </div>
                            <div className={styles.label + ' ' + styles.labelAfter}>AFTER</div>
                        </div>

                        {/* Slider Handle */}
                        <div
                            className={styles.sliderHandle}
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className={styles.sliderLine}></div>
                            <div className={styles.sliderButton}>
                                <span className={styles.sliderArrowLeft}>◀</span>
                                <span className={styles.sliderArrowRight}>▶</span>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className={styles.statsGrid}>
                        {currentTransformation.stats.map((stat, index) => (
                            <div
                                key={index}
                                className={styles.statCard}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span className={styles.statIcon}>{stat.icon}</span>
                                <div className={styles.statValue}>{stat.value}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Testimonial */}
                    <div className={styles.testimonial}>
                        <div className={styles.quoteIcon}>"</div>
                        <p className={styles.testimonialText}>{currentTransformation.testimonial}</p>
                    </div>

                    {/* CTA */}
                    <div className={styles.ctaContainer}>
                        <button className={styles.ctaButton}>Start Your Journey</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
