import styles from '../styles/Newsletter.module.css';

export default function NewsletterSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Join Our Community</h2>
                <p className={styles.description}>
                    Get weekly wellness tips, nutrition advice, and exclusive offers delivered straight to your inbox.
                </p>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className={styles.input}
                        required
                    />
                    <button type="submit" className={styles.button}>
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}
