import React from 'react';
import './App.css';
import Editor from './components/Editor/Editor';
import Preview from './components/Preview/Preview';

function App() {
  return (
    <div className="App">
      <main className="overflow-y-auto">
        <Editor />
        <Preview />
      </main>
    </div>
  );
}

export default App;
