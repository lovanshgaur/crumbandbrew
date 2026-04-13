"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState({});
  const [profile, setProfile] = useState(null);

  // load from storage
  useEffect(() => {
    const savedCart = localStorage.getItem("cb_cart");
    const savedProfile = localStorage.getItem("cb_user");

    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedProfile) setProfile(JSON.parse(savedProfile));
  }, []);

  const updateCart = (item, type) => {
    setCart((prev) => {
      let updated = { ...prev };

      if (type === "clear") {
        localStorage.removeItem("cb_cart");
        return {};
      }

      const qty = updated[item.id]?.qty || 0;

      if (type === "inc") {
        updated[item.id] = { ...item, qty: qty + 1 };
      }

      if (type === "dec") {
        if (qty <= 1) delete updated[item.id];
        else updated[item.id] = { ...item, qty: qty - 1 };
      }

      localStorage.setItem("cb_cart", JSON.stringify(updated));
      return updated;
    });
  };

  const saveProfile = (data) => {
    setProfile(data);
    localStorage.setItem("cb_user", JSON.stringify(data));
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        updateCart,
        profile,
        saveProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);