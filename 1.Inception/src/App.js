import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import Body from "./components/Body";
import Error from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { Profile } from "./components/Profile";
import Insta from "./components/Instmart";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body user={"Namaste"}/> },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />
          }
        ]
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
      {path:"/insta", element:<Insta/>}
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);
root.render(<RouterProvider router={appRouter} />);
