import { useState } from "react";
import "./App.css";
import EditorView from "./components/EditorView/EditorView";
import { PagesView } from "./components/PagesView/PagesView";

function App() {
  const [isFullPreview, setIsFullPreview] = useState(false);

  return (
    <div className="App">
      <EditorView isFullPreview={isFullPreview} />
      <PagesView
        isFullPreview={isFullPreview}
        setIsFullPreview={setIsFullPreview}
      />
    </div>
  );
}

export default App;
