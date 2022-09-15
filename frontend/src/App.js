import React from "react"
import Routers from "./Routers.js"
import { BrowserRouter } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App