import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Layout from "./pages/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/carrinho",
        element: <Cart />,
      },
      {
        path: "/produto/:id",
        element: <Product />,
      },
    ],
  },
]);
