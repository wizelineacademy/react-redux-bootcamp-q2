import { Link } from "react-router-dom";
import { Main } from "../styles/pages/Home.styles";
import React from "react";

export const Home: React.FC = () => {
  return (
    <Main>
      <h1>Welcome to WizeStore!</h1>
      <p>
        Browse our <Link to="/products">products</Link>
      </p>
    </Main>
  );
};
