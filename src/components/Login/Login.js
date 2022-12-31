import React from "react";
import { loginUrl } from "../../Credentials";
import StyledLogin from "./StyledLogin";
import logo from "../../assets/images/logo.svg";

const Login = () => {
  return (
    <StyledLogin>
      <section>
        <img src={logo} />
        <h1>Musiq</h1>
      </section>

      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </StyledLogin>
  );
};

export default Login;
