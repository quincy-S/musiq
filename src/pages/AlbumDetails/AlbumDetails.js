import React from "react";
import StyledAlbumDetails, {
  StyledTextDiv,
  StyledButtonsSection,
  StyledSpan,
  StyledInfo,
  StyledDiv,
  StyledAlbumImage,
  StyledTracksSection,
  StyledTrack,
  StyledBgImg,
  StyledSection,
  StyledBackButton,
  StyledSvg,
} from "./StyledAlbumDetails";
import { useParams, useNavigate } from "react-router-dom";
import playImg from "../../assets/albumIcons/Vector.svg";
import collectionImg from "../../assets/albumIcons/music-square-add.svg";
import likeImg from "../../assets/albumIcons/Heart.svg";
import { ArrowLeft, Heart, More } from "iconsax-react";
import { useDataLayerValue } from "../../DataLayer";

const AlbumDetails = () => {
  const [{ topAlbums }, dispatch] = useDataLayerValue();

  const { id } = useParams();
  const navigate = useNavigate();

  function formatTime(ms) {
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    let minutes = Math.floor(ms / 60000);
    let time = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    return time;
  }

  const selected = topAlbums.find((album) => album.id === id);

  return (
    <StyledAlbumDetails>
      <StyledBackButton onClick={() => navigate(-1)}>
        <ArrowLeft />
      </StyledBackButton>
      <StyledBgImg src={selected.images[0].url} alt="" />
      <StyledSection type="top">
        <StyledAlbumImage src={selected.images[0].url} alt="" />
        <StyledSection type="des">
          <StyledTextDiv>
            <h1>{selected.name}</h1>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p> */}
            <p>{selected.total_tracks} songs</p>
          </StyledTextDiv>
          <StyledButtonsSection>
            <StyledSpan>
              <img src={playImg} alt="" />
              Play all
            </StyledSpan>
            <StyledSpan>
              <img src={collectionImg} alt="" />
              Add to collection
            </StyledSpan>
            <StyledSpan>
              <img src={likeImg} alt="" />
              Like
            </StyledSpan>
          </StyledButtonsSection>
        </StyledSection>
      </StyledSection>
      <StyledSection>
        <StyledTracksSection>
          {selected.tracks.items.map((el, idx) => (
            <StyledTrack key={idx}>
              <StyledDiv pos="first">
                <img src={selected.images[2].url} alt="album-art" />
                <Heart />
              </StyledDiv>
              <StyledDiv pos="second">
                <h4>{el.name}</h4>
                <ul>
                  <li>
                    {el.artists.map((artist, idx) => (
                      <span key={idx}>
                        {idx === el.artists.length - 1
                          ? `${artist.name}`
                          : `${artist.name}, `}
                      </span>
                    ))}
                  </li>
                </ul>
              </StyledDiv>
              <StyledDiv pos="third">
                <h5>{formatTime(el.duration_ms)}</h5>
                <StyledSvg>
                  <More pos="rotate" />
                </StyledSvg>
              </StyledDiv>
              {/* <StyledInfo>
                
                
                
              </StyledInfo> */}
            </StyledTrack>
          ))}
        </StyledTracksSection>
      </StyledSection>
    </StyledAlbumDetails>
  );
};

export default AlbumDetails;
