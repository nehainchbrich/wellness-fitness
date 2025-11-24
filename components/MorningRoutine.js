import React, { useState } from 'react';
import styles from '../styles/MorningRoutine.module.css';

const routines = [
  "☀️ Wake up at 6:30 AM and drink a glass of water",
  "🧘‍♀️ 10 minutes of stretching or yoga",
  "📝 Write 3 things you're grateful for",
  "🍳 Healthy breakfast with protein and fruits",
  "🚶‍♂️ 15-minute morning walk outside",
  "🧘‍♂️ 5-minute meditation before work"
];

export default function MorningRoutine() {
  const [plan, setPlan] = useState([]);

  const generateRoutine = () => {
    // shuffle and pick 4 random activities
    const shuffled = [...routines].sort(() => 0.5 - Math.random());
    setPlan(shuffled.slice(0, 4));
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>🌅 Morning Routine Generator</h2>
      <button onClick={generateRoutine} className={styles.generateBtn}>Generate Routine</button>
      {plan.length > 0 && (
        <ul className={styles.routineList}>
          {plan.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
    </div>
  );
}
