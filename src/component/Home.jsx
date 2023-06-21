import React, { useEffect, useState } from "react";
import Todayhighlite from "./Todayhighlite";
import Grid from "./grid";
import axios from "axios";
const api_key = import.meta.env.VITE_API_KEY;

function Home() {
  const [whetherData, setWhetherData] = useState(null);
  const fetchData = async () => {
    const res = await axios.get(`http://jsonblob.com/api/1120565027160735744`);

    // setWhetherData(res.data);
  };

  return (
    <div className="home">
      <div className="Degree_Celsius">
        <div className="degree"> °C</div>
        <div
          className="degree"
          style={{
            backgroundColor: "rgb(30, 33, 58)",
            color: "white",
          }}
        >
          °F
        </div>
      </div>

      <div>
        <Grid />
      </div>
      <div className="higlite">
        <Todayhighlite />
      </div>
    </div>
  );
}

export default Home;

// new Ways of writing code Es6 Es7
//
