import React from "react";
import { Route, Routes } from "react-router-dom";
import One from "./Components/One";
import Nav from "./Components/Nav";
import Two from "./Components/Two";
import Three from "./Components/Three";
import Four from "./Components/Four";
import Five from "./Components/Five";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/four" element={<Four />} />
        <Route path="/five" element={<Five/>} />

      </Routes>
    </>
  );
};

export default App;
