import { useState, useEffect } from "react";
const isOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOffline = () => () => {
      setIsOnline(false);
    };
    const handleOnline = () => () => {
      setIsOnline(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      //Unmounting the state
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
};
export default isOnline;
