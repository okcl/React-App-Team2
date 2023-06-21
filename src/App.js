import './App.scss';
import Footer from './components/Footer';
import { Lottery } from './components/Lottery';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Lottery/>
      <Footer/>
    </div>
  );
}

export default App;
