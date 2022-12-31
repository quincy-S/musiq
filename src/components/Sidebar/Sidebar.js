import React from "react";
import StyledSidebar, { StyledLink, StyledSection } from "./StyledSidebar";
import {
  Home3,
  Radio,
  MusicLibrary2,
  VideoHorizontal,
  Profile,
  LogoutCurve,
} from "iconsax-react";
import { NavLink } from "react-router-dom";
import { useDataLayerValue } from "../../DataLayer";

const Sidebar = () => {
  const [{ showMenu }, dispatch] = useDataLayerValue();
  function handleClick() {
    dispatch({ type: "TOGGLE_MENU", showMenu: !showMenu });
  }

  function handlePopup() {
    dispatch({ type: "SET_POPUP", showPopup: true });
  }

  return (
    <StyledSidebar show={showMenu}>
      <StyledSection pos="1">
        <StyledLink end as={NavLink} to="/" onClick={() => handleClick()}>
          <Home3 variant="Bold" />
          <p>Home</p>
        </StyledLink>

        <StyledLink
          as={NavLink}
          to="/collections"
          onClick={() => handleClick()}
        >
          <MusicLibrary2 variant="Bold" />
          <p>Collections</p>
        </StyledLink>

        <StyledLink as={NavLink} to="/radio" onClick={() => handleClick()}>
          <Radio variant="Bold" />
          <p>Radio</p>
        </StyledLink>

        <StyledLink
          as={NavLink}
          to="/musicvideos"
          onClick={() => handleClick()}
        >
          <VideoHorizontal variant="Bold" />
          <p>Music videos</p>
        </StyledLink>
      </StyledSection>
      <StyledSection pos="2">
        <StyledLink as={NavLink} to="/profile" onClick={() => handleClick()}>
          <Profile variant="Bold" />
          <p>Profile</p>
        </StyledLink>

        <StyledLink onClick={() => handlePopup()}>
          <LogoutCurve variant="Bold" />
          <p>Logout</p>
        </StyledLink>
      </StyledSection>
    </StyledSidebar>
  );
};

export default Sidebar;
