import AgentPage from './AgentPage';

const dir = '/assets/images/quick_proposal';

const features = [
  {
    title: '1. Upload & Model Selection',
    image: `${dir}/Screenshot 2026-09-25 233022.png`,
    description: 'The user uploads their plans and selects their vision and manager model.',
  },
  {
    title: '2. Pre-Processing',
    image: `${dir}/Screenshot 2026-09-26 115158.png`,
    description: 'The files are pre-processed and company data is loaded.',
  },
  {
    title: '3. Page Classification',
    image: `${dir}/Screenshot 2026-09-26 115251.png`,
    description: 'Pages are classified and boxed.',
  },
  {
    title: '4. Vision Loop',
    image: `${dir}/Screenshot 2026-09-26 115531.png`,
    description:
      'A vision loop enhances images to change context tokens and get information more accurately.',
  },
  {
    title: '5. Manager Verification',
    image: `${dir}/Screenshot 2026-09-26 115644.png`,
    description:
      'A manager verifies enough information is present and accurate to bid on. If not, the vision loop continues.',
  },
  {
    title: '6. Company Data (RAG)',
    image: `${dir}/Screenshot 2026-09-26 115825.png`,
    description:
      'The manager uses RAG to pull relevant company data based on the given job to bill accurately.',
  },
  {
    title: '7. Final Bid',
    image: `${dir}/Screenshot 2026-09-26 120041.png`,
    description: 'The manager finalizes its bid with the confidence band.',
  },
];

export default function ProposalGenerator() {
  return (
    <AgentPage
      title="Quick Proposal Generator"
      tagline="Proposals in minutes"
      description="The quick proposal agent takes a set of plans, pulls company data, and estimates how much that job would cost. This agent uses two loops, as different LLMs have different strengths. In my opinion, Gemini is best at vision and Claude at reasoning, so they work together to extract data visually as the PDFs are usually not rasterized."
      features={features}
    />
  );
}
