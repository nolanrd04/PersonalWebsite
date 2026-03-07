import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Polygon from './pages/Polygon';
import Tesseract from './pages/Tesseract';
import YouTube from './pages/YouTube';
import Resume from './pages/Resume';
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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
