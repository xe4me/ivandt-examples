import styles from './success.module.css';

export default function Success() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>✓</h1>
        <h2 className={styles.heading}>Thanks for using Ivandt</h2>
        <p className={styles.message}>Your data has been successfully imported.</p>
      </div>
    </div>
  );
}
