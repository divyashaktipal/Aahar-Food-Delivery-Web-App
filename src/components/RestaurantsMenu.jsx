import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import ShimmerUI from "./ShimmerUI";

const RestaurantsMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId=226983&query=South%20Indian&submitAction=ENTER&source=collection"
    );
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <ShimmerUI />;
  }

  // Why Use || {} in Destructuring?
  // This line means:
  // Try to destructure properties from resInfo?.cards[2]?.card?.card?.info.
  // If that expression evaluates to undefined or null, fall back to an empty object {} so that destructuring doesn’t throw an error.
  // Without || {}
  // If resInfo is null or cards[2] is missing, then:
  // This is exactly the error you saw in DevTools:
  // TypeError: Cannot destructure property 'cuisines' of '(intermediate value)' as it is undefined.
  const {
    cuisines,
    avgRating,
    costForTwoMessage,
    areaName,
    name,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info;

  const {DosaItemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info;
  const {riceCounterCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  // Ternary operator
  return (
    <div className="menu">
      <h1>{name}</h1>
      <div className="resMenuInfo">
        <div className="resDes1">
          <div className="resSpace"></div>
          <div className="resRating">
            <span>
              <h3>
                {avgRating}({totalRatingsString})
              </h3>
            </span>
            <span className="separator">
              <h3>•</h3>
            </span>
            <span>
              <h3>{costForTwoMessage}</h3>
            </span>
          </div>
          <div className="resCuisines">
            <h3>{cuisines.join(",")}</h3>
          </div>
          <div className="resOutTime">
            <span className="resAddress">
              <h3> • Outlet: {areaName}</h3>
            </span>
            <span>
              <h3>• Time: 
                {/* separate the values with a string or JSX element:
                    Option 1: Template Literal (Recommended) */}
                {`${resInfo?.cards[2]?.card?.card?.info?.sla?.minDeliveryTime} - ${resInfo?.cards[2]?.card?.card?.info?.sla?.maxDeliveryTime} mins`}
                {/* Option 2: Concatenation */}
                {/* <h3>{resInfo?.cards[2]?.card?.card?.info?.sla?.minDeliveryTime + " - " + resInfo?.cards[2]?.card?.card?.info?.sla?.maxDeliveryTime + " mins"}</h3>*/}
              </h3>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantsMenu;
