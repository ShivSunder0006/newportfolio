import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'highlight.js/styles/atom-one-dark.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <div className="bg-space-blue min-h-screen font-sans selection:bg-neon-cyan selection:text-space-blue w-full overflow-hidden">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main className="w-full flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
