import React from "react";
import DnDFlow from "./DnDFlow/DnDFlow";
import Header from "./components/header";
import AsideToolbar from "./components/asidetools";
import MyComponent  from "./store";
function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
         

      <Header />
      <MyComponent />
      <DnDFlow />
      <AsideToolbar />

    </div>
  );
}
export default App;
