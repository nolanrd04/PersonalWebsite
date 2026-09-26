import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

export default function AiAgents() {
  const agents = [
    {
      id: 1,
      title: '.dwg to Quantity Takeoff',
      description: 'Reads .dwg drawing files and produces a quantity takeoff automatically.',
      link: '/projects/AiAgents/dwg-quantity-takeoff',
    },
    {
      id: 2,
      title: 'Quick Proposal Generator',
      description: 'Estimates how much a job would cost from a set of plans and company data.',
      link: '/projects/AiAgents/proposal-generator',
    },
    {
      id: 3,
      title: 'Plan Comparison',
      description: 'Compares two versions of a plan and highlights what changed.',
      link: '/projects/AiAgents/plan-comparison',
    },
    {
      id: 4,
      title: 'Project Manager',
      description: 'Helps keep projects on track by managing tasks, timelines, and updates.',
      link: '/projects/AiAgents/project-manager',
    },
  ];

  return (
    <div className={styles.projects}>
      <section className="section-spacing">
        <div className="container">
          <h1>AI Agents</h1>
          <p className={styles.intro}>
            AI agents I have built to automate real-world workflows.
          </p>

          <div className={styles.grid}>
            {agents.map((agent) => (
              <div key={agent.id} className={`${styles.card} glow-effect`}>
                <h3>{agent.title}</h3>
                <p className={styles.description}>{agent.description}</p>
                <Link to={agent.link} className={styles.button}>
                  View Agent →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
