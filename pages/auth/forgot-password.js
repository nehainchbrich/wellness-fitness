import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import styles from "../../styles/Auth.module.css";

export default function ForgotPassword() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Forgot Password | Wellness Retreat</title>
                <meta name="description" content="Reset your password" />
            </Head>

            <div className={`${styles.backgroundShape} ${styles.shape1}`} />
            <div className={`${styles.backgroundShape} ${styles.shape2}`} />
            <div className={`${styles.backgroundShape} ${styles.shape3}`} />

            <Link href="/auth/login" className={styles.backLink}>
                <FaArrowLeft /> Back to Login
            </Link>

            <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className={styles.header}>
                    <h1 className={styles.title}>Forgot Password?</h1>
                    <p className={styles.subtitle}>Enter your email to receive reset instructions</p>
                </div>

                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <FaEnvelope className={styles.inputIcon} />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className={styles.input}
                            required
                        />
                    </div>

                    <motion.button
                        type="submit"
                        className={styles.button}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FaPaperPlane /> Send Reset Link
                    </motion.button>
                </form>

                <div className={styles.footer}>
                    Remember your password?
                    <Link href="/auth/login" className={styles.link}>
                        Sign In
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
