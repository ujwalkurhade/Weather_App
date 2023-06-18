import React from "react";
import Todayhighlite from "./Todayhighlite";
import Grid from "./grid";

function Home() {
  return (
    <div className="home">
      <div className="Degree_Celsius">
        <div className="degree">°F</div>
        <div
          className="degree"
          style={{
            backgroundColor: "rgb(30, 33, 58)",
            color: "white",
          }}
        >
          °C
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
