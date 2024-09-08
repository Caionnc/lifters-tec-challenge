import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { liftersShopProducts } from "@/utils/data";
import { Product, BagProduct } from "@/model/product";

interface CartProduct extends BagProduct {
  quantity: number;
}

interface ProductFilters {
  category: string;
  color: string;
}

interface LifterShop {
  storage: Product[];
  cart: CartProduct[];
  filter: ProductFilters;
  totalQuantity: number;
}

interface ShopContextType {
  liftersShop: Partial<LifterShop>;
  setLifterShop: (shop: LifterShop) => void;
  addToCart: (product: BagProduct) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  productFilters: (filter: ProductFilters) => void;
}

const defaultShopState: ShopContextType = {
  liftersShop: {
    storage: liftersShopProducts,
    cart: [],
    filter: {
      category: "",
      color: "",
    },
    totalQuantity: 0,
  },
  setLifterShop: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  productFilters: () => {},
};

export const LifterShopContext =
  createContext<ShopContextType>(defaultShopState);

export const ShopContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [shop, setShop] = useState<Partial<LifterShop>>(
    defaultShopState.liftersShop
  );

  useEffect(() => {
    setShop({ storage: liftersShopProducts, cart: [], totalQuantity: 0 });
  }, []);

  const addToCart = useCallback(
    (product: BagProduct) => {
      setShop((prevShop) => {
        const existingProduct = prevShop.cart?.find((p) => p.id === product.id);
        if (existingProduct) {
          return {
            ...prevShop,
            cart: prevShop.cart?.map((p) =>
              p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
            ),
            totalQuantity: (prevShop.totalQuantity || 0) + 1,
          };
        }
        return {
          ...prevShop,
          cart: [...(prevShop.cart || []), { ...product, quantity: 1 }],
          totalQuantity: (prevShop.totalQuantity || 0) + 1,
        };
      });
    },
    [setShop]
  );

  const removeFromCart = useCallback(
    (productId: string) => {
      setShop((prevShop) => {
        const existingProduct = prevShop.cart?.find((p) => p.id === productId);
        if (existingProduct) {
          if (existingProduct.quantity > 1) {
            return {
              ...prevShop,
              cart: prevShop.cart?.map((p) =>
                p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
              ),
              totalQuantity: (prevShop.totalQuantity || 0) - 1,
            };
          } else {
            return {
              ...prevShop,
              cart: prevShop.cart?.filter((p) => p.id !== productId),
              totalQuantity: (prevShop.totalQuantity || 0) - 1,
            };
          }
        }
        return prevShop;
      });
    },
    [setShop]
  );

  const clearCart = useCallback(() => {
    setShop((prevShop) => {
      return {
        ...prevShop,
        cart: [],
        totalQuantity: 0,
      };
    });
  }, [setShop]);

  const productFilters = useMemo(() => {
    return (filter: ProductFilters) => {
      setShop((prevShop) => {
        return {
          ...prevShop,
          filter: filter,
        };
      });
    };
  }, []);

  return (
    <LifterShopContext.Provider
      value={{
        liftersShop: shop,
        setLifterShop: setShop,
        addToCart,
        removeFromCart,
        clearCart,
        productFilters,
      }}
    >
      {children}
    </LifterShopContext.Provider>
  );
};

