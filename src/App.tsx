import { AppRouter } from "./routes/AppRouter";
import { FunctionComponent } from "react";
import GlobalStyle from "./styles/globalStyles";
import React from "react";

export const App: FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
};
