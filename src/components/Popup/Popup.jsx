import React from "react";
import { useNavigate } from "react-router-dom";
import StyledPopup, {
  StyledButtons,
  StyledText,
  StyledButton,
} from "./StyledPopup";
import { useDataLayerValue } from "../../DataLayer";

const Popup = () => {
  const navigate = useNavigate();
  const [{ showPopup }, dispatch] = useDataLayerValue();

  function handleCancel() {
    dispatch({ type: "SET_POPUP", showPopup: false });
  }

  function handleLogout() {
    dispatch({ type: "SET_TOKEN", token: null });
    navigate("/");
  }

  return (
    <StyledPopup show={showPopup}>
      <StyledText>
        <p>Are you sure you want to logout</p>
      </StyledText>
      <StyledButtons>
        <StyledButton pos="left" onClick={handleCancel}>
          Cancel
        </StyledButton>
        <StyledButton pos="right" onClick={handleLogout}>
          Log out
        </StyledButton>
      </StyledButtons>
    </StyledPopup>
  );
};

export default Popup;
