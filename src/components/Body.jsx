import RestaurantCard from "./RestaurantCard"; // Fixed import name
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline.jsx";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      // Extract and flatten the array of restaurants
      const restaurantsArray =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
          (restaurant) => restaurant.info
        ) || [];

      setAllRestaurants(restaurantsArray);
      setRestaurants(restaurantsArray);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <div className="offline">
        <h1> 🔴 Offline, please check your internet connection.</h1>
      </div>
    );
  }

  //Conditional rendering
  // if (!allRestaurants) return null;
  // if (restaurants?.length === 0) return <h1>No Restaurant Found</h1>;

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="p-2 m-5 w-96"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn p-2 m-2 bg-violet-500 hover:bg-violet-400 text-white rounded-lg"
          onClick={() => {
            const filteredData = filterData(searchText, allRestaurants);
            setRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-evenly gap-4">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.id}
              key={restaurant.id}
              className="my-link"
            >
              <RestaurantCard {...restaurant} key={restaurant.id} />
            </Link>
          ))
        ) : (
          <p>No restaurants found.</p> // Fallback if no restaurants are available
        )}
      </div>
    </>
  );
};

export default Body;
