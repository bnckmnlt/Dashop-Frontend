import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./layouts/root";
import ErrorPage from "./error-page";
import Home from "./routes/home/homepage";
import Products from "./routes/products/products";
import ProductId from "./routes/products/product-id";
import Account from "./routes/account/account";
import Signin from "./routes/account/signin";
import Signup from "./routes/account/signup";
import Addresses from "./routes/account/address";
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
        errorElement: <ErrorPage />,
        children: [
          {
            path: "",
            element: <Products />,
            errorElement: <ErrorPage />,
          },
          {
            path: ":productId",
            element: <ProductId />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "services",
        element: <div>Services</div>,
        errorElement: <ErrorPage />,
      },
      {
        path: "account",
        errorElement: <ErrorPage />,
        children: [
          {
            path: "",
            element: <Account />,
            errorElement: <ErrorPage />,
          },
          {
            path: "signup",
            element: <Signup />,
            errorElement: <ErrorPage />,
          },
          {
            path: "signin",
            element: <Signin />,
            errorElement: <ErrorPage />,
          },
          {
            path: "addresses",
            element: <Addresses />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
