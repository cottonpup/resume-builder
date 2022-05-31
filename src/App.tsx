// import React, { useState } from 'react';
import { useState } from 'react';
import './App.css';
import EditorView from './components/Editor/EditorView';
import { FullScreen } from './components/FullScreenViewer/FullScreen';
import Preview from './components/Preview/Preview';

function App() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div className="App">
      {/* <main className="overflow-y-auto"> */}
      {!isFullScreen && (
        <>
          <EditorView />
          <Preview isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen} />
        </>
      )}
      {isFullScreen && (
        <FullScreen isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen} />
      )}
      {/* </main> */}
    </div>
  );
}

export default App;
