import { CDN_URL } from "../utils/constant";
import styleCard from "../utils/styleCard";

const RestaurantCard = (props) => {
  //or const RestaurantCard = ({resName, cuisine}) => {

  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.card.card.info;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      {/* <h4>{resData.card.card.info.name} */}
      {/* or  */}
      <h4>{name}</h4>
      <p>{cuisines.join(", ")}</p>
      <p> {avgRating} stars</p>
      <p> {costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
