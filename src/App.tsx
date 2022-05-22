// import React, { useState } from 'react';
import './App.css';
import EditorView from './components/Editor/EditorView';
import Preview from './components/Preview/Preview';

function App() {
  return (
    <div className="App">
      <main className="overflow-y-auto">
        <EditorView />
        <Preview />
      </main>
    </div>
  );
}

export default App;
