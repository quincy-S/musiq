import React from "react";
import StyledBurger, { StyledLine } from "./StyledBurger";

const Burger = ({ handleClick, show }) => {
  const rotateVariant = {
    top: { rotate: 45, y: "1px" },
    mid: { x: -320, opacity: 0 },
    bottom: { rotate: -45, y: "-1px" },
    initTop: { rotate: 0, y: "-10px" },
    initBottom: { rotate: 0, y: "10px" },
  };

  return (
    <StyledBurger onClick={handleClick}>
      <StyledLine
        variants={rotateVariant}
        animate={show ? "top" : "initTop"}
        pos="top"
      />
      <StyledLine
        variants={rotateVariant}
        animate={show ? "mid" : ""}
        pos="mid"
      />
      <StyledLine
        variants={rotateVariant}
        animate={show ? "bottom" : "initBottom"}
        pos="bottom"
      />
    </StyledBurger>
  );
};

export default Burger;
