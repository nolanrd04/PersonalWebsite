import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={`${styles.hero} gradient-bg`}>
        <div className={styles.heroContent}>
          <img
            src="/assets/images/profile.jpg"
            alt="Profile"
            className={styles.profileImage}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <h1>Nolan DeSchryver</h1>
          <p className={styles.tagline}>Software Developer | Content Creator | Game Designer</p>
          <div className={styles.buttonGroup}>
            <Link to="/projects" className={styles.ctaButton}>
              View My Work
            </Link>
            <a
              href="https://www.linkedin.com/in/nolandeschryver/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinButton}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-spacing">
        <div className="container">
          <h2>About Me</h2>
          <div className={styles.aboutContent}>
            <p>
              I'm a software developer and content creator focused on building innovative applications and games. With expertise in Data Analytics, Machine Learning, Content Creation, and full-stack development, I enjoy tackling complex technical challenges and sharing my knowledge through my YouTube channels.
              I am a senior Computer Science student and Grand Canyon University with an emphasis in Big Data Analytics
            </p>
            <p>
              My work spans various domains including Game Design through Terraria modding and Game Development,
              Data Analytics and Artificial Intelligence development, and practical software engineering. 
              I'm passionate about creating innovative projects, whether its for professional applications, YouTube videos, or for fun!
            </p>
            <div className={styles.highlightBox}>
              <p>
                <strong>Currently working on:</strong> Software projects, neural network applications, the Polygon rogue-like game, and the Tesseract Mod for Terraria.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
