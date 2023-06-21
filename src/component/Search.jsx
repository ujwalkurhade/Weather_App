import React, { useState } from "react";

function Search({ setCount, setCity }) {
  const handleclik = () => {
    setCity(value);
    setCount(false);
  };
  const [value, setValue] = useState("");
  return (
    <div className="SearchFild">
      <div>
        <i className="bx bx-x" style={{ float: "right" }} onClick={() => setCount(false)}></i>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginTop: "3.5rem",
        }}
      >
        <div className="search1">
          <i className="bx bx-search"></i>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
        <button className="searchbtn2" onClick={handleclik}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
