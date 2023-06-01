import React from "react";

const Card = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { imageUrl, name, cuisines, rating_text, deliveryTime } =resData?.data;
  // console.log(cuisines);
  // console.log(resData);
  return (
    <div className="rest-card">
      <div>
        <img src={imageUrl} alt="Bruitto" className="item-image" />
      </div>
      <h3 className="item-title">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{rating_text} Stars</h4>
      <h4 className="time">{deliveryTime} mins</h4>
    </div>
  );
};
export default Card;
