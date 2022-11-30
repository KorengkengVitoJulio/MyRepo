//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
  
function App() {
  return (
    
    <div>
      <Header />
      <Navbar/>
      <About/>
      <Resume/>
    </div>
  );
}

export default App;
