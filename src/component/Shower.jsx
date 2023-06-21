import React from "react";
import shower from "../assets/Shower.png";
function Shower({ setCount, whetherData }) {
  console.log(whetherData);
  const handleclik = () => {
    setCount(true);
  };
  const date = new Date();
  console.log(date);
  return (
    <div className="shower">
      <div className="search">
        <button className="searchbtn" onClick={handleclik}>
          Search for places
        </button>
        <div className="location">
          <i className="bx bx-current-location"></i>
        </div>
      </div>
      <img src={shower} alt="" />
      <div className="Tempracher">
        <h1>
          {whetherData?.main?.temp} <samp>°C</samp>
        </h1>
        <h2> {whetherData?.weather[0]?.main}</h2>
        <div className="data">
          <p> </p>
          <i className="bx bx-location-plus">{whetherData?.name}</i>
        </div>
      </div>
    </div>
  );
}

export default Shower;
