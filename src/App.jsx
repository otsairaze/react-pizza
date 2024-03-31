import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./scss/app.scss";
import Header from "./scss/components/Header/Header";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Cart from "./pages/Cart";

export const SearchContext = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <>
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/not-found" element={<NotFound />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </>
  );
}

export default App;
