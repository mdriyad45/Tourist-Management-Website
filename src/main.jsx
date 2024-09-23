import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Components/Home";
import AddTouristSpotPage from "./Pages/AddTouristSpotPage/AddTouristSpotPage";
import TouristSpotDetailsPage from "./Pages/TouristSpotDetailsPage/TouristSpotDetailsPage";
import AllTouristSpots from "./Pages/AllTouristSpots/AllTouristSpots";
import MyList from "./Pages/MyList/MyList";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import AuthProvider from "./Provider/AuthProvider";
import PrivetRoutes from "./Routes/PrivetRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addtouristsportpage",
        element: <PrivetRoutes><AddTouristSpotPage></AddTouristSpotPage></PrivetRoutes>,
      },
      {
        path: "/alltouristspots",
        element: <PrivetRoutes><AllTouristSpots></AllTouristSpots></PrivetRoutes>,
      },
      {
        path: "/myList",
        element: <PrivetRoutes><MyList></MyList></PrivetRoutes>,
      },
      {
        path: "/touristspotdetailspage",
        element: <PrivetRoutes><TouristSpotDetailsPage></TouristSpotDetailsPage></PrivetRoutes>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </AuthProvider>
  </StrictMode>
);
