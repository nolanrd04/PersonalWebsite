import styles from './Resume.module.css';

export default function Resume() {
  return (
    <div className={styles.resume}>
      <section className="section-spacing">
        <div className="container">
          <h1>Resume</h1>

          <div className={styles.downloadSection}>
            <a
              href="/Resume_March2026.pdf"
              download="Resume_Nolan_Reyes.pdf"
              className={styles.downloadButton}
            >
              Download PDF
            </a>
          </div>

          <div className={styles.embedContainer}>
            <iframe
              src="/Resume_March2026.pdf"
              title="Resume - Nolan Reyes"
              className={styles.pdfEmbed}
            />
          </div>

          <div className={styles.fallback}>
            <p>
              If the PDF doesn't display above, you can{' '}
              <a href="/Resume_March2026.pdf" download="Resume_Nolan_Reyes.pdf">
                download the resume here
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
