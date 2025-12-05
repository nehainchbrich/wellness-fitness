import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Gallery.module.css';

const Gallery = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const galleryItems = [
        {
            id: 1,
            category: 'yoga',
            title: 'Morning Practice',
            description: 'Start your day with energizing yoga flows',
            image: '/images/gallery-morning-yoga.png',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        {
            id: 2,
            category: 'wellness',
            title: 'Self-Care Rituals',
            description: 'Nurture your mind, body, and soul',
            image: '/images/gallery-selfcare.png',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        },
        {
            id: 3,
            category: 'nutrition',
            title: 'Healthy Eating',
            description: 'Nourish your body with wholesome foods',
            image: '/images/gallery-nutrition.png',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        },
        {
            id: 4,
            category: 'meditation',
            title: 'Mindful Moments',
            description: 'Find peace in the present moment',
            image: '/images/gallery-meditation.png',
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        },
        {
            id: 5,
            category: 'yoga',
            title: 'Evening Stretches',
            description: 'Unwind and release tension',
            image: '/images/gallery-evening-stretches.png',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        },
        {
            id: 6,
            category: 'wellness',
            title: 'Spa Experience',
            description: 'Pamper yourself with luxurious treatments',
            image: '/images/gallery-selfcare.png',
            gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        },
        {
            id: 7,
            category: 'nutrition',
            title: 'Fresh Smoothies',
            description: 'Energize with nutrient-packed blends',
            image: '/images/gallery-nutrition.png',
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        },
        {
            id: 8,
            category: 'meditation',
            title: 'Breath Work',
            description: 'Connect with your inner calm',
            image: '/images/gallery-meditation.png',
            gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        },
        {
            id: 9,
            category: 'yoga',
            title: 'Power Yoga',
            description: 'Build strength and flexibility',
            image: '/images/gallery-morning-yoga.png',
            gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlay, galleryItems.length]);

    const nextSlide = () => {
        setIsAutoPlay(false);
        setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
    };

    const prevSlide = () => {
        setIsAutoPlay(false);
        setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    };

    const goToSlide = (index) => {
        setIsAutoPlay(false);
        setCurrentSlide(index);
    };

    return (
        <section className={styles.gallerySection}>
            {/* Floating Background Elements */}
            <div className={styles.floatingBg}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
                <div className={styles.blob3}></div>
            </div>

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Wellness Gallery</h2>
                    <p className={styles.subtitle}>
                        Explore our collection of transformative wellness experiences
                    </p>
                </div>

                {/* Slider Container */}
                <div className={styles.sliderContainer}>
                    {/* Previous Button */}
                    <button className={styles.navButton + ' ' + styles.prevButton} onClick={prevSlide} aria-label="Previous slide">
                        <span className={styles.arrow}>←</span>
                    </button>

                    {/* Slider Track */}
                    <div className={styles.sliderTrack}>
                        <div
                            className={styles.sliderWrapper}
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {galleryItems.map((item) => (
                                <div key={item.id} className={styles.slide}>
                                    <div className={styles.galleryItem}>
                                        <div className={styles.itemImage}>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                sizes="(max-width: 768px) 100vw, 80vw"
                                                priority={item.id <= 2}
                                            />
                                            <div className={styles.imageOverlay}></div>
                                            <div className={styles.hoverEffect}>
                                                <span className={styles.viewIcon}>👁️</span>
                                            </div>
                                        </div>
                                        <div className={styles.itemContent}>
                                            <h3 className={styles.itemTitle}>{item.title}</h3>
                                            <p className={styles.itemDescription}>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next Button */}
                    <button className={styles.navButton + ' ' + styles.nextButton} onClick={nextSlide} aria-label="Next slide">
                        <span className={styles.arrow}>→</span>
                    </button>

                    {/* Dot Indicators */}
                    <div className={styles.dotContainer}>
                        {galleryItems.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
