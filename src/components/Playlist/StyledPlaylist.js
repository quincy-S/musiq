import styled from "styled-components";

const StyledPlaylist = styled.section`
  h1 {
    color: ${(props) => props.theme.whiteText};
    font-size: 20px;
    line-height: 20px;
    font-weight: ${(props) => props.theme.weight700};
  }
`;

export const StyledCarousel = styled.section`
  display: flex;
  gap: 2rem;
  overflow-y: hidden;
  overflow-x: auto;
  a {
    text-decoration: none;
    color: white;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }

  @media (min-width: 1024px) {
    margin-top: 20px;
    flex-direction: ${(props) => (props.type === "albums" ? "column" : "row")};
    overflow-y: ${(props) => (props.type === "albums" ? "auto" : "hidden")};
    gap: ${(props) => props.type === "albums" && "7px"};
    ${
      "" /* overflow-x: ${(props) => (props.type === "albums" ? "hidden" : null)}; */
    }
    height: ${(props) => props.type === "albums" && "22rem"};
  }
`;

export default StyledPlaylist;
