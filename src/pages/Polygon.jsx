import styles from './Polygon.module.css';

export default function Polygon() {
  return (
    <div className={styles.polygon}>
      {/* Hero Section */}
      <section className={`${styles.hero} gradient-bg`}>
        <div className={styles.heroContent}>
          <h1>Polygon</h1>
          <p className={styles.tagline}>Rogue-Like Video Game</p>
          <p className={styles.description}>
            A from-scratch rogue-like game project where the player must survive as long as possible against enemies that grow stronger!
            This game has lots of unique enemies and upgrades and a boss that will push players to their limits!
          </p>
          <a
            href="https://polygonsurvival.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.demoButton}
          >
            Try Demo (PC and MOBILE!)
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="section-spacing">
        <div className="container">
          <h2>About Polygon</h2>
          <p className={styles.mainDescription}>
            Polygon is a rogue-like survival game where you play as a polygon fighting off waves of enemies that grow progressively stronger. Manage your resources, strategically upgrade your character, and survive as long as possible against increasingly difficult challenges and powerful bosses.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>Wave-Based Survival</h3>
              <p>Face endless waves of enemies that scale in difficulty. Survive longer to unlock greater rewards and face tougher challenges</p>
            </div>
            <div className={styles.feature}>
              <h3>Deep Upgrade System</h3>
              <p>Unlock and customize unique upgrades to enhance your polygon's abilities, creating diverse playstyles and strategies</p>
            </div>
            <div className={styles.feature}>
              <h3>Boss Encounters</h3>
              <p>Take on powerful bosses that test your skills and strategy. Each boss presents unique mechanics to master</p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <h3>Try It Out</h3>
            <p>
              Polygon is playable now! Jump into the demo and see how long you can survive. Can you defeat the boss and master all the upgrades?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
