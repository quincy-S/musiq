import styled from "styled-components";
import { motion } from "framer-motion";

const StyledHome = styled.main`
  padding: 1.4rem 0 4rem 0;
  margin-top: 80px;

  @media (min-width: 640px) {
    padding-left: 8.6rem;
  }
`;

export const StyledFirstHalf = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    gap: 24px;
  }
`;

export const StyledSecondHalf = styled.div``;

export const StyledImage = styled.img`
  position: absolute;
  right: 0;
  display: ${(props) => (props.kind === "small" ? "block" : "none")};

  @media (min-width: 740px) {
    display: ${(props) => (props.kind === "big" ? "block" : "none")};
  }
`;

export const StyledHeroSection = styled.section`
  height: 30rem;
  background-color: #609eaf;
  border-radius: 20px;
  position: relative;

  p {
    padding: 1.5rem 2rem;
    color: ${(props) => props.theme.whiteText};
    line-height: 14.4px;
    font-size: 12px;
  }

  @media (min-width: 640px) {
    height: 373px;
    overflow: hidden;
  }

  @media (min-width: 1024px) {
    flex: 0.6;
    ${"" /* width: 60%; */}
  }
`;

export const StyledTextSection = styled.section`
  margin-top: 13rem;

  p {
    padding: 0 2rem;
    line-height: 16.8px;
    font-size: 14px;
  }

  h1 {
    margin-bottom: 0.375rem;
    padding: 0 2rem;
    line-height: 42px;
    font-size: 35px;
    font-weight: ${(props) => props.theme.weight700};
    color: ${(props) => props.theme.whiteText};
  }

  @media (min-width: 640px) {
    margin-top: 5rem;
  }
`;

export const StyledLikesSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  margin-top: 2.85rem;

  ${"" /* width: 60%; */}
  h3 {
    font-weight: ${(props) => props.theme.weight400};
    font-size: 23px;
    line-height: 28.5px;
    color: ${(props) => props.theme.whiteText};
  }

  @media (min-width: 640px) {
    max-width: 20rem;
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

export const StyledLikeButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

export const StyledItem = styled(motion.div)`
  background-color: rgba(26, 30, 31, 1);
  position: relative;
  margin-top: 1rem;
  padding: 0.938rem;
  color: white;
  height: 14.5rem;
  border-radius: 20px;
  width: 280px;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 96px;
    width: 417px;
    margin-top: 0rem;

    img {
      width: 63px;
      height: 63px;
    }
  }
`;

export const StyledImgSection = styled.div`
  display: flex;
  gap: 8rem;
`;

export const StyledAlbumImg = styled.img`
  width: 150px;
  border-radius: 13px;
`;

export const StyledInfoSection = styled.div`
  display: flex;
  ${"" /* height: 5rem; */}
  flex-direction: column;
  gap: 0.375rem;
  margin-top: 0.938rem;
  ${"" /* border: 2px solid red; */}

  h2 {
    font-size: 17px;
    line-height: 20.4px;
    font-weight: ${(props) => props.theme.weight700};
  }

  p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    line-height: 14.4px;
    font-weight: ${(props) => props.theme.weight400};
  }
  h3 {
    font-size: 14px;
    font-weight: ${(props) => props.theme.weight400};
    line-height: 16.8px;
    margin-top: auto;
  }

  @media (min-width: 1024px) {
    margin-right: auto;
    margin-left: 14px;
    max-width: 16rem;
  }
`;

export const StyledCard = styled.article`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  h2 {
    color: rgba(255, 255, 255, 1);
    font-size: 17px;
    line-height: 20.4px;
    font-weight: ${(props) => props.theme.weight700};
  }

  p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    line-height: 14.4px;
    font-weight: ${(props) => props.theme.weight400};
  }
`;

export const StyledSection = styled.section`
  margin-top: 3rem;

  h1 {
    color: ${(props) => props.theme.whiteText};
    font-size: 20px;
    line-height: 20px;
    font-weight: ${(props) => props.theme.weight700};
  }

  @media (min-width: 1024px) {
    ${"" /* gap: ${(props) => props.type === "albums" && "1rem"}; */}
    flex: ${(props) => props.type === "albums" && "0.4"};
    margin-top: ${(props) => props.type === "albums" && "0rem"};
    grid-area: ${(props) => (props.pos === "second" ? "albums" : null)};
  }
`;
export default StyledHome;
