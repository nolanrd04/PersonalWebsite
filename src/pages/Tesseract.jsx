import { useEffect, useState } from 'react';
import styles from './Tesseract.module.css';
import stats from '../data/stats.json';

export default function Tesseract() {
  return (
    <div className={styles.tesseract}>
      {/* Hero Section */}
      <section className={`${styles.hero} gradient-bg`}>
        <div className={styles.heroContent}>
          <h1>The Tesseract Mod</h1>
          <p className={styles.tagline}>A Terraria Content Mod</p>
          <a
            href="https://steamcommunity.com/sharedfiles/filedetails/?id=3145853337"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.steamButton}
          >
            View on Steam Workshop
          </a>
        </div>
      </section>

      {/* Description Section */}
      <section className="section-spacing">
        <div className="container">
          <h2>About The Tesseract Mod</h2>
          <p className={styles.description}>
            The Tesseract is a comprehensive Terraria content mod featuring new weapons, items, and enemies. Designed to complement vanilla gameplay while adding unique flair and quality-of-life improvements. With thousands of downloads on Steam Workshop, this mod is actively developed with new content continuously being added.
          </p>

          <div className={styles.statsContainer}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{stats.mod_downloads.toLocaleString()}+</div>
              <div className={styles.statLabel}>Downloads</div>
            </div>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>New Weapons</h3>
              <p>Lots of new weapons to match the vanilla game-style while adding my own, unique flair</p>
            </div>
            <div className={styles.feature}>
              <h3>New Items</h3>
              <p>New items to help the player progress and improve on quality of life</p>
            </div>
            <div className={styles.feature}>
              <h3>New enemies</h3>
              <p>Lots of simple enemies to fit the theme, as well as a "coming soon" boss!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="section-spacing">
        <div className="container">
          <h2>Gameplay Videos</h2>
          <div className={styles.videoGrid}>
            <div className={styles.videoWrapper}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/zb2UvVfyDw4"
                title="Tesseract Mod Showcase 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.videoWrapper}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/zb2UvVfyDw4"
                title="Tesseract Mod Showcase 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
