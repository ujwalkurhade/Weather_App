import React, { useEffect } from "react";
import Todayhighlite from "./Todayhighlite";
import Grid from "./grid";
import axios from "axios";

function Home() {
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
