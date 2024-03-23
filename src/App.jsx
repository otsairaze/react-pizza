import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./scss/app.scss";
import Header from "./scss/components/Header/Header";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/not-found" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
