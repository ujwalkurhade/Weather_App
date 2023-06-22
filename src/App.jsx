import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import LeftAside from "./components/LeftAside";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>React Router</h1>

      <div className="home">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas tempore saepe ratione vero eum at in facere quasi. Modi quasi
        animi suscipit facere repellat repudiandae tempora, dolorem aliquam doloremque?
      </div>
      <div className="flex">
        <LeftAside />
        <div style={{ width: "100%" }}>
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> */}

            {/* <About /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
