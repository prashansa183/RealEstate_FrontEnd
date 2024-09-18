import { useState } from "react";
import "./SearchBar.scss";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setquery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setquery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="search-bar">
      <div className="type">
        {types.map((type) => {
          return (
            <button key={type} onClick={() => switchType(type)}
              className={query.type === type ? "active" : ""}>
              {type}
            </button>
          );
        })}
      </div>
        <form action="">
          <input type="text" name="location" placeholder="City Location"/>

          <input
            type="text"
            name="minprice"
            min={0}
            max={10000000}
            placeholder="Min Price"
          />

          <input
            type="text"
            name="maxprice"
            min={0}
            max={10000000}
            placeholder="Max Price"
          />

          <button>
            <img src="/search.png" alt="" />
          </button>
        </form>
      </div>
    
  );
};

export default SearchBar;
