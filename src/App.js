import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NewRecruit from './NewRecruit';
import MainToon from './MainToon';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  const [offName, setOffName] = useState('');
  const [recruitName, setRecruitName] = useState('');

  const date = new Date().toISOString().slice(5, 10).replace('-', '/');

  return (
    <Router>
      <div className="App">
        <h1>JR Notes</h1>
        <MainToon />
        <footer>
          <p>This is a Work-In-Progress and may have bugs. Please double-check again generated guild notes for accuracy</p>
          <p>If you find any bugs, please feel free to contact Jedrzejczyk on Discord or via in-game mail.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
