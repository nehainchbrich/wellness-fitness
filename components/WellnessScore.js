import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';
import styles from '../styles/Score.module.css';

// QUESTIONS & helper
const QUESTIONS = [
  { id: 'sleep', text: 'How well did you sleep last night?', category: 'Rest' },
  { id: 'energy', text: 'How energetic do you feel today?', category: 'Energy' },
  { id: 'nutrition', text: 'How balanced was your nutrition today?', category: 'Nutrition' },
  { id: 'movement', text: 'Did you do physical activity today?', category: 'Movement' },
  { id: 'mood', text: 'Rate your overall mood today.', category: 'Mental' },
  { id: 'stress', text: 'How much stress did you experience today?', category: 'Mental', invert: true },
  { id: 'hydration', text: 'How well did you stay hydrated?', category: 'Nutrition' },
];

function clamp(v, a = 0, b = 5) { return Math.max(a, Math.min(b, v)); }

// ------------------ Journal Component ------------------
function Journal({ entries, save }) {
  const [text, setText] = useState("");
  const [mood, setMood] = useState("😊");
  const [energy, setEnergy] = useState(3);

  function addEntry() {
    const newEntry = {
      date: new Date().toISOString().split('T')[0],
      text,
      mood,
      energy
    };
    const updated = [...entries, newEntry];
    save(updated);
    localStorage.setItem('journal', JSON.stringify(updated));
    setText("");
  }

  return (
    <div className={styles.journalWrapper}>
      <h3 className={styles.sectionTitle}>🌙 Daily Wellness Journal</h3>

      <div className="flex gap-4 items-center flex-wrap">
        <label>Mood:</label>
        <select value={mood} onChange={e => setMood(e.target.value)}>
          <option>😊 Happy</option>
          <option>😐 Neutral</option>
          <option>😔 Low</option>
          <option>😡 Stressed</option>
        </select>

        <label>Energy:</label>
        <input type="range" min="0" max="5" value={energy} onChange={e => setEnergy(e.target.value)} />
      </div>

      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Write something about today..."
        className={styles.journalInput}
        rows="3"
      />

      <button onClick={addEntry} className={styles.buttonPrimary}>Save Entry</button>

      <div className="mt-6 space-y-3">
        {(entries || []).map((e, i) => (
          <div key={i} className={styles.journalWrapper}>
            <div className={styles.categoryLabel}>{e.date}</div>
            <div>{e.mood} — Energy: {e.energy}/5</div>
            <p>{e.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ------------------ Main Component ------------------
export default function WellnessScore() {
  const initialAnswers = QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: 3 }), {});
  const [answers, setAnswers] = useState(initialAnswers);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [journal, setJournal] = useState([]);
  const [showJournalModal, setShowJournalModal] = useState(false);
  const [suggestedTip, setSuggestedTip] = useState("");

  // Load history & journal
  useEffect(() => {
    const rawHistory = localStorage.getItem('wellness_history');
    if (rawHistory) try { setHistory(JSON.parse(rawHistory)); } catch { }

    const rawJournal = localStorage.getItem('journal');
    if (rawJournal) try { setJournal(JSON.parse(rawJournal)); } catch { }

    // Random tip
    const tips = [
      "Drink a full glass of water now to boost hydration.",
      "Take a 2‑minute breathing break to reset your mind.",
      "Do a quick stretch to reduce physical tension.",
      "Step outside for sunlight and oxygen."
    ];
    setSuggestedTip(tips[Math.floor(Math.random() * tips.length)]);

    // Show journal modal on page load
    setShowJournalModal(false);
  }, []);

  function saveHistory(score) {
    const fresh = [...history, { date: new Date().toISOString(), score }].slice(-30);
    setHistory(fresh);
    localStorage.setItem('wellness_history', JSON.stringify(fresh));
  }

  function handleChange(id, value) {
    setAnswers(prev => ({ ...prev, [id]: clamp(Number(value)) }));
  }

  function computeScore(obj) {
    const categoryMap = {};
    let total = 0;
    QUESTIONS.forEach(q => {
      const val = q.invert ? (5 - obj[q.id]) : obj[q.id];
      total += val;
      if (!categoryMap[q.category]) categoryMap[q.category] = [];
      categoryMap[q.category].push(val);
    });
    const categories = Object.entries(categoryMap).map(([name, arr]) => ({
      name,
      percent: Math.round((arr.reduce((a, b) => a + b, 0) / (arr.length * 5)) * 100)
    }));
    return { percent: Math.round((total / (QUESTIONS.length * 5)) * 100), categories };
  }

  function handleSubmit(e) {
    e.preventDefault();
    const score = computeScore(answers);
    setResult(score);
    saveHistory(score.percent);
  }

  function computeWellnessAge(score) {
    if (score >= 90) return { label: "Excellent", age: "Younger Biological Age (-5 to -10 yrs)" };
    if (score >= 70) return { label: "Good", age: "Stable Age Range (±2 yrs)" };
    if (score >= 50) return { label: "Fair", age: "Mild Wellness Aging (+3 to +6 yrs)" };
    return { label: "Poor", age: "Accelerated Wellness Aging (+7 to +12 yrs)" };
  }

  function getRecommendations(categories) {
    const rec = [];
    categories.forEach(c => {
      if (c.percent < 60) {
        if (c.name === "Rest") rec.push("Try a consistent sleep schedule and avoid screens 30 minutes before bed.");
        if (c.name === "Energy") rec.push("Add a 5-minute energizing breathing routine to your morning.");
        if (c.name === "Nutrition") rec.push("Increase hydration and include whole foods in your next meal.");
        if (c.name === "Movement") rec.push("Add a short walk or stretching session today.");
        if (c.name === "Mental") rec.push("Practice 3 minutes of mindfulness to reduce stress.");
      }
    });
    if (!rec.length) rec.push("Great balance across all categories — maintain your routine!");
    return rec;
  }

  function computeBodyWellnessIndex(answers) {
    const ids = ['sleep', 'nutrition', 'movement', 'hydration'];
    let sum = 0; ids.forEach(id => sum += answers[id] ?? 0);
    return Math.round((sum / (ids.length * 5)) * 100);
  }

  function computeMoodStabilityIndex(answers) {
    const mood = answers['mood'] ?? 0;
    const energy = answers['energy'] ?? 0;
    const stress = answers['stress'] ?? 0;
    return Math.round(((mood + energy + (5 - stress)) / 15) * 100);
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>Wellness Score</h2>

      {suggestedTip && (
        <div className={styles.toolBox}>
          <h3 className={styles.sectionTitle}>Quick Wellness Tool</h3>
          <p className={styles.toolText}>Try this right now:</p>
          <div className={styles.toolText}>{suggestedTip}</div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className={styles.formBlock}>
        {QUESTIONS.map(q => (
          <div key={q.id} className={styles.questionRow}>
            <div className={styles.labelColumn}>
              <label className={styles.label}>{q.text}</label>
              <div className={styles.categoryLabel}>{q.category}</div>
            </div>
            <div className={styles.inputColumn}>
              <input type="range" min="0" max="5" value={answers[q.id]} onChange={e => handleChange(q.id, e.target.value)} className={styles.rangeInput} />
              <div className={styles.rangeValue}>{answers[q.id]} / 5</div>
            </div>
          </div>
        ))}
        <button className={styles.buttonPrimary}>Calculate</button>
      </form>

      {result && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={styles.scoreCard}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={styles.chartBlock}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={[{ name: 'score', value: result.percent }, { name: 'remain', value: 100 - result.percent }]} innerRadius={60} outerRadius={80} dataKey="value">
                    <Cell fill="#10b981" />
                    <Cell fill="#e5e7eb" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className={styles.chartBlock}>
              <ResponsiveContainer>
                <BarChart data={result.categories}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="percent" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={styles.indexBlock}>
              <h3 className={styles.sectionTitle}>Wellness Age</h3>
              <p className={styles.toolText}>Status: {computeWellnessAge(result.percent).label}</p>
              <p className={styles.indexValue}>{computeWellnessAge(result.percent).age}</p>
            </div>
            <div className={styles.indexBlock}>
              <h3 className={styles.sectionTitle}>Body Wellness Index</h3>
              <p className={styles.indexValue}>{computeBodyWellnessIndex(answers)}%</p>
            </div>
            <div className={styles.indexBlock}>
              <h3 className={styles.sectionTitle}>Mood Stability Index</h3>
              <p className={styles.indexValue}>{computeMoodStabilityIndex(answers)}%</p>
            </div>
          </div>

          <div className={styles.indexBlock}>
            <h3 className={styles.sectionTitle}>Personal Recommendations</h3>
            <ul className={styles.toolText}>
              {getRecommendations(result.categories).map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
        </motion.div>
      )}

      {showJournalModal && (
        <div className={styles.journalModalOverlay}>
          <div className={styles.journalModalContent}>
            <span className={styles.modalCloseBtn} onClick={() => setShowJournalModal(false)}>×</span>
            <Journal entries={journal} save={setJournal} />
          </div>
        </div>
      )}
    </div>
  );
}
