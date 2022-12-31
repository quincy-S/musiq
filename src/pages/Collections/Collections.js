import React from "react";
import StyledCollections, {
  StyledButton,
  StyledSection,
  StyledGrid,
  StyledItem,
  StyledDetails,
} from "./StyledCollections";
import primus from "../../assets/collectionImages/first.svg";
import secondus from "../../assets/collectionImages/second.svg";
import tertius from "../../assets/collectionImages/third.svg";
import play from "../../assets/collectionImages/Play.svg";

const collectionList = [
  // {
  //   title: "Limits",
  //   artist: "Jon Snow",
  //   likes: "2.3m likes",
  //   img: primus,
  // },
  // {
  //   title: "Limits",
  //   artist: "Jon Snow",
  //   likes: "2.3m likes",
  //   img: secondus,
  // },
  // {
  //   title: "Limits",
  //   artist: "Jon Snow",
  //   likes: "2.3m likes",
  //   img: tertius,
  // },
];

const Collections = () => {
  return (
    <StyledCollections>
      <StyledSection>
        <StyledButton>My collection</StyledButton>
        <StyledButton>Likes</StyledButton>
      </StyledSection>
      <StyledGrid>
        {collectionList.map((el, idx) => (
          <StyledItem key={idx}>
            <StyledDetails>
              <div>
                <h1>{el.title}</h1>
                <p>{el.artist}</p>
                <h3>{el.likes}</h3>
              </div>
              <section>
                <img src={play} alt="play-btn" />
              </section>
            </StyledDetails>

            <img src={el.img} alt="img-img" />
          </StyledItem>
        ))}
      </StyledGrid>
    </StyledCollections>
  );
};

export default Collections;
