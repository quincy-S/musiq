import React from "react";
import StyledProfile, { StyledSection, StyledHeading } from "./StyledProfile";
import { useDataLayerValue } from "../../DataLayer";

const Profile = () => {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <StyledProfile>
      <StyledHeading>Profile</StyledHeading>
      <StyledSection>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
        </div>
        <p>{user.display_name}</p>
      </StyledSection>
    </StyledProfile>
  );
};

export default Profile;
