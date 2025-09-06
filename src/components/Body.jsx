import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  let listOfRestaurants = [
  {
    data: {
      id: "1",
      name: "Brijwasi Restaurant",
      cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
      cuisine: "Punjabi, Biryani, Pizzas",
      avgRating: "3.1",
    },
  },
  {
    data: {
      id: "2",
      name: "Biryani By Kilo",
      cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
      cuisine: "Biryani, Hydrabadi, North Indian",
      avgRating: "3.5",
    },
  },
  {
    data: {
      id: "3",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
      cuisine: "Waffles, Desserts",
      avgRating: "4.1",
    },
  },
  {
    data: {
      id: "4",
      name: "KFC",
      cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
      cuisine: "American, Fast Food",
      avgRating: "4.8",
    },
  },
  {
    data: {
      id: "5",
      name: "Burger King",
      cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
      cuisine: "Burgers, Fast Food",
      avgRating: "5.0",
    },
  },
  {
    data: {
      id: "6",
      name: "McDonald's",
      cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
      cuisine: "Burgers, Fast Food",
      avgRating: "3.9",
    },
  },
];


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfRestaurants = listOfRestaurants.filter(
              (res) => parseFloat(res.data.avgRating) > 4
            );
            console.log(listOfRestaurants);
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
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
