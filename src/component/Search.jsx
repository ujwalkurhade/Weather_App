import React from "react";

function Search({ setCount }) {
  const handleclik = () => {
    setCount(false);
  };
  return (
    <div className="SearchFild">
      <div>
        <i
          class="bx bx-x"
          style={{ float: "right" }}
          onClick={handleclik}
        ></i>
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
          <i class="bx bx-search"></i>
          <input type="text" />
        </div>
        <button className="searchbtn2">Search</button>
      </div>
    </div>
  );
}

export default Search;
