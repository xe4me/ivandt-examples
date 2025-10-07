'use client'
import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setIsOpen(false);
  };

  return (
    <>
      <button 
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme menu"
      >
        {theme === 'light' ? '☀️' : '🌙'}
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
            <h2>Choose Theme</h2>
            <button 
              className={`${styles.themeOption} ${theme === 'light' ? styles.active : ''}`}
              onClick={toggleTheme}
            >
              <span className={styles.icon}>☀️</span>
              <span>Light Mode</span>
            </button>
            <button 
              className={`${styles.themeOption} ${theme === 'dark' ? styles.active : ''}`}
              onClick={toggleTheme}
            >
              <span className={styles.icon}>🌙</span>
              <span>Dark Mode</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
