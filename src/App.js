import React from "react";
import { Route, Routes } from "react-router-dom";
import { Form } from "./Components/Form";
import { Overview } from "./Components/OverviewComponent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/patient" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
