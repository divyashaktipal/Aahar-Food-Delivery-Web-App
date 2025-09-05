import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
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
        ))
    }
      </div>
    </div>
  );
};

export default Body;