import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "../components/Shimmer.jsx";
import useRestaurant from "../utils/useRestaurant.jsx";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <div className="menu-container">
      <div className="menu">
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          alt="Restaurant Image"
        />
        <h1>{restaurant.name}</h1>
        <h3>{restaurant.costForTwoMessage}</h3>
        <p>{restaurant.avgRating} stars</p>
        <p>{restaurant.areaName}</p>
        <h4>{restaurant.city}</h4>
      </div>
    </div>
  );
};

export default RestaurantMenu;
