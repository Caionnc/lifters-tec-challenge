import { createBrowserRouter } from "react-router-dom";
import Retail from "@/domain/retail";
import TopBar from "./components/TopBar";

export enum ScreenRoutes {
  RETAIL = "/",
  PRODUCT = "/product",
  CHECKOUT = "/checkout",
  GO_BACK = -1,
}

export const router = createBrowserRouter(
  [
    {
      path: ScreenRoutes.RETAIL as string,
      element: <Retail></Retail>,
    },
  ].map((route) => ({
    ...route,
    element: <TopBar>{route.element}</TopBar>,
  }))
);
