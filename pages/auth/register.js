import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaArrowLeft, FaUserPlus } from "react-icons/fa";
import styles from "../../styles/Auth.module.css";

export default function Register() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Register | Wellness Retreat</title>
                <meta name="description" content="Create your wellness account" />
            </Head>

            <div className={`${styles.backgroundShape} ${styles.shape1}`} />
            <div className={`${styles.backgroundShape} ${styles.shape2}`} />
            <div className={`${styles.backgroundShape} ${styles.shape3}`} />

            <Link href="/" className={styles.backLink}>
                <FaArrowLeft /> Back to Home
            </Link>

            <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className={styles.header}>
                    <h1 className={styles.title}>Create Account</h1>
                    <p className={styles.subtitle}>Join us and start your transformation today</p>
                </div>

                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <FaUser className={styles.inputIcon} />
                        <input
                            type="text"
                            placeholder="Full Name"
                            className={styles.input}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <FaEnvelope className={styles.inputIcon} />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className={styles.input}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <FaLock className={styles.inputIcon} />
                        <input
                            type="password"
                            placeholder="Password"
                            className={styles.input}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <FaLock className={styles.inputIcon} />
                        <input
                            type="password"
                            placeholder="Confirm Password"
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
                        <FaUserPlus /> Sign Up
                    </motion.button>
                </form>

                <div className={styles.footer}>
                    Already have an account?
                    <Link href="/auth/login" className={styles.link}>
                        Sign In
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
