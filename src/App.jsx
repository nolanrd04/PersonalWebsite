import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Polygon from './pages/Polygon';
import Tesseract from './pages/Tesseract';
import YouTube from './pages/YouTube';
import Resume from './pages/Resume';
import PromptHub from './pages/PromptHub';
import AiAgents from './pages/AiAgents';
import DwgQuantityTakeoff from './pages/agents/DwgQuantityTakeoff';
import ProposalGenerator from './pages/agents/ProposalGenerator';
import PlanComparison from './pages/agents/PlanComparison';
import ProjectManager from './pages/agents/ProjectManager';
import './styles/globals.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/polygon" element={<Polygon />} />
            <Route path="/tesseract" element={<Tesseract />} />
            <Route path="/youtube" element={<YouTube />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects/PromptHub" element={<PromptHub />} />
            <Route path="/projects/AiAgents" element={<AiAgents />} />
            <Route path="/projects/AiAgents/dwg-quantity-takeoff" element={<DwgQuantityTakeoff />} />
            <Route path="/projects/AiAgents/proposal-generator" element={<ProposalGenerator />} />
            <Route path="/projects/AiAgents/plan-comparison" element={<PlanComparison />} />
            <Route path="/projects/AiAgents/project-manager" element={<ProjectManager />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
