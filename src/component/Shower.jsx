import React from "react";
import shower from "../assets/Shower.png";
function Shower() {
  return (
    <div className="shower">
      <div className="search">
        <button className="searchbtn">
          Search for places
        </button>
        <div className="location">
          <i className="bx bx-current-location"></i>
        </div>
      </div>
      <img src={shower} alt="" />
      <div className="Tempracher">
        <h1>
          15 <samp>°C</samp>
        </h1>
        <h2> Shower</h2>
        <div className="data">
          <p>Today . Fri 5 Jun</p>
          <i className="bx bx-location-plus">Mumbai</i>
        </div>
      </div>
    </div>
  );
}

export default Shower;
