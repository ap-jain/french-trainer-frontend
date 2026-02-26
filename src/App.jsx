import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import Dashboard from './pages/Dashboard';
import TopicBrowser from './pages/TopicBrowser';
import Practice from './pages/Practice';
import Progress from './pages/Progress';
import Badges from './pages/Badges';
import './App.css';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="app-layout">
          <Navbar />
          <div className="app-body">
            <Sidebar />
            <main className="app-main">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/topics" element={<TopicBrowser />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/badges" element={<Badges />} />
              </Routes>
            </main>
          </div>
          <MobileNav />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
