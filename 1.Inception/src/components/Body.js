import { React, useState, useEffect } from "react";
import Card from "./Card";
import { resData } from "../utils/mockData";
import { swiggy_api_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resData);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  console.log(listOfRestaurant);
  useEffect(() => {
    // console.log("USEEFFECT");
    // fetchData();
    setListOfRestaurant(resData);
    setFilteredRestaurant(resData);
  }, []);
  // console.log("after useeffect");
  // const fetchData = async () => {
  //   const data = await fetch(swiggy_api_URL); //add extenison in chrome
  //   const json = await data.json();
  //   console.log(json);
  // };
  // if(listOfRestaurant.length === 0){
  //   return <h1>Loading...</h1>;
  // }
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="app-body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            //Filter the restaurant
            console.log(searchText);
            console.log(listOfRestaurant);
            const filteredRestaurant = listOfRestaurant.filter(res =>
              res.data.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log(filteredRestaurant);
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
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
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="card-flex">
        {filteredRestaurant.map(restaurant => (
          <Link key={restaurant.data.id} to={"/restaurant/"+restaurant.data.id}>
            {" "}
            <Card key={restaurant.data.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
