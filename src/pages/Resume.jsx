import styles from './Resume.module.css';

export default function Resume() {
  return (
    <div className={styles.resume}>
      <section className="section-spacing">
        <div className="container">
          <h1>Resume</h1>

          <div className={styles.downloadSection}>
            <a
              href="/assets/ResumeNolanDeschryver092526.pdf"
              download="ResumeNolanDeschryver092526.pdf"
              className={styles.downloadButton}
            >
              Download PDF
            </a>
          </div>

          <div className={styles.embedContainer}>
            <iframe
              src="/assets/ResumeNolanDeschryver092526.pdf"
              title="Resume - Nolan DeSchryver"
              className={styles.pdfEmbed}
            />
          </div>

          <div className={styles.fallback}>
            <p>
              If the PDF doesn't display above, you can{' '}
              <a href="/assets/ResumeNolanDeschryver092526.pdf" download="ResumeNolanDeschryver092526.pdf">
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
