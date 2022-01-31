import './App.css';
import FirstPage from './components/FirstPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import History from './components/History';
import Statistics from './components/Statistics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />}/>
        <Route path="/history" element={<History />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </Router>
  );
}

export default App;
