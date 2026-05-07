import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>&copy; {currentYear} Nolan DeSchryver. All rights reserved. Just kidding this isn't copyrighted.</p>
          <div className={styles.links}>
            <a
              href="https://www.youtube.com/@MintGamingYT"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <a
              href="https://github.com/nolanrd04"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
