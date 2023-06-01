import React from "react";
import Card from "./Card";
import data from "../utils/mockData";

const Body = () => {
  return (
    <div className="app-body">
      <div className="search-items">
        <input className="type-item" type="text" />
        <button className="btn-search">Search</button>
      </div>
      <div className="card-flex">
        {data.map((restaurant) => (
          <Card key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
