import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AddText from "./pages/AddText";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-text" element={<AddText />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

//  <Router>
//    <Routes>
//      <Route path="/" element={<Home />} />
//    </Routes>
//  </Router>
