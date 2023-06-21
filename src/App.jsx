import { useEffect, useState } from "react";
import "./App.css";
import Shower from "./component/Shower";
import Home from ".//component/Home";
import Search from "./component/Search";
import axios from "axios";

function App() {
  const [count, setCount] = useState(false);
  const [WhetherData, setWhetherData] = useState(null);
  const key = "9de7ebd2d223fb01c9bead1530d58c84";
  const [city, setCity] = useState("nagpur");

  useEffect(() => {
    // axios.get('ttps://api.openweathermap.org/data/2.5/weather',{
    //   q:`${city},in`,
    //   appid:key,
    //   units:'metric'
    // }).then((res)=> console.log(res))
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city},in&appid=${key}&units=metric`)
      .then((res) => setWhetherData(res.data));
  }, [city]);
  return (
    <div className="Hero">
      {count ? <Search value={city} setCity={setCity} setCount={setCount} /> : <Shower whetherData={WhetherData} setCount={setCount} />}
      <Home />
    </div>
  );
}

export default App;
