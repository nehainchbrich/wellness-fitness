import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/FAQ.module.css';

const faqs = [
    {
        question: "What makes your wellness programs unique?",
        answer: "Our programs are holistic, combining nutrition, fitness, and mental well-being into a personalized plan tailored specifically to your lifestyle and goals."
    },
    {
        question: "Do I need equipment for the fitness plans?",
        answer: "Not necessarily. We offer bodyweight-only programs as well as gym-based routines. Your plan is customized based on the equipment you have available."
    },
    {
        question: "Can I switch my plan later?",
        answer: "Absolutely. We understand that goals and circumstances change. You can adjust your program focus or intensity at any time through your dashboard."
    },
    {
        question: "Is there support available if I have questions?",
        answer: "Yes, our certified coaches are available 24/7 via chat to answer your questions, provide motivation, and help you stay on track."
    }
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Frequently Asked Questions</h2>
                    <p className={styles.subtitle}>Everything you need to know about starting your journey.</p>
                </div>

                <div className={styles.list}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button
                                className={styles.question}
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={activeIndex === index}
                            >
                                {faq.question}
                                <svg
                                    className={`${styles.icon} ${activeIndex === index ? styles.open : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={styles.answer}
                                    >
                                        <div className={styles.answerContent}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
