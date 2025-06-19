"use client";
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  // Always apply dark mode
  if (typeof window !== "undefined") {
    document.documentElement.classList.add("dark");
  }

  return (
    <ThemeContext.Provider value={{ theme: "dark", setTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
