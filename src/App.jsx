import { useState } from "react";
import "./App.css";
import Shower from "./component/Shower";
import Home from ".//component/Home";
import Search from "./component/Search";

function App() {
  const [count, setCount] = useState(false);

  return (
    <div className="Hero">
      {count ? <Search setCount={setCount} /> : <Shower setCount={setCount} />}
      <Home />
    </div>
  );
}

export default App;
