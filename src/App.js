import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css"
import Home from "./pagina/home/Home";
import Nav from "./pagina/nav/Nav";



function App() {




  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
