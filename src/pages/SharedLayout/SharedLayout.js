import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Playerbar from "../../components/Playerbar/Playerbar";
import StyledSharedLayout from "./StyledSharedLayout";
import Popup from "../../components/Popup/Popup";

const SharedLayout = ({ spotify }) => {
  return (
    <StyledSharedLayout>
      <Header />
      <Sidebar />
      <Popup />
      <Outlet />
      <Playerbar spotify={spotify} />
    </StyledSharedLayout>
  );
};

export default SharedLayout;
