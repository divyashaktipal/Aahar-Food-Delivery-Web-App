import { CDN_URL } from "../utils/constant";
import styleCard from "../utils/styleCard";

const RestaurantCard = ({ resData }) => {
  const {
  cloudinaryImageId,
  name,
  avgRating,
  costForTwo,
  cuisines = [],
} = resData?.card?.card?.info || {};


  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} stars</p>
      <p>{costForTwo}</p>
    </div>
  );
};
export default RestaurantCard;