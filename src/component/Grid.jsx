import React from "react";
import Clear from "../assets/Clear.png";
import Sleet from "../assets/Sleet.png";
import Lightrain from "../assets/Lightrain.png";
import Thunderstorm from "../assets/Thunderstorm.png";
import Lightclound from "../assets/LightCloud.png";

function Grid() {
  return (
    <div>
      <div className="colume">
        <div className="card">
          <p>Tommer</p>
          <div className="img">
            <img src={Clear} alt="" className="img1" />
            <img src={Sleet} alt="" className="img2" />
          </div>
          <p>°16 &nbsp;&nbsp; °11</p>
        </div>
        <div className="card">
          <p>Sun, 8Jun</p>
          <div className="img">
            <img src={Clear} alt="" className="img1" />
            <img src={Sleet} alt="" className="img2" />
          </div>
          <p>°16 &nbsp;&nbsp; °11</p>
        </div>
        <div className="card">
          <p>Mon, 9Jun</p>
          <div className="img">
            <img src={Clear} alt="" className="img1" />
            <img
              src={Thunderstorm}
              alt=""
              className="img2"
            />
          </div>
          <p>°16 &nbsp;&nbsp; °11</p>
        </div>
        <div className="card">
          <p>Tus, 9Jun</p>
          <div className="img">
            <img
              src={Lightclound}
              alt=""
              className="img3"
            />
          </div>
          <p>°16 &nbsp;&nbsp; °11</p>
        </div>
        <div className="card">
          <p>Web, 10Jun</p>
          <div className="img">
            <img src={Lightrain} alt="" className="img3" />
          </div>
          <p>°16 &nbsp;&nbsp; °11</p>
        </div>
      </div>
    </div>
  );
}

export default Grid;
