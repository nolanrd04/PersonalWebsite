import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Prompt Hub',
      description: 'My most prized project! This is an internal application for the use of Paychex employees. It allows them to manage their LLM prompts all in one spot! The design is effective but intuitve for everyone to use.',
      link: '/projects/PromptHub',
      label: 'View Showcase',
      isExternal: false,
      category: 'Software',
    },
    {
      id: 2,
      title: 'Neural Network Projects',
      description: 'A comprehensive portfolio of machine learning projects exploring neural networks, deep learning, and AI applications. See implementations and research across multiple domains.',
      link: 'https://cst-435-project-hub.vercel.app/home',
      label: 'View Projects',
      isExternal: true,
      category: 'Software',
    },
    {
      id: 3,
      title: 'Compiler',
      description: 'A full compiler implementation from scratch, covering lexical analysis, parsing, semantic analysis, and code generation. Demonstrates deep understanding of language design and implementation.',
      link: 'https://github.com/nolanrd04/CST-405-public/tree/main',
      label: 'View on GitHub',
      isExternal: true,
      category: 'Software',
    },
    {
      id: 4,
      title: 'Polygon',
      description: 'A personal project I have been working on just for fun. This is a rogue-like game where the player has to survive waves and upgrade their polygon! This includes several unique enemies, upgrades, playstyles, and of course bosses!.',
      link: '/polygon',
      label: 'Learn More',
      isExternal: false,
      category: 'Game',
    },
    {
      id: 5,
      title: 'The Tesseract Mod',
      description: 'A complex Terraria mod featuring new weapons, enemies, items, and mechanics. Available on Steam Workshop with thousands of downloads.',
      link: '/tesseract',
      label: 'Learn More',
      isExternal: false,
      category: 'Game',
    },
  ];

  return (
    <div className={styles.projects}>
      <section className="section-spacing">
        <div className="container">
          <h1>My Projects</h1>
          <p className={styles.intro}>
            Here are some of my proudest works spanning game development, AI, and software engineering.
          </p>

          <div className={styles.grid}>
            {projects.map((project) => (
              <div key={project.id} className={`${styles.card} glow-effect`}>
                <h3>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                {project.isExternal ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                  >
                    {project.label} →
                  </a>
                ) : (
                  <Link to={project.link} className={styles.button}>
                    {project.label} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
