import React, { useState } from 'react';
import styles from '../styles/BmiCalculator.module.css';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) return;

    const heightInM = height / 100; // convert cm to meters
    const bmiValue = (weight / (heightInM * heightInM)).toFixed(1);
    setBmi(bmiValue);

    // Determine category
    let cat = '';
    if (bmiValue < 18.5) cat = 'Underweight';
    else if (bmiValue < 25) cat = 'Normal weight';
    else if (bmiValue < 30) cat = 'Overweight';
    else cat = 'Obese';
    setCategory(cat);
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setCategory('');
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>BMI Calculator</h2>
      <form onSubmit={calculateBMI} className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Weight (kg)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} min="0" step="0.1" />
        </div>
        <div className={styles.inputGroup}>
          <label>Height (cm)</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} min="0" step="0.1" />
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.calculateBtn}>Calculate</button>
          <button type="button" className={styles.resetBtn} onClick={resetForm}>Reset</button>
        </div>
      </form>

      {bmi && (
        <div className={styles.result}>
          <h3>Your BMI: {bmi}</h3>
          <p>Category: <strong>{category}</strong></p>
        </div>
      )}
    </div>
  );
}
