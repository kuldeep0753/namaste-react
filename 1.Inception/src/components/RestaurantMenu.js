import { resData } from "../utils/mockData";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
export const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(resData);
  const param=useParams();
  console.log(param);
  useEffect(() => {
    setResInfo(resData);
  }, []);
  console.log(resInfo);
  const { name, cuisines, costForTwoString } = resInfo[1]?.data;
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <li className="menu">
      <h1>{name}</h1>
     <strong><i>{cuisines.join(",")}-{costForTwoString}</i></strong> 
      <h2></h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </li>
  );
};
