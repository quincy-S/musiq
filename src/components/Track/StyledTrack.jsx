import styled from "styled-components";

const StyledTrack = styled.article`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  cursor: pointer;

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

export const StyledAlbumImg = styled.img`
  width: 150px;
  border-radius: 13px;
`;

export default StyledTrack;
