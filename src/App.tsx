import React, { useState } from 'react';
import './App.css';
import Editor from './components/Editor/Editor';
import Preview from './components/Preview/Preview';
import { useCVData } from './hooks/cvDataHook';

function App() {
  const [cvData, updateCVData] = useCVData();
  const [fileItem, setFileItem] = useState<{ url?: string; isUploaded: boolean }>({
    url: undefined,
    isUploaded: false,
  });
  const [progressPercent, setProgressPercent] = useState<number>(10);

  return (
    <div className="App">
      <main className="overflow-y-auto">
        <Editor
          handleInputChange={updateCVData}
          setFileItem={setFileItem}
          fileItem={fileItem}
          progressPercent={progressPercent}
        />
        <Preview
          cvData={cvData}
          fileItem={fileItem}
          progressPercent={progressPercent}
          setProgressPercent={setProgressPercent}
        />
      </main>
    </div>
  );
}

export default App;
