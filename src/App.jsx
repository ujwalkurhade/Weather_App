import { useState } from "react";
import "./App.css";
import Shower from "./component/Shower";
import Home from ".//component/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="Hero">
      <Shower />
      <Home />
    </div>
  );
}

export default App;
