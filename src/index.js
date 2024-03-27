import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./pages/about";
import MobileApps from "./pages/mobileapp";
import Webiste from "./pages/website";
import Design from "./pages/design";
import Career from "./pages/career";
import Clients from "./pages/clients";
import Faqs from "./pages/faqs";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 not found</div>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/mobileapps",
    element: <MobileApps />,
  },
  {
    path: "/websites",
    element: <Webiste />,
  },
  {
    path: "/designs",
    element: <Design />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/clients",
    element: <Clients />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
