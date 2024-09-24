import { LOGO_CDN_URL } from "../constants";
import { useState } from "react";
import { Link } from "react-router-dom"; //Using Link tag will not let the page to re-render so that the website can load once and not again and again.
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Cart from "./Cart.jsx";
import Home from "./Home.jsx";
import useOnline from "../utils/useOnline.jsx";
const Title = () => {
  return <img className="p-2 h-28" src={LOGO_CDN_URL} alt="logo" />;
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sticky">
      <Title />
      <div>
        <ul className="flex m-6">
          <li className="p-3">
            <Link to="/Home">Home</Link>
          </li>
          <li className="p-3">
            <Link to="/About">About</Link>
          </li>
          <li className="p-3">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="p-3">
            <Link to="/Cart">Cart</Link>
          </li>
          <li className="p-3">
            <Link to="/Instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      {/* <h5>{is Online ? "You are Online ✅" : "You are Offline ❌"}</h5> */}
      <div>
        {isLoggedIn ? (
          <button
            className="search-btn w-50 p-2 m-2 bg-violet-500 hover:bg-violet-400 text-white rounded-lg"
            onClick={() => setIsLoggedIn(false)}
          >
            Log out
          </button>
        ) : (
          <button
            className="search-btn p-2 w-50 m-2 bg-violet-500 hover:bg-violet-400 text-white rounded-lg"
            onClick={() => setIsLoggedIn(true)}
          >
            Log in
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
