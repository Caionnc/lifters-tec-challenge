import { createBrowserRouter } from "react-router-dom";
import Retail from "@/domain/retail";
import TopBar from "./components/TopBar";
import Product from "./domain/product";

export enum ScreenRoutes {
  RETAIL = "/",
  PRODUCT = "/product/:productId",
  CHECKOUT = "/checkout",
  GO_BACK = -1,
}

export const router = createBrowserRouter(
  [
    {
      path: ScreenRoutes.RETAIL as string,
      element: <Retail></Retail>,
    },
    {
      path: ScreenRoutes.PRODUCT as string,
      element: <Product />,
    },
  ].map((route) => ({
    ...route,
    element: <TopBar>{route.element}</TopBar>,
  }))
);
