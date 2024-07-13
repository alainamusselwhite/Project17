//U67724813
import React from 'react';
import './App.css';
import TaskGenerator from './TaskGenerator';
import FancyText from './FancyText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FancyText title text="Task Management and Motivation App" />
      </header>
      <main>
        <TaskGenerator />
      </main>
      <footer>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;