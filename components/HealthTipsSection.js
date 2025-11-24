import styles from '../styles/HealthTips.module.css';

const tipCards = [
  {
    title: 'Daily Hydration Ritual',
    focus: 'Infused water, every 2 hours',
    bullets: [
      'Start your morning with minerals + lemon',
      'Keep a 750ml glass bottle within reach',
      'Add chia seeds before intense workouts',
    ],
    accent: styles.cardMint,
    icon: '💧',
  },
  {
    title: 'Micro-Movement Moments',
    focus: '90-second resets',
    bullets: [
      'Set posture reminders for each meeting invite',
      'Practice box-breathing while standing',
      'End the reset with 10 slow shoulder rolls',
    ],
    accent: styles.cardAmber,
    icon: '🧘',
  },
  {
    title: 'Nourish with Color',
    focus: 'Rainbow lunch bowls',
    bullets: [
      'Build plates with at least 4 colors',
      'Pair slow carbs with healthy fats',
      'Finish with a fermented topper',
    ],
    accent: styles.cardViolet,
    icon: '🥗',
  },
];

const microGoals = [
  { label: 'Sleep wind-down', value: '45 min tech-free' },
  { label: 'Steps between tasks', value: '350+ light steps' },
  { label: 'Mindful check-ins', value: '3 deep-breath pauses' },
  { label: 'Greens per day', value: '2 cups minimum' },
];

export default function HealthTipsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <div className={styles.badge}>Health Playbook</div>
          <h2 className={styles.heading}>
            Tiny habits, <span>massive vitality.</span>
          </h2>
          <p className={styles.description}>
            Layer these bite-sized rituals into your current routine. Each tip is designed to
            refresh your energy, sharpen focus, and keep your nervous system grounded throughout
            the day.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.cardsColumn}>
            {tipCards.map((tip) => (
              <article key={tip.title} className={`${styles.tipCard} ${tip.accent}`}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon} aria-hidden="true">
                    {tip.icon}
                  </span>
                  <div>
                    <h3>{tip.title}</h3>
                    <p>{tip.focus}</p>
                  </div>
                </div>

                <ul className={styles.cardList}>
                  {tip.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className={styles.pulseBar} />
              </article>
            ))}
          </div>

          <div className={styles.guideColumn}>
            <div className={styles.guidePanel}>
              <h4>Your 4-Part Daily Tune-Up</h4>
              <p>
                Use these micro-goals as mile markers. Check them off inside your notes app or keep
                them on a sticky note near your monitor.
              </p>

              <div className={styles.goalsGrid}>
                {microGoals.map((goal) => (
                  <div key={goal.label} className={styles.goalCard}>
                    <span className={styles.goalLabel}>{goal.label}</span>
                    <strong>{goal.value}</strong>
                  </div>
                ))}
              </div>

              <div className={styles.tipBox}>
                <p className={styles.tipLabel}>Coach Note</p>
                <p>
                  Stack one new habit onto something that already exists (coffee, emails, commute).
                  Consistency beats intensity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


