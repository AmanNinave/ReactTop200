// App.js
import React, { lazy, Suspense } from "react";

const CodeSplit = lazy(() => import("./14-Code Splitting/1-CodeSplit"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CodeSplit />
      </Suspense>
    </div>
  );
}
export default App;


