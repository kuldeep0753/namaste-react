import React from "react";

const Card = (props) => {
  const { resData } = props;
  const { imageUrl, name, cuisine, rating_text, orderDeliveryTime } =
    resData?.info;
  console.log(props);
  console.log(resData);
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
export default Card;
