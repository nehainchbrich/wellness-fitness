import Head from "next/head";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
    FaAppleAlt, FaCarrot, FaFish, FaBreadSlice, FaLeaf, FaEgg,
    FaDrumstickBite, FaBolt, FaHeart, FaBrain, FaShieldAlt,
    FaWater, FaSeedling, FaStar, FaArrowRight, FaFire,
    FaClock, FaCheckCircle, FaBalanceScale, FaAward
} from "react-icons/fa";
import styles from "../../styles/Nutrition.module.css";

export default function Nutrition() {
    const [isClient, setIsClient] = useState(false);
    const [activeMealPlan, setActiveMealPlan] = useState(0);
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        setIsClient(true);

        // Auto-rotate meal plans
        const interval = setInterval(() => {
            setActiveMealPlan((prev) => (prev + 1) % mealPlans.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const nutritionPrinciples = [
        {
            icon: <FaAppleAlt />,
            title: "Whole Foods First",
            desc: "Embrace nature's bounty. Prioritize unprocessed, nutrient-dense foods that fuel your body with real nutrition, not empty calories.",
            gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
            color: "#ef4444",
            stat: "80% Whole"
        },
        {
            icon: <FaBalanceScale />,
            title: "Perfect Balance",
            desc: "Harmony on your plate. The right mix of proteins, complex carbs, and healthy fats creates sustained energy and optimal health.",
            gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
            color: "#f59e0b",
            stat: "Macro Balance"
        },
        {
            icon: <FaBrain />,
            title: "Mindful Eating",
            desc: "Transform your relationship with food. Slow down, savor every bite, and listen to your body's natural hunger and fullness signals.",
            gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
            color: "#8b5cf6",
            stat: "20 Min Meals"
        },
        {
            icon: <FaWater />,
            title: "Hydration Power",
            desc: "Water is life. Proper hydration supports digestion, boosts energy, enhances skin health, and optimizes every cellular function.",
            gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
            color: "#06b6d4",
            stat: "2.5L Daily"
        },
        {
            icon: <FaSeedling />,
            title: "Plant-Power",
            desc: "Let plants lead the way. Fill your plate with colorful vegetables and fruits packed with vitamins, minerals, and antioxidants.",
            gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            color: "#10b981",
            stat: "7+ Servings"
        },
        {
            icon: <FaHeart />,
            title: "Eat with Joy",
            desc: "Food is both nourishment and pleasure. Build a positive, sustainable relationship with eating that brings happiness and health.",
            gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
            color: "#ec4899",
            stat: "100% Love"
        },
    ];

    const nutritionStats = [
        { number: "92", label: "Energy Boost", suffix: "%", icon: <FaBolt />, color: "#f59e0b" },
        { number: "88", label: "Better Immunity", suffix: "%", icon: <FaShieldAlt />, color: "#10b981" },
        { number: "2.5L", label: "Daily Hydration", suffix: "", icon: <FaWater />, color: "#06b6d4" },
        { number: "100", label: "Whole Food Focus", suffix: "%", icon: <FaLeaf />, color: "#ef4444" },
    ];

    const macronutrients = [
        {
            name: "Protein",
            percentage: 30,
            color: "#3b82f6",
            icon: <FaDrumstickBite />,
            description: "Builds muscle & repairs tissue",
            foods: "Chicken, Fish, Eggs, Legumes"
        },
        {
            name: "Carbohydrates",
            percentage: 45,
            color: "#f59e0b",
            icon: <FaBreadSlice />,
            description: "Primary energy source",
            foods: "Quinoa, Oats, Sweet Potato, Rice"
        },
        {
            name: "Healthy Fats",
            percentage: 25,
            color: "#10b981",
            icon: <FaEgg />,
            description: "Brain health & hormones",
            foods: "Avocado, Nuts, Olive Oil, Salmon"
        },
    ];

    const foodCategories = [
        { icon: <FaCarrot />, name: "Vegetables", color: "#10b981", servings: "5-7 daily", emoji: "🥦" },
        { icon: <FaLeaf />, name: "Fruits", color: "#ef4444", servings: "2-3 daily", emoji: "🍎" },
        { icon: <FaFish />, name: "Lean Proteins", color: "#3b82f6", servings: "3-4 daily", emoji: "🐟" },
        { icon: <FaBreadSlice />, name: "Whole Grains", color: "#f59e0b", servings: "4-6 daily", emoji: "🌾" },
        { icon: <FaEgg />, name: "Healthy Fats", color: "#fbbf24", servings: "2-3 daily", emoji: "🥑" },
        { icon: <FaAppleAlt />, name: "Superfoods", color: "#ec4899", servings: "1-2 daily", emoji: "✨" },
    ];

    const mealPlans = [
        {
            time: "Breakfast",
            meal: "Power Bowl",
            description: "Overnight oats with chia seeds, fresh berries, almonds, and a drizzle of honey",
            calories: "450 cal",
            protein: "15g",
            emoji: "🥣",
            color: "#f59e0b"
        },
        {
            time: "Lunch",
            meal: "Mediterranean Delight",
            description: "Grilled chicken breast, quinoa, mixed greens, cherry tomatoes, feta, olive oil",
            calories: "550 cal",
            protein: "42g",
            emoji: "🥗",
            color: "#10b981"
        },
        {
            time: "Snack",
            meal: "Energy Boost",
            description: "Greek yogurt parfait with granola, mixed berries, and a touch of maple syrup",
            calories: "280 cal",
            protein: "20g",
            emoji: "🍓",
            color: "#ec4899"
        },
        {
            time: "Dinner",
            meal: "Ocean & Earth",
            description: "Baked salmon, roasted sweet potato, steamed broccoli, lemon butter sauce",
            calories: "620 cal",
            protein: "48g",
            emoji: "🍽️",
            color: "#3b82f6"
        },
    ];

    const benefits = [
        { icon: <FaBolt />, title: "Sustained Energy", desc: "Fuel that lasts all day", count: "95%" },
        { icon: <FaBrain />, title: "Mental Clarity", desc: "Enhanced focus & cognition", count: "88%" },
        { icon: <FaHeart />, title: "Heart Health", desc: "Cardiovascular wellness", count: "90%" },
        { icon: <FaShieldAlt />, title: "Strong Immunity", desc: "Better disease resistance", count: "92%" },
        { icon: <FaFire />, title: "Metabolism Boost", desc: "Efficient calorie burning", count: "85%" },
        { icon: <FaAward />, title: "Optimal Weight", desc: "Healthy body composition", count: "87%" },
    ];

    return (
        <div className={styles.container}>
            <Head>
                <title>Nutrition Excellence | Wellness Retreat</title>
                <meta name="description" content="Transform your health with science-backed nutrition. Whole foods, balanced meals, and mindful eating." />
            </Head>

            {/* Hero Section with Parallax */}
            <section className={styles.hero} ref={heroRef}>
                <motion.div
                    className={styles.heroBackground}
                    style={{ y }}
                />
                <div className={styles.heroOverlay} />

                {/* Floating Food Icons */}
                {isClient && (
                    <div className={styles.floatingIcons}>
                        {[FaAppleAlt, FaCarrot, FaFish, FaBreadSlice, FaLeaf, FaEgg].map((Icon, i) => (
                            <motion.div
                                key={i}
                                className={styles.floatingIcon}
                                initial={{
                                    x: Math.random() * window.innerWidth,
                                    y: Math.random() * 800
                                }}
                                animate={{
                                    y: [null, Math.random() * -200 - 100],
                                    x: [null, Math.random() * 200 - 100],
                                    rotate: [0, 360],
                                    opacity: [0.3, 0.8, 0.3]
                                }}
                                transition={{
                                    duration: Math.random() * 8 + 10,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: Math.random() * 3
                                }}
                            >
                                <Icon />
                            </motion.div>
                        ))}
                    </div>
                )}

                <motion.div
                    className={styles.heroContent}
                    style={{ opacity }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div
                        className={styles.heroLabel}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <FaStar /> SCIENCE-BACKED NUTRITION
                    </motion.div>

                    <motion.h1
                        className={styles.heroTitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Fuel Your Body,
                        <span className={styles.titleGradient}> Transform Your Life</span>
                    </motion.h1>

                    <motion.p
                        className={styles.heroSubtitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        Discover the power of whole foods, balanced macros, and mindful eating.
                        Your journey to optimal health starts with what you put on your plate.
                    </motion.p>

                    <motion.div
                        className={styles.heroCTA}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <button className={styles.primaryBtn}>
                            Get Your Meal Plan <FaArrowRight />
                        </button>
                        <button className={styles.secondaryBtn}>
                            Nutrition Guide
                        </button>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className={styles.scrollIndicator}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <div className={styles.scrollMouse}>
                        <div className={styles.scrollWheel} />
                    </div>
                    <span>Explore nutrition</span>
                </motion.div>
            </section>

            {/* Stats Dashboard */}
            <section className={styles.statsSection}>
                <div className={styles.statsContainer}>
                    {nutritionStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className={styles.statCard}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <div className={styles.statIcon} style={{ color: stat.color }}>
                                {stat.icon}
                            </div>
                            <motion.div
                                className={styles.statNumber}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                            >
                                {stat.number}{stat.suffix}
                            </motion.div>
                            <div className={styles.statLabel}>{stat.label}</div>
                            <div className={styles.statProgress} style={{ background: stat.color }} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Nutrition Principles */}
            <section className={styles.principlesSection}>
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.sectionBadge}>
                        <FaSeedling /> CORE PRINCIPLES
                    </div>
                    <h2 className={styles.sectionTitle}>
                        6 Pillars of <span className={styles.highlight}>Nutritional Excellence</span>
                    </h2>
                    <p className={styles.sectionDesc}>
                        Build your foundation with these evidence-based principles that transform how you eat, feel, and thrive.
                    </p>
                </motion.div>

                <div className={styles.principlesGrid}>
                    {nutritionPrinciples.map((principle, index) => (
                        <motion.div
                            key={index}
                            className={styles.principleCard}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -15 }}
                        >
                            <div className={styles.principleGlow} style={{ background: principle.gradient }} />

                            <div className={styles.principleHeader}>
                                <div
                                    className={styles.principleIcon}
                                    style={{ background: principle.gradient }}
                                >
                                    {principle.icon}
                                </div>
                                <div className={styles.principleStat}>{principle.stat}</div>
                            </div>

                            <h3 className={styles.principleTitle}>{principle.title}</h3>
                            <p className={styles.principleDesc}>{principle.desc}</p>

                            <div className={styles.principleFooter}>
                                <span className={styles.learnMore}>
                                    Learn More <FaArrowRight />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Macronutrients Breakdown */}
            <section className={styles.macroSection}>
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.sectionBadge}>
                        <FaBalanceScale /> MACRO BALANCE
                    </div>
                    <h2 className={styles.sectionTitle}>
                        Perfect <span className={styles.highlight}>Macronutrient</span> Ratio
                    </h2>
                    <p className={styles.sectionDesc}>
                        The optimal balance for sustained energy, muscle recovery, and overall health
                    </p>
                </motion.div>

                <div className={styles.macroGrid}>
                    {macronutrients.map((macro, index) => (
                        <motion.div
                            key={index}
                            className={styles.macroCard}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className={styles.macroIcon} style={{ color: macro.color }}>
                                {macro.icon}
                            </div>
                            <div className={styles.macroName}>{macro.name}</div>
                            <div className={styles.macroPercentage} style={{ color: macro.color }}>
                                {macro.percentage}%
                            </div>
                            <div className={styles.macroBar}>
                                <motion.div
                                    className={styles.macroBarFill}
                                    style={{ background: macro.color }}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${macro.percentage}%` }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + 0.3, duration: 1 }}
                                />
                            </div>
                            <p className={styles.macroDesc}>{macro.description}</p>
                            <p className={styles.macroFoods}>{macro.foods}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Food Categories */}
            <section className={styles.categoriesSection}>
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.sectionBadge}>
                        <FaAppleAlt /> FOOD GROUPS
                    </div>
                    <h2 className={styles.sectionTitle}>
                        Build Your <span className={styles.highlight}>Perfect Plate</span>
                    </h2>
                </motion.div>

                <div className={styles.categoriesGrid}>
                    {foodCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className={styles.categoryCard}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            whileHover={{ y: -10, scale: 1.05 }}
                        >
                            <div className={styles.categoryEmoji}>{category.emoji}</div>
                            <div className={styles.categoryIcon} style={{ color: category.color }}>
                                {category.icon}
                            </div>
                            <h3 className={styles.categoryName}>{category.name}</h3>
                            <p className={styles.categoryServings}>{category.servings}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Daily Meal Plan Showcase */}
            <section className={styles.mealPlanSection}>
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.sectionBadge}>
                        <FaClock /> DAILY NUTRITION
                    </div>
                    <h2 className={styles.sectionTitle}>
                        Your Perfect <span className={styles.highlight}>Day of Eating</span>
                    </h2>
                </motion.div>

                <div className={styles.mealPlanContainer}>
                    <motion.div
                        key={activeMealPlan}
                        className={styles.mealPlanCard}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={styles.mealEmoji}>{mealPlans[activeMealPlan].emoji}</div>
                        <div className={styles.mealTime}>{mealPlans[activeMealPlan].time}</div>
                        <h3 className={styles.mealName}>{mealPlans[activeMealPlan].meal}</h3>
                        <p className={styles.mealDescription}>{mealPlans[activeMealPlan].description}</p>
                        <div className={styles.mealStats}>
                            <div className={styles.mealStat}>
                                <FaFire /> {mealPlans[activeMealPlan].calories}
                            </div>
                            <div className={styles.mealStat}>
                                <FaDrumstickBite /> {mealPlans[activeMealPlan].protein}
                            </div>
                        </div>
                    </motion.div>

                    <div className={styles.mealPlanDots}>
                        {mealPlans.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${index === activeMealPlan ? styles.activeDot : ''}`}
                                onClick={() => setActiveMealPlan(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className={styles.benefitsSection}>
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.sectionBadge}>
                        <FaHeart /> HEALTH BENEFITS
                    </div>
                    <h2 className={styles.sectionTitle}>
                        Transform Your <span className={styles.highlight}>Wellness</span>
                    </h2>
                </motion.div>

                <div className={styles.benefitsGrid}>
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className={styles.benefitCard}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className={styles.benefitIcon}>{benefit.icon}</div>
                            <div className={styles.benefitCount}>{benefit.count}</div>
                            <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                            <p className={styles.benefitDesc}>{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <motion.div
                    className={styles.ctaContainer}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>
                            Ready to Transform Your Nutrition?
                        </h2>
                        <p className={styles.ctaDesc}>
                            Start your journey to optimal health with personalized meal plans and expert guidance.
                        </p>
                        <button className={styles.ctaButton}>
                            Get Started Today <FaArrowRight />
                        </button>
                    </div>
                    <div className={styles.ctaVisual}>
                        <motion.div
                            className={styles.ctaCircle}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </motion.div>
            </section>
        </div>
    );
}

// Enable full layout control for professional design
Nutrition.useOwnLayout = true;
