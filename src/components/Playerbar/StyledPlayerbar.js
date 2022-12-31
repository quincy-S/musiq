import styled from "styled-components";

const StyledPlayerbar = styled.section`
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 6rem;
  bottom: 0;
  color: white;
  background: rgba(29, 33, 35, 0.3);
  backdrop-filter: blur(15px);
  display: flex;
  gap: 1rem;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 0.5rem;
  }
`;

export const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledFirst = styled(StyledContainer)`
  flex: 0.2;
  gap:1rem;
  padding-left:1rem;

  h2 {
    font-size: 14px;
  }

  p {
    font-size: 10px;
    color:background: rgba(255, 255, 255, 0.44);

  }

  span{
    display: flex;
    flex-direction: column;
    gap: 5px;
    
  }
`;

export const StyledSecond = styled(StyledContainer)`
  flex: 0.6;
  flex-direction: column;
  gap: 1.5rem;

  span {
    background-color: #facd66;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  input {
    height: 3px;
    width: 25rem;
  }
`;

export const StyledThird = styled(StyledContainer)`
  flex: 0.2;
  gap: 1rem;
`;

export const StyledPart = styled.section`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const StyledInput = styled.input`
  height: 3px;
  margin-right: 15px;
  width: 100%;
  background-color: #facd66;
  background: rgba(225, 225, 225, 0.2);
  border-radius: 5px;
  background-image: linear-gradient(rgb(250, 205, 102), rgb(250, 205, 102));
  background-repeat: no-repeat;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    color: #facd66;
  }
`;

export default StyledPlayerbar;
