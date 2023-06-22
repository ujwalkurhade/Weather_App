import React from "react";
import { Link } from "react-router-dom";

function LeftAside() {
  return (
    <div className="leftAside">
      <Link to={"about"}>About</Link>
      <Link to={""}>Home</Link>
    </div>
  );
}

export default LeftAside;
