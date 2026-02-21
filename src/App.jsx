import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header"; 
import Footer from "./components/layout/Footer"; 

import Home from "./homePage/Home";
import Shop from "./shopPage/shop";
import Product from "./productPage/Product";
import Cart from "./cartPage/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;