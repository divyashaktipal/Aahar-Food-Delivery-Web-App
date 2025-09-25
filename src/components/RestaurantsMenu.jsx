import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantsMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [showDosa, setShowDosa] = useState(false);
  const [showRice, setShowRice] = useState(false);
  const [showIdliVada, setShowIdliVada] = useState(false);

  const { restaurantId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + restaurantId);
    const json = await data.json();
    // console.log(json);
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
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const DosaItemCards =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  // console.log(DosaItemCards);
  const riceCounterCards =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      ?.itemCards;

  const titles1 =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  const titles2 =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
  const titles3 =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;

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
              <h3>
                • Time:
                {/* separate the values with a string or JSX element:
                    Option 1: Template Literal (Recommended) */}
                {`${resInfo?.cards[2]?.card?.card?.info?.sla?.minDeliveryTime} - ${resInfo?.cards[2]?.card?.card?.info?.sla?.maxDeliveryTime} mins`}
                {/* Option 2: Concatenation */}
                {/* <h3>{resInfo?.cards[2]?.card?.card?.info?.sla?.minDeliveryTime + " - " + resInfo?.cards[2]?.card?.card?.info?.sla?.maxDeliveryTime + " mins"}</h3>*/}
                {/* {sla.minDeliveryTime} - {sla.maxDeliveryTime} mins */}
              </h3>
            </span>
          </div>
        </div>
      </div>

      {/*You can use this to check, if you don't understand the map().  */}
      {/* <h3>{DosaItemCards[0]?.card?.info?.name}</h3>
      <h3>{DosaItemCards[1]?.card?.info?.name}</h3> */}

      {/* Map() to showcase dosa item */}
      <center>
        <h3 className="menu">-: MENU :-</h3>
      </center>
      {/* Dosa Counter */}
      <div className="categoryHeader" onClick={() => setShowDosa(!showDosa)}>
        <h3>
          {titles1?.title}({titles1?.itemCards?.length}) {showDosa ? "▲" : "▼"}
        </h3>
      </div>

      {showDosa && (
        <div className="dosaCounter">
          {DosaItemCards?.map((dosaItem, id) => {
            const name = dosaItem?.card?.info?.name;
            const { description, price } = dosaItem?.card?.info || {};
            const { rating, ratingCountV2 } =
              dosaItem?.card?.info?.ratings?.aggregatedRating || {};

            return (
              <div key={id} className="dosaItems">
                <div className="normalDosaFlex">
                  <div className="dosaName">
                    <h4>{name}</h4>
                  </div>
                  <div className="dosaPrice">
                    <strong>₹{price / 100}</strong>
                  </div>
                  <div className="dosaRatings">
                    <p>
                      {rating} ({ratingCountV2}+ ratings)
                    </p>
                  </div>
                  <p>{description}</p>
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Rice Counter */}
      <div className="categoryHeader" onClick={() => setShowRice(!showRice)}>
        <h3>
          {titles2?.title} ({titles2?.itemCards?.length}) {showRice ? "▲" : "▼"}
        </h3>
      </div>
      {showRice && (
        <div className="riceCounter">
          {riceCounterCards?.map((item, id) => {
            const { name, description, price } = item?.card?.info || {};
            return (
              <div key={id} className="riceItems">
                <div className="normalDosaFlex">
                  <div className="dosaName">
                    <h4>{name}</h4>
                  </div>
                  <div className="dosaPrice">
                    <strong>₹{price / 100}</strong>
                  </div>
                  <p>{description}</p>
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div
        className="categoryHeader"
        onClick={() => setShowIdliVada(!showIdliVada)}
      >
        <h3>
          {titles3?.title} {showIdliVada ? "▲" : "▼"}
        </h3>
      </div>
      {showIdliVada && <div className="IdliVadaCounter"></div>}
    </div>
  );
};
export default RestaurantsMenu;
