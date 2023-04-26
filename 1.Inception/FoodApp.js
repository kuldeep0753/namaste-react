import React from "react";
import ReactDOM from "react-dom/client";
import "./FoodApp.css";
/**
 * Header
 *   -Logo
 *   -Nav bar
 *  Body
 *      -Search bar
 *      -Card
 *          -image
 *          -para
 *          -time
 *
 * Footer
 *      -copy right
 *      -links
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://cdn1.iconfinder.com/data/icons/cafe-and-restaurant/128/_Restaurant-1024.png"
          alt="not load"
          className="logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const data = [
  {
    info: {
      name: "Sri Udupi Food Hub",
      imageUrl:
        "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg",
      cuisine: ["South Indian,North Indian,Chinese,Sandwich,Street Food"],
      rating_text: "3.9",
      orderDeliveryTime: 18,
    },
  },
  {
    info: {
      name: "Madurai Idly Shop",
      imageUrl:
        "https://b.zmtcdn.com/data/pictures/chains/8/50628/f72101d8dfd889fe9d5d66b024f57147_o2_featured_v2.jpg",
      cuisine: ["South Indian"],
      rating_text: "3.2",
      orderDeliveryTime: 20,
    },
  },
  {
    info: {
      name: "Ayodhya Vihar Pure Veg",
      imageUrl:
        "https://b.zmtcdn.com/data/pictures/5/19064775/d42a7cbfe4c063481db8430a34bb51c6.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      cuisine: ["South Indian,North Indian,Chinese,Sandwich,Street Food"],
      rating_text: "4.2",
      orderDeliveryTime: 16,
    },
  },
  {
    info: {
      name: "Sri Udupi Food Hub",
      imageUrl:
        "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg",
      cuisine: ["South Indian,North Indian,Chinese,Sandwich,Street Food"],
      rating_text: "3.9",
      orderDeliveryTime: 18,
    },
  },
  {
    info: {
      name: "Sri Udupi Food Hub",
      imageUrl:
        "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg",
      cuisine: ["South Indian,North Indian,Chinese,Sandwich,Street Food"],
      rating_text: "3.9",
      orderDeliveryTime: 18,
    },
  },
  {
    info: {
      name: "Sri Udupi Food Hub",
      imageUrl:
        "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg",
      cuisine: ["South Indian,North Indian,Chinese,Sandwich,Street Food"],
      rating_text: "3.9",
      orderDeliveryTime: 18,
    },
  },
  {
    info: {
      name: "Sri Udupi Food Hub",
      imageUrl:
        "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg",
      cuisine: ["South Indian,North Indian,Chinese,Sandwich,Street Food"],
      rating_text: "3.9",
      orderDeliveryTime: 18,
    },
  },
];

const Card = (props) => {
    const {resData}=props;
  const { imageUrl, name, cuisine, rating_text, orderDeliveryTime } =
    resData?.info;
  // console.log(props);
  return (
    <div className="rest-card">
      <div>
        <img src={imageUrl} alt="Bruitto" className="item-image" />
      </div>
      <h3 className="item-title">{name}</h3>
      <h4>{cuisine.join(",")}</h4>
      <h4>{rating_text} Stars</h4>
      <h4 className="time">{orderDeliveryTime} mins</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="app-body">
      <div className="search-items">
        <input className="type-item" type="text" />
        <button className="btn-search">Search</button>
      </div>
      <div className="card-flex">
        
        {data.map((restaurant)=><Card resData={restaurant} />)}
      </div>
    </div>
  );
};

const FoodApp = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FoodApp />);
