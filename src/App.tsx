import React from 'react';
import './App.css';
import Editor from './components/Editor/Editor';
import Preview from './components/Preview/Preview';
import { useCVData } from './hooks/cvDataHook';

function App() {
  const [cvData, updateCVData] = useCVData();

  return (
    <div className="App">
      <main className="overflow-y-auto">
        <Editor handleInputChange={updateCVData} />
        <Preview cvData={cvData} />
      </main>
    </div>
  );
}

export default App;
