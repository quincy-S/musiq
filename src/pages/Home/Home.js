import React from "react";
import StyledHome, {
  StyledFirstHalf,
  StyledSecondHalf,
  StyledLikesSection,
  StyledHeroSection,
  StyledTextSection,
  StyledImage,
  StyledAlbumImg,
  StyledSection,
  StyledCarousel,
  StyledItem,
  StyledImgSection,
  StyledInfoSection,
  StyledLikeButton,
} from "./StyledHome";
import { Heart } from "iconsax-react";
import heroImg from "../../assets/images/heroVector.svg";
import heartImg from "../../assets/images/Heart.svg";
import profilesImg from "../../assets/images/Frame 4.svg";
import humanImg from "../../assets/homeImages/Pexels Photo by Eric Esma.svg";
import swirlImg from "../../assets/homeImages/Vector.svg";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../../DataLayer";
import Track from "../../components/Track/Track";

const Home = () => {
  const [{ topAlbums, topSongs, discoverWeekly }] = useDataLayerValue();

  return (
    <StyledHome>
      <StyledFirstHalf>
        <StyledHeroSection>
          <StyledImage kind="small" src={heroImg} alt="hero-img" />
          <StyledImage kind="big" src={swirlImg} alt="person-img" />
          <StyledImage kind="big" src={humanImg} alt="person-img" />
          <p>Curated playlist</p>
          <StyledTextSection>
            <h1>R & B Hits</h1>
            <p>All mine, Lie again, Petty call me everyday,</p>
            <p>Out of time, No love, Bad habit</p>
            <p>and so much more.</p>
          </StyledTextSection>
          <StyledLikesSection>
            <img src={profilesImg} alt="profiles-img" />
            <img src={heartImg} alt="heart-img" />
            <h3>33k Likes</h3>
          </StyledLikesSection>
        </StyledHeroSection>
        <StyledSection type="albums">
          <h1>Hot Albums</h1>
          <StyledCarousel type="albums">
            {topAlbums.map((el, idx) => (
              <Link key={idx} to={`album/${el.id}`}>
                <StyledItem>
                  <StyledImgSection>
                    <StyledAlbumImg src={el.images[0].url} alt="" />
                  </StyledImgSection>
                  <StyledInfoSection>
                    {el.name.length < 25 ? (
                      <h2>{el.name}</h2>
                    ) : (
                      <h2>{`${el.name.slice(0, 25)}...`}</h2>
                    )}

                    <p>{el.label}</p>
                    {/* <h3>{formatTime(el.track.duration_ms)}</h3> */}
                  </StyledInfoSection>
                  <StyledLikeButton>
                    <Heart size="20" color="rgba(250, 205, 102, 1)" />
                  </StyledLikeButton>
                </StyledItem>
              </Link>
            ))}
          </StyledCarousel>
        </StyledSection>
      </StyledFirstHalf>
      <StyledSecondHalf>
        <StyledSection>
          <h1>Discover Weekly</h1>
          <StyledCarousel>
            {discoverWeekly.map((el) => (
              <Track el={el} key={el.track.id} />
            ))}
          </StyledCarousel>
        </StyledSection>

        <StyledSection>
          <h1>Top Songs</h1>
          <StyledCarousel>
            {topSongs.map((el) => (
              <Track el={el} key={el.track.id} />
            ))}
          </StyledCarousel>
        </StyledSection>
      </StyledSecondHalf>
    </StyledHome>
  );
};

export default Home;

//
