import React from "react";

function Todayhighlite() {
  return (
    <div>
      <h2>Today HighLights</h2>
      <div className="highlight">
        <div className="highlightCard">
          <h3>Wind staus</h3>
          <p>7 mph</p>
          <h4>WSW</h4>
        </div>
        <div className="highlightCard">
          <h3>Humidity</h3>
          <p>84 %</p>
          <h4>WSW</h4>
        </div>
        <div className="highlightCard">
          <h3>Visibility</h3>
          <p>6,4 miles</p>
        </div>
        <div className="highlightCard">
          <h3>Air Pressure</h3>
          <p>998 mb</p>
        </div>
      </div>
    </div>
  );
}

export default Todayhighlite;
