import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./layouts/root";
import ErrorPage from "./error-page";
import Home from "./routes/home/homepage";
import Products from "./routes/products/products";
import ProductId from "./routes/products/product-id";
import Signin from "./routes/signin";
import Signup from "./routes/signup";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorPage />,
      },
      {
        path: "products/:productId",
        element: <ProductId />,
        errorElement: <ErrorPage />,
      },
      {
        path: "services",
        element: <div>Services</div>,
        errorElement: <ErrorPage />,
      },
      {
        path: "account/signin",
        element: <Signin />,
        errorElement: <ErrorPage />,
      },
      {
        path: "account/signup",
        element: <Signup />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
