const Shimmer = () => {
  const numberOfCards = 10; // Number of shimmer cards you want to display

  console.log("Shimmer loaded.");
  return (
    <div className="shimmer-container">
      {Array.from({ length: numberOfCards }).map((_, index) => (
        <div className="shimmer-card" key={index}></div>
      ))}
    </div>
  );
};

export default Shimmer;
