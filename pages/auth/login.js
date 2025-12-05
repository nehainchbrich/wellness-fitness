import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaArrowLeft, FaSignInAlt } from "react-icons/fa";
import styles from "../../styles/Auth.module.css";

export default function Login() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Login | Wellness Retreat</title>
                <meta name="description" content="Login to your wellness account" />
            </Head>

            {/* Animated Background Shapes */}
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
                    <h1 className={styles.title}>Welcome Back</h1>
                    <p className={styles.subtitle}>Sign in to continue your wellness journey</p>
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

                    <div className={styles.inputGroup}>
                        <FaLock className={styles.inputIcon} />
                        <input
                            type="password"
                            placeholder="Password"
                            className={styles.input}
                            required
                        />
                    </div>

                    <div className={styles.options}>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="accent-emerald-600 w-4 h-4" />
                            <span>Remember me</span>
                        </label>
                        <Link href="/auth/forgot-password" className={styles.forgotLink}>
                            Forgot Password?
                        </Link>
                    </div>

                    <motion.button
                        type="submit"
                        className={styles.button}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FaSignInAlt /> Sign In
                    </motion.button>
                </form>

                <div className={styles.footer}>
                    Don't have an account?
                    <Link href="/auth/register" className={styles.link}>
                        Sign Up
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
