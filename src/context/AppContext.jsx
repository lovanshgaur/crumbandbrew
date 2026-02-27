"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState({});
  const [profile, setProfile] = useState({ name: "", email: "", phone: "" });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cb_cart");
    const savedProfile = localStorage.getItem("cb_user");
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedProfile) setProfile(JSON.parse(savedProfile));
  }, []);

  const updateCart = useCallback((item, type) => {
    setCart((prev) => {
      if (type === "clear") {
        localStorage.removeItem("cb_cart");
        return {};
      }

      const currentQty = prev[item?.id]?.qty || 0;
      let newCart = { ...prev };

      if (type === "inc") {
        newCart[item.id] = { ...item, qty: currentQty + 1 };
      } else if (type === "dec") {
        if (currentQty <= 1) {
          delete newCart[item.id];
        } else {
          newCart[item.id] = { ...item, qty: currentQty - 1 };
        }
      }

      localStorage.setItem("cb_cart", JSON.stringify(newCart));
      return newCart;
    });
  }, []);

  const updateProfile = useCallback((data) => {
    setProfile(data);
    localStorage.setItem("cb_user", JSON.stringify(data));
  }, []);

  return (
    <AppContext.Provider
      value={{
        cart,
        updateCart,
        profile,
        updateProfile,
        isCartOpen,
        setIsCartOpen,
        isProfileOpen,
        setIsProfileOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
