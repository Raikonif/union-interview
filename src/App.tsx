import { useState } from "react";
import "./App.css";
import RoutesApp from "./routes/RoutesApp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
