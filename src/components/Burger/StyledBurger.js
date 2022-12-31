import styled from "styled-components";
import { motion } from "framer-motion";

const StyledBurger = styled.div`
  width: 40px;
  height: 40px;
  postion: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  z-index: 15;

  @media (min-width: 640px) {
    display: none;
  }
`;

export const StyledLine = styled(motion.div)`
  width: ${(props) => (props.pos === "mid" ? `20px` : `30px`)};
  height: 1px;
  border: 1px solid white;
  background-color: ${(props) => props.theme.whiteText};

  transform: translateY(
    ${(props) =>
      props.pos === "top" ? `-10px` : props.pos === "bottom" ? `10px` : ""}
  );
`;

export default StyledBurger;
