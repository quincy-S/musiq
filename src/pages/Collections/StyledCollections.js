import styled from "styled-components";

const StyledCollections = styled.div`
  margin-top: 80px;
  padding: ${(props) => props.theme.docPadding};
  margin-bottom: 6rem;
  @media (min-width: 640px) {
    padding-left: 8.6rem;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  gap: 1rem;
`;

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid rgba(107, 114, 128, 1);
  background-color: transparent;
  font-size: 14px;
  font-weight: ${(props) => props.theme.weight400};
  border-radius: 27px;
  color: rgba(107, 114, 128, 1);
  width: 50%;
`;

export const StyledGrid = styled.div``;

export const StyledItem = styled.div`
  position: relative;
  border: 2px solid red;
  margin-top: 2.4rem;
  img {
    max-width: 100%;
  }
`;

export const StyledDetails = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;

  padding: 0 1rem;
  height: 8rem;

  section {
    display: flex;
    flex-direction: column;

    justify-content: flex-end;
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    font-size: 10px;
    color: rgba(239, 238, 224, 1);
    font-weight: 400;
    margin-top: 3px;
  }

  h1 {
    font-size: 24px;
    color: rgba(239, 238, 224, 1);
    font-weight: 400;
    line-height: 120%;
  }

  h3 {
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
    margin-top: auto;
    margin-bottom: 1rem;
    font-weight: 400;
  }
`;

export default StyledCollections;
