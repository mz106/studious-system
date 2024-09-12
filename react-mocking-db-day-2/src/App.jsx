import "./App.css";

import { useEffect, useState } from "react";

import { getAllProducts } from "./services/api";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      console.log("!!!!!!!!!!");
      const data = await getAllProducts();
      console.log("product container data products: ", data);

      await setProducts([...data]);
    }

    getProducts();
  }, []);

  return (
    <div className="app-wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
