import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css"
import Blog from "./blog/Blog";
import Footer from "./pagina/footer/Footer";


import Home from "./pagina/home/Home";
import Nav from "./pagina/nav/Nav";



function App() {




  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Blog></Blog>}></Route>
          <Route path="/EncurtaUrl" element={<Home></Home>}></Route>
        </Routes>

     <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
