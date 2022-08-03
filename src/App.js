import React from "react";
import ContextState from "./Contexts/ContextState";
import ContextUse from "./ContextUse";

function App() {
  return (
   <ContextState>
    <ContextUse/>
   </ContextState>
  )
}

export default App;
