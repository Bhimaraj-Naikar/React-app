const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="w-[250px] p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <div className="w-full h-40 overflow-hidden rounded-t-lg">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="mt-4 flex flex-col justify-between h-32">
        <div>
          <h2 className="font-bold text-lg text-gray-800 truncate">{name}</h2>
          <p className="mt-2 text-sm text-gray-600">
            {Array.isArray(cuisines)
              ? cuisines.join(", ")
              : "Cuisine not available"}
          </p>
        </div>
        <h4 className="mt-2 text-sm font-semibold text-yellow-500">
          {avgRating} ★
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
