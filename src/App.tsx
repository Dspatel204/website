import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./product.css"
import Home from "./Home";
import Header from "./Header";
import ProductPage from "./ProductPage";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
