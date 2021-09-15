import "../../styles/homePage.scss";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const authUser = true;

function HomePage() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    console.log(searchInput);
  };

  if (!authUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="homePage">
      <div className="homePage__content">
        <div className="homepage--search">
          <div className="searchForm">
            <input
              className="searchInput"
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              className="BTN btn-search"
              onClick={() => {
                handleSearch();
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="homePage--resultContainer">display content</div>
      </div>
    </div>
  );
}

export default HomePage;
