import { React, useState, useEffect } from "react";
import Card from "./Card";
import { resData } from "../utils/mockData";
import { swiggy_api_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resData);
  console.log(listOfRestaurant);
  useEffect(() => {
    console.log("USEEFFECT");
    fetchData();
  }, []);
  console.log("after useeffect");
  const fetchData = async () => {
    const data = await fetch(swiggy_api_URL); //add extenison in chrome
    const json = await data.json();
    console.log(json);
  };
  return (
    <div className="app-body">
      <div className="search-items">
        {/* <input className="type-item" type="text" /> */}
        <button
          className="btn-search"
          onClick={() => {
            const filterRating = listOfRestaurant.filter(
              res => res.data.rating_text > 4
            );
            setListOfRestaurant(filterRating);
          }}
        >
          Filter Rating
        </button>
      </div>
      <div className="card-flex">
        {listOfRestaurant.map(restaurant => (
          <Card resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
