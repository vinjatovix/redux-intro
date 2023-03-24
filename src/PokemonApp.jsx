import React, { useState, useMemo } from "react";
import ThemeContext from "./contexts/ThemeContext";
import { createGlobalStyle } from "styled-components";
import "./PokemonApp.css";
import MyComponent from "./components/TopBar";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) =>
      theme === "dark" ? "#333333" : "#ffffff"};
    color: ${({ theme }) => (theme === "dark" ? "#ffffff" : "#333333")};
  }
`;

export const PokemonApp = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <GlobalStyle theme={theme} />
      <div className="parent">
        <MyComponent />
        <div className="side-left"> </div>
        <div className="main-content"> </div>
        <div className="main-footer"> </div>
      </div>
    </ThemeContext.Provider>
  );
};
