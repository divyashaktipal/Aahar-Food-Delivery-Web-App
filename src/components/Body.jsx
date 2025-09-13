import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import resList from "../utils/mockData";

const Body = () => {
  // useState hook to create a state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchText, setSearchText] = useState("");

  // useEffect
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0035068&lng=77.5890953&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  //   );

  //   const json = await data.json();
  //   console.log(json);

  //   Optional Chaining
  //   setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  // };

  // spinner/Loading UI
  // if(listOfRestaurants.length === 0){
  //   return <h1>Loading....</h1>
  // }

  // shimmer ui (conditional rendering)
  if (listOfRestaurants.length === 0) {
    return <ShimmerUI />;
  }

  const fetchData = async () => {
    const json = await data.json();
    setFilteredRest(json.data);
  };

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
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
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
                (res) => parseFloat(res.data.avgRating) > 4
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
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
