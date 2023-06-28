import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.scss';
import HomePage from './pages/HomePage'; 
import TradingReward from './pages/TradingReward';
import Pools from './pages/Pools/Pools';
import PoolsHistory from './pages/Pools/History';

function App() {
  return (
    <div>
      <Navbar />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="trading-reward" element={<TradingReward />} />
          <Route path="/pools" element={<Pools />} />
          <Route path="/pools/history" element={<PoolsHistory />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
