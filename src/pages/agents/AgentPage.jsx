import { Link } from 'react-router-dom';
import styles from '../PromptHub.module.css';
import agentStyles from './AgentPage.module.css';

// Each feature can have a single `image`, several `images`, and/or extra `content`
// (any JSX) that is shown full width underneath the text.
export default function AgentPage({ title, tagline, description, features = [] }) {
  return (
    <div className={styles.promptHub}>
      <section className={`${styles.hero} gradient-bg`}>
        <div className={styles.heroContent}>
          <h1>{title}</h1>
          <p className={styles.tagline}>{tagline}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <Link to="/projects/AiAgents" className={agentStyles.back}>
            ← Back to AI Agents
          </Link>
          <div className={styles.showcase}>
            {features.map((feature, index) => {
              const images = feature.images ?? (feature.image ? [feature.image] : []);
              return (
                <div key={feature.title}>
                  <div
                    className={`${styles.feature} ${index % 2 === 1 ? styles.reversed : ''}`}
                  >
                    {images.length > 0 && (
                      <div className={agentStyles.imageStack}>
                        {images.map((src, i) => (
                          <div key={src} className={styles.imageWrapper}>
                            <img
                              src={src}
                              alt={`${feature.title} ${images.length > 1 ? i + 1 : ''}`}
                              className={styles.screenshot}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    <div className={styles.featureText}>
                      <h2>{feature.title}</h2>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                  {feature.content && (
                    <div className={agentStyles.content}>{feature.content}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
