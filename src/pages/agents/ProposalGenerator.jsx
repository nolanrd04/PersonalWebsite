import AgentPage from './AgentPage';

// Add screenshots here: { image: '/assets/images/...', title: '...', description: '...' }
const features = [];

export default function ProposalGenerator() {
  return (
    <AgentPage
      title="Quick Proposal Generator"
      tagline="Proposals in minutes"
      description="Coming soon."
      features={features}
    />
  );
}
