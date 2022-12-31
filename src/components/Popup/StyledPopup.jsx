import styled from "styled-components";

const StyledPopup = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 8rem;
  width: 15rem;
  background-color: hsla(192, 9%, 11%, 1);
  z-index: 10;
  border-radius: 10px;
  ${"" /* padding: 0.5rem; */}
  color: white;
  ${"" /* display: flex; */}
  flex-direction: column;
  display: ${(props) => (props.show ? "flex" : "none")};
`;

export const StyledButtons = styled.section`
  flex: 0.4;
  display: flex;
  justify-content: space-between;
`;

export const StyledText = styled.section`
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  text-align: center;
  flex: 0.6;
  padding: 0.5rem;
`;

export const StyledButton = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.pos === "left" ? "#a4c7c6" : "#ea2300")};
  border-right: ${(props) =>
    props.pos === "left" && "1px solid rgba(255, 255, 255, 0.3)"};
`;

export default StyledPopup;
