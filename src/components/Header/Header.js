import React from "react";
import StyledHeader, { StyledNav, StyledSection } from "./StyledHeader";
import logo from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/search.svg";
import Burger from "../Burger/Burger";
import { useDataLayerValue } from "../../DataLayer";

const Header = () => {
  const [{ showMenu }, dispatch] = useDataLayerValue();

  function handleClick() {
    dispatch({
      type: "TOGGLE_MENU",
      showMenu: !showMenu,
    });
    // console.log(showHeader);
  }

  return (
    <StyledHeader>
      <StyledNav>
        <Burger handleClick={handleClick} show={showMenu} />
        <StyledSection>
          <img src={logo} alt="logo" />
          <img src={searchIcon} alt="search" />
        </StyledSection>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
