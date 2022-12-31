import styled from "styled-components";

const StyledProfile = styled.section`
  padding: 1.4rem 1.4rem 4rem 0;
  margin-top: 80px;
  gap: 2rem;

  div {
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
  }

  @media (min-width: 640px) {
    padding-left: 8.6rem;
  }

  img {
    max-width: 100%;
    object-fit: contain;
    border-radius: 50%;
  }
`;

export const StyledHeading = styled.h1`
  font-size: 3rem;
  color: #a4c7c6;
  margin-bottom: 2rem;
`;

export const StyledSection = styled.section`
  display: flex;
  gap: 1rem;
  ${"" /* border: 2px solid yellow; */}
  align-items: center;
  p {
    color: white;
  }
`;

export default StyledProfile;
