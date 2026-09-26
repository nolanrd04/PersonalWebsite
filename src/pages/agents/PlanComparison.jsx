import AgentPage from './AgentPage';

const dir = '/assets/images/plan_comparison';

const features = [
  {
    title: '1. Upload',
    image: `${dir}/Screenshot 2026-09-26 120156.png`,
    description: 'The user uploads two files to be compared.',
  },
  {
    title: '2. Pre-Processing',
    image: `${dir}/Screenshot 2026-09-26 120237.png`,
    description: 'Files are pre-processed deterministically to get the most accurate results.',
  },
  {
    title: '3. Semantic Comparison',
    image: `${dir}/Screenshot 2026-09-26 120313.png`,
    description: 'Sheets are semantically compared based on deterministic grouping.',
  },
  {
    title: '4. Verification',
    image: `${dir}/Screenshot 2026-09-26 120505.png`,
    description:
      'Once the changes are detected, a final summary LLM verifies low confidence results.',
  },
  {
    title: '5. Summary',
    image: `${dir}/Screenshot 2026-09-26 120619.png`,
    description: 'The changes are summarized.',
  },
  {
    title: '6. Review',
    images: [
      `${dir}/Screenshot 2026-09-26 120722.png`,
      `${dir}/Screenshot 2026-09-26 120952.png`,
    ],
    description: 'The user can review all changes detected by the LLMs.',
  },
];

export default function PlanComparison() {
  return (
    <AgentPage
      title="Plan Comparison"
      tagline="Spot changes between plan revisions"
      description="Often, engineers will need to make revisions to their plans in order to get approved by the city for development. Sometimes the changes are small and can get missed by people, or there are so many changes it takes large amounts of time. This agent offers a way to have an LLM detect all the changes for you and a thorough way to trace how it reached its conclusions."
      features={features}
    />
  );
}
