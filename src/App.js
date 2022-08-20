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
          This is a Work-In-Progress and may have bugs
        </footer>
      </div>
    </Router>
  );
}

export default App;
