import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  // Normal Js Variable
  //   let listOfRestaurantsJs = [
  //   {
  //     data: {
  //       id: "1",
  //       name: "Brijwasi Restaurant",
  //       cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
  //       cuisine: "Punjabi, Biryani, Pizzas",
  //       avgRating: "3.1",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "2",
  //       name: "Biryani By Kilo",
  //       cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
  //       cuisine: "Biryani, Hydrabadi, North Indian",
  //       avgRating: "3.5",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "3",
  //       name: "The Belgian Waffle Co.",
  //       cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
  //       cuisine: "Waffles, Desserts",
  //       avgRating: "4.1",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "4",
  //       name: "KFC",
  //       cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
  //       cuisine: "American, Fast Food",
  //       avgRating: "4.8",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "5",
  //       name: "Burger King",
  //       cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
  //       cuisine: "Burgers, Fast Food",
  //       avgRating: "5.0",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "6",
  //       name: "McDonald's",
  //       cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
  //       cuisine: "Burgers, Fast Food",
  //       avgRating: "3.9",
  //     },
  //   },
  // ];

  // Local State Variable - super powerful react variable
  // used to create a local state variable,used to remember things
  // used to create variables which are dynamic in nature and
  // most importantly used to update the UI (upon state variable change, react triggers a reconciliation cycle)

  // let [listOfRestaurants, setListOfRestaurants] = useState([
  //   {
  //     data: {
  //       id: "1",
  //       name: "Brijwasi Restaurant",
  //       cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
  //       cuisines: "Punjabi, Biryani, Pizzas",
  //       avgRating: "3.1",
  //       costForTwo: "₹500 for two",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "2",
  //       name: "Biryani By Kilo",
  //       cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
  //       cuisines: "Biryani, Hydrabadi, North Indian",
  //       avgRating: "3.5",
  //       costForTwo: "₹400 for two",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "3",
  //       name: "The Belgian Waffle Co.",
  //       cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
  //       cuisines: "Waffles, Desserts",
  //       avgRating: "4.1",
  //       costForTwo: "₹300 for two",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "4",
  //       name: "KFC",
  //       cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
  //       cuisines: "American, Fast Food",
  //       avgRating: "4.8",
  //       costForTwo: "₹600 for two",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "5",
  //       name: "Burger King",
  //       cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
  //       cuisines: "Burgers, Fast Food",
  //       avgRating: "5.0",
  //       costForTwo: "₹700 for two",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "6",
  //       name: "McDonald's",
  //       cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
  //       cuisines: "Burgers, Fast Food",
  //       avgRating: "3.9",
  //       costForTwo: "₹550 for two",
  //     },
  //   },
  // ]);

  // State variable to manage the list of restaurants.
  // It is kind of destructuring array
  // listOfRestaurants - variable which holds the data
  // setListOfRestaurants - function which is used to update the variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // useEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.5524704&lng=73.7404306&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
  };


  return (
    <div className="body">
      <div className="filter">
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
        {/* 1. */}
        {/* <RestaurantCard resName = "Brijwasi Restaurant" cuisine = "Punjabi, Biryani, Pizzas"/>
        <RestaurantCard resName = "Biryani By Kilo" cuisine = "Biryani, Hydrabadi, North Indian"/>
        <RestaurantCard /> */}

        {/* 2. */}
        {/* <RestaurantCard resData = {resList[0].card.card.info}/>
        <RestaurantCard resData = {resList[1].card.card.info}/>
        <RestaurantCard resData = {resList[2].card.card.info}/> */}

        {/* 3. */}
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} />
        <RestaurantCard resData={resList[8]} />
        <RestaurantCard resData={resList[9]} /> */}

        {/* 4. */}
        {/* uses mockdata named 'resList' */}
        {/* {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))} */}

        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
