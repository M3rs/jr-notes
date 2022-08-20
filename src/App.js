import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NewRecruit from './NewRecruit';
import MainToon from './MainToon';

function App() {
  const [offName, setOffName] = useState('');
  const [recruitName, setRecruitName] = useState('');

  const date = new Date().toISOString().slice(5, 10).replace('-', '/');

  return (
    <div className="App">
      <h1>JR Notes</h1>
      <MainToon />

    </div>
  );
}

export default App;
