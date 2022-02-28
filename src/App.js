import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Javascript from "./Components/Javascript";

function App() {
  return (
      <React.Fragment>
    <BrowserRouter>
        <Routes>
            <Route exact path="/" name="Javascript" element={<Javascript/>}/>
        </Routes>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
