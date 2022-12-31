import styled from "styled-components";

const StyledRadio = styled.section`
  padding: 1.4rem 1.4rem 4rem 0;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 640px) {
    padding-left: 8.6rem;
  }
`;

export const StyledHeading = styled.h1`
  font-size: 3rem;
  color: #a4c7c6;
`;

export default StyledRadio;
