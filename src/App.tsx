import React, { useState } from 'react';
import './App.css';
import EditorView from './components/Editor/EditorView';
import Preview from './components/Preview/Preview';
import { EditorState } from 'draft-js';
import { useCVData } from './hooks/cvDataHook';

function App() {
  const [cvData, updateCVData] = useCVData();
  const [fileItem, setFileItem] = useState<{ url?: string; isUploaded: boolean }>({
    url: undefined,
    isUploaded: false,
  });
  const [progressPercent, setProgressPercent] = useState<number>(10);
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

  return (
    <div className="App">
      <main className="overflow-y-auto">
        <EditorView
          handleInputChange={updateCVData}
          setFileItem={setFileItem}
          fileItem={fileItem}
          progressPercent={progressPercent}
          editorState={editorState}
          setEditorState={setEditorState}
        />
        <Preview
          cvData={cvData}
          fileItem={fileItem}
          progressPercent={progressPercent}
          setProgressPercent={setProgressPercent}
          editorState={editorState}
        />
      </main>
    </div>
  );
}

export default App;
