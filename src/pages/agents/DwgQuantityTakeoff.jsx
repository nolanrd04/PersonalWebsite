import { useEffect, useState } from 'react';
import AgentPage from './AgentPage';
import styles from './AgentPage.module.css';

const dir = '/assets/images/dwg_qty';

// actual_table.txt is a markdown table, generated_table.txt is tab-separated
function parseMarkdown(text) {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('|') && !/^\|[\s|:-]+\|$/.test(line))
    .map((line) => line.replace(/^\||\|$/g, '').split('|').map((cell) => cell.trim()));
}

function parseTsv(text) {
  return text
    .split('\n')
    .filter((line) => line.trim())
    .map((line) => line.split('\t').map((cell) => cell.trim()));
}

function Table({ title, rows }) {
  if (!rows) return null;
  const [header, ...body] = rows;
  return (
    <div>
      <h3>{title}</h3>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {header.map((cell, i) => (
                <th key={i}>{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, r) => (
              <tr key={r}>
                {row.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function QuantityTables() {
  const [generated, setGenerated] = useState(null);
  const [actual, setActual] = useState(null);

  useEffect(() => {
    fetch(`${dir}/generated_table.txt`)
      .then((res) => res.text())
      .then((text) => setGenerated(parseTsv(text)));
    fetch(`${dir}/actual_table.txt`)
      .then((res) => res.text())
      .then((text) => setActual(parseMarkdown(text)));
  }, []);

  return (
    <div className={styles.tableGroup}>
      <Table title="Generated Quantity Sheet" rows={generated} />
      <Table title="Actual Quantity Sheet" rows={actual} />
    </div>
  );
}

const features = [
  {
    title: '1. Upload & Overview',
    image: `${dir}/Screenshot 2026-09-25 174159.png`,
    description:
      'The user uploads a DWG file and the model gets an overview of it.',
  },
  {
    title: '2. Company Data',
    image: `${dir}/Screenshot 2026-09-25 174234.png`,
    description: 'The model pulls company data and naming conventions.',
  },
  {
    title: '3. Agent Loop',
    images: [
      `${dir}/Screenshot 2026-09-25 174257.png`,
      `${dir}/Screenshot 2026-09-25 174301.png`,
    ],
    description:
      'The model parses through the data in an agent loop, creating visual evidence along the way.',
  },
  {
    title: '4. Evidence Map',
    image: `${dir}/Screenshot 2026-09-25 174558.png`,
    description: 'The model creates an evidence map so we can see its measurements.',
  },
  {
    title: '5. Quantity Sheet',
    description:
      'The model outputs the quantity sheet. Compare the generated table to the actual table below.',
    content: <QuantityTables />,
  },
  {
    title: '6. Verify',
    images: [
      `${dir}/Screenshot 2026-09-25 175008.png`,
      `${dir}/Screenshot 2026-09-25 175054.png`,
    ],
    description:
      'We can use the camera view to render its measurements, compare them to the actual file, and verify.',
  },
];

export default function DwgQuantityTakeoff() {
  return (
    <AgentPage
      title=".dwg to Quantity Takeoff"
      tagline="Automated takeoffs from drawing files"
      description="This agent takes a .dwg AutoCAD file, parses through it, compares it to company data, and generates a quantity sheet to measure how much work needs to be done for the project. The reason we can't use a program to do this is because different engineering firms use different naming conventions and patterns. What we can do is give LLMs the tools needed to deterministically parse through these files to measure evidence, then render that evidence so we can quickly verify it."
      features={features}
    />
  );
}
