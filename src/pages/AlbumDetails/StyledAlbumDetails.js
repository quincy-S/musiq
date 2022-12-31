import styled from "styled-components";

const StyledAlbumDetails = styled.div`
  padding: 1.8rem;
  margin-top: 80px;
  margin-bottom: 6rem;

  @media (min-width: 640px) {
    padding-left: 8.6rem;
  }
`;

export const StyledBackButton = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  background-color: #facd66;
  z-index: 10;
  top: 20px;
  left: 50;

  @media (max-width: 640px) {
    left: 30px;
    top: 110px;
  }
`;

export const StyledSection = styled.section`
  @media (min-width: 768px) {
    display: ${(props) => props.type === "top" && "flex"};
    gap: ${(props) => props.type === "top" && "27px"};
    width: ${(props) => props.type === "des" && "50%"};
    display: ${(props) => props.type === "des" && "flex"};
    flex-direction: ${(props) => props.type === "des" && "column"};
    justify-content: ${(props) => props.type === "des" && "flex-end"};
  }
`;

export const StyledAlbumImage = styled.img`
  max-width: 100%;
  border-radius: 25px;

  @media (min-width: 768px) {
    width: 20rem;
  }
`;

export const StyledBgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.15;
  max-width: 100%;
  vertical-align: middle;
`;

export const StyledTextDiv = styled.div`
  margin-top: 0.6rem;
  display: flex;
  gap: 0.6rem;
  flex-direction: column;

  h1 {
    color: rgba(164, 199, 198, 1);
    font-weight: 700;
    font-size: 35px;
    line-height: 120%;
  }

  p {
    color: rgba(239, 238, 224, 1);
    line-height: 17px;
    font-size: 14px;
  }

  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`;

export const StyledButtonsSection = styled.section`
  margin-top: 1.6rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 1rem;
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  line-height: 120%;
  padding: 11px 13px;
  color: rgba(255, 255, 255, 1);
  background: rgba(255, 255, 255, 0.07);
  border-radius: 32px;
  border: none;
  gap: 8px;

  img {
    width: 13.5px;
  }
`;

export const StyledTracksSection = styled.section`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledTrack = styled.div`
  display: flex;
  color: #ffffff;
  gap: 14px;
  padding: 8px;
  border-radius: 10px;
  background-color: rgba(51, 55, 59, 0.37);
  justify-content: space-between;

  img {
    width: 40px;
    border-radius: 5px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.pos === "third"
      ? "column-reverse"
      : props.pos === "second"
      ? "column"
      : props.pos === "first"
      ? "row"
      : ""};
  justify-content: center;
  margin-right: ${(props) => props.pos === "second" && "auto"};
  svg {
    display: none;
    color: #facd66;
  }
  li {
    list-style-type: none;
    font-size: 10px;
  }
  h4,
  h5 {
    font-size: 12px;
    line-height: 14.4px;
  }

  @media (min-width: 820px) {
    align-items: center;
    justify-content: ${(props) =>
      props.pos === "third"
        ? "space-between"
        : props.pos === "second"
        ? "space-between"
        : props.pos === "first"
        ? "flex-start"
        : ""};

    flex-direction: row;
    gap: ${(props) => props.pos === "first" && "1rem"};
    svg {
      display: block;
    }
    flex: ${(props) =>
      props.pos === "third"
        ? "1"
        : props.pos === "second"
        ? "4"
        : props.pos === "first"
        ? "1"
        : ""};

    h4,
    ul {
      text-align: center;
      flex: 1;
    }

    span {
      font-size: 10px;
      line-height: 120%;
      flex: 1;
    }
  }
`;

export const StyledSvg = styled.section`
  svg {
    display: block;
    transform: rotate(90deg);
  }
`;

export default StyledAlbumDetails;
