import styled from "styled-components";

const StyledLogin = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 5rem;

  section {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  img {
    width: 10rem;
  }

  h1 {
    font-size: 3rem;
    color: white;
  }

  a {
    padding: 20px;
    border-radius: 99px;
    background-color: #a4c7c6;
    font-weight: 800;
    color: white;
    text-decoration: none;
    width: fit-content;
  }
`;

export default StyledLogin;
