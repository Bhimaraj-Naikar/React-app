import { Outlet } from "react-router-dom"; // You can render the profile component using either Outlet or Profile component itself
import ProfileFucntionalComponent from "../components/Profile.jsx";
import Profile from "./ProfileClassBased.jsx";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is the About Us Page that tells about us -Finding the Path </p>
      <Profile />
      <ProfileFucntionalComponent name={"Bhimaraj Function"} />
    </div>
  );
};

export default About;
