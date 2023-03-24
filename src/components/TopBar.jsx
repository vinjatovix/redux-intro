import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import styled from "styled-components";

const TopBar = styled.div`
  background-color: ${({ theme }) =>
    theme === "light" ? "#333333" : "#ffffff"};
  color: ${({ theme }) => (theme === "light" ? "#ffffff" : "#333333")};
  grid-area: 1 / 1 / 2 / 6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
//   <button className="top-bar__menu-button">Menú</button> en styled components
// .top-bar__menu-button:hover + .top-bar__menu-dropdown {
//  display: block;
//}
const MenuButton = styled.button`
  color: ${({ theme }) => (theme === "light" ? "#ffffff" : "#333333")};
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover + .top-bar__menu-dropdown {
    display: block;

    background-color: ${({ theme }) =>
      theme === "light" ? "#ffffff" : "#333333"};
    color: ${({ theme }) => (theme === "light" ? "#333333" : "#ffffff")};
  }
  font-size: 1.2rem;
`;

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <TopBar theme={theme}>
      <div className="top-bar__menu">
        <MenuButton>Menú</MenuButton>
        <div className="top-bar__menu-dropdown">
          <a href="#">Opción 1</a>
          <a href="#">Opción 2</a>
          <a href="#">Opción 3</a>
        </div>
      </div>
      <button onClick={toggleTheme}>Cambiar tema</button>
    </TopBar>
  );
};

export default MyComponent;
