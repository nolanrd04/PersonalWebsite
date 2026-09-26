import AgentPage from './AgentPage';

// Add screenshots here: { image: '/assets/images/...', title: '...', description: '...' }
const features = [];

export default function ProjectManager() {
  return (
    <AgentPage
      title="Project Manager"
      tagline="An AI assistant for running projects"
      description="Coming soon."
      features={features}
    />
  );
}
