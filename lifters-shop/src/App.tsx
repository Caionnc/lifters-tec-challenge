import { RouterProvider } from "react-router-dom";
import { ShopContextProvider } from "@/context/shop";
import { router } from "@/router";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <ShopContextProvider>
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </ShopContextProvider>
  );
}

export default App;
