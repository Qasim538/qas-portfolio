
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Router path="/" element={<Home />} />
        <Router path="/projects" element={<Projects />} />
        <Router path="/experience" element={<Experience />} />
      </Router>
      
    </div>
  );
}

export default App;
