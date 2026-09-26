import AgentPage from './AgentPage';

// Add screenshots here: { image: '/assets/images/...', title: '...', description: '...' }
const features = [];

export default function PlanComparison() {
  return (
    <AgentPage
      title="Plan Comparison"
      tagline="Spot changes between plan revisions"
      description="Coming soon."
      features={features}
    />
  );
}
