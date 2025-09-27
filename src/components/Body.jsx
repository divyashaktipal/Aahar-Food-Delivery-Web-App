import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
// import resList from "../utils/mockData";
import { RESTRA_API } from "../utils/constant";
import { Link } from "react-router";

const Body = () => {
  // useState hook to create a state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchText, setSearchText] = useState("");

  // useEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTRA_API);

    const json = await data.json();
    console.log(json);

    // Filter only restaurant cards
    const restaurantCards = json?.data?.cards?.filter(
      (card) => card?.card?.card?.info
    );

    setListOfRestaurants(restaurantCards);
  };

  // spinner/Loading UI
  // if(listOfRestaurants.length === 0){
  //   return <h1>Loading....</h1>
  // }

  // shimmer ui (conditional rendering)
  if (listOfRestaurants.length === 0) {
    return <ShimmerUI />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search for restaurants and food"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="search-btn"
            onClick={() => {
              // filter the restaurant cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRest = listOfRestaurants.filter((res) =>
                res?.card?.card?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setFilteredRest(filteredRest);
            }}
          >
            Search
          </button>

          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => parseFloat(res?.card?.card?.info?.avgRating) > 4.2
              );

              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="res-container">
          {(filteredRest.length > 0 ? filteredRest : listOfRestaurants).map(
            (restaurant) => (
              <Link
                key={restaurant.card.card.info.id}
                to={"/restaurants/" + restaurant.card.card.info.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
