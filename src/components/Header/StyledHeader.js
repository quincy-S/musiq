import styled from "styled-components";

const StyledHeader = styled.header`
  padding: ${(props) => props.theme.docPadding};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  background-color: rgba(30, 30, 30, 0.9);
`;

export const StyledNav = styled.nav`
  display: flex;
`;

export const StyledSection = styled.div`
  display: flex;
  margin-left: 1rem;
  width: 100%;
  justify-content: space-between;
`;

export default StyledHeader;
