import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
// import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Profile from "./components/Profile.jsx";
import Shimmer from "./components/Shimmer.jsx";

//Lazy loading helps to load the page(SPA = Single Page Application)
// it'll load the page only when user clicks on it. (It's called Chunking,Code splitting)
const Instamart = lazy(() => import("./components/Instamart.jsx"));
const About = lazy(() => import("./components/About.jsx"));

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
  //? Outlet component is inBuilt component by React Router that helps to Render the Home,About,Contact,Cart
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile", //if you give /Profile , react consider it as localhost:1234/profile but we need localhost:1234/about/profile so dont use / for children
            element: <Profile />,
          },
        ],
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        // When u render a component in Suspense, it'll take care of that component in a different manner
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
          //? here the fallback param takes the Shimmer component to show the shimmer while loading the Instamart component.
        ),
      },
    ],
  },
]);

// it will render according to the router configuration which is defined in the appRouter function.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
