import React, { useState } from 'react';
import styles from '../styles/WaterIntake.module.css';

export default function WaterIntake() {
  const [weight, setWeight] = useState('');
  const [intake, setIntake] = useState(null);

  const calculateIntake = (e) => {
    e.preventDefault();
    if (!weight) return;
    // Rough formula: 35 ml per kg body weight
    const waterMl = weight * 35;
    const waterLiters = (waterMl / 1000).toFixed(2);
    setIntake(waterLiters);
  };

  const reset = () => {
    setWeight('');
    setIntake(null);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>💧 Water Intake Calculator</h2>
      <form onSubmit={calculateIntake} className={styles.form}>
        <label>Weight (kg)</label>
        <input 
          type="number" 
          value={weight} 
          onChange={e => setWeight(e.target.value)} 
          min="0" 
          step="0.1"
          placeholder="Enter your weight"
        />
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.calculateBtn}>Calculate</button>
          <button type="button" className={styles.resetBtn} onClick={reset}>Reset</button>
        </div>
      </form>
      {intake && (
        <div className={styles.result}>
          Recommended Daily Water Intake: <strong>{intake} L</strong>
        </div>
      )}
    </div>
  );
}
