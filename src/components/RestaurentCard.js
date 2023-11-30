import { CDN_URL } from "../utils/constants";
const RestaurentCard = (props) => {
  console.log(props);
  const { cloudinaryImageId, name, cuisines, avgRating } = props.resData;
  const { deliveryTime } = props.resData.sla;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(" ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurentCard;
