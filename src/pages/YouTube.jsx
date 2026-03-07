import styles from './YouTube.module.css';
import stats from '../data/stats.json';

export default function YouTube() {
  const channels = [
    {
      id: 1,
      name: 'Mint Gaming',
      handle: '@MintGamingYT',
      description:
        'Main channel featuring game development, modding tutorials, project showcases, and gaming content.',
      url: 'https://www.youtube.com/@MintGamingYT',
      color: '#ff4444',
      subscribers: stats.youtube.main_subs,
    },
    {
      id: 2,
      name: 'Mint Gaming Terraria',
      handle: '@mintgamingterraria',
      description: 'Dedicated to Terraria content, mods, boss guides, and comprehensive tutorials.',
      url: 'https://www.youtube.com/@mintgamingterraria',
      color: '#ff6666',
      subscribers: stats.youtube.second_subs,
    },
  ];

  return (
    <div className={styles.youtube}>
      <section className="section-spacing">
        <div className="container">
          <h1>YouTube Channels</h1>
          <p className={styles.intro}>
            Subscribe to stay updated on game development, tutorials, project showcases, and gaming content.
          </p>

          <div className={styles.grid}>
            {channels.map((channel) => (
              <div
                key={channel.id}
                className={`${styles.card} glow-effect`}
                style={{ '--accent-color': channel.color }}
              >
                <div className={styles.header}>
                  <h2>{channel.name}</h2>
                  <p className={styles.handle}>{channel.handle}</p>
                  <p className={styles.subscribers}>{channel.subscribers.toLocaleString()} subscribers</p>
                </div>
                <p className={styles.description}>{channel.description}</p>
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Visit Channel →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
