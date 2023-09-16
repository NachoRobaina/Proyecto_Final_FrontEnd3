import { createContext } from "react";
import { useState } from "react";

export const ContextGlobal = createContext({});

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  function changeTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  const value = {
    theme,
    changeTheme,
  };

  return (
    <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
  );
};
