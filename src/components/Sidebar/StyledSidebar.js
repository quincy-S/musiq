import styled from "styled-components";

const StyledSidebar = styled.nav`
  display: ${(props) => (props.show === true ? `flex` : `none`)};
  padding: 1.4rem;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 230px;
  height: 100vh;
  background-color: hsla(192, 9%, 11%, 1);
  margin-top: 5rem;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 640px) {
    width: 7rem;
    display: flex;
  }
`;

export const StyledLink = styled.a`
  list-style-type: none;
  font-size: 17px;
  line-height: 20.4px;
  color: white;
  display: flex;
  align-items: center;
  gap: 2rem;
  font-weight: ${(props) => props.theme.weight700};
  text-decoration: none;

  &.active {
    color: #facd66;
  }

  @media (min-width: 640px) {
    margin: 0 auto;
    p {
      display: none;
    }
  }
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 10px 0;
`;

export default StyledSidebar;
