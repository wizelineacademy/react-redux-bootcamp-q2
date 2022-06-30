import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import {createMemoryHistory} from 'history'
import { Router } from "react-router-dom";
import '@testing-library/jest-dom';

import { Header } from "../components/Header.js";

afterEach(cleanup)

it("renders Header correctly", () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <Header/>
    </Router>
  )

  //Renders header
  screen.getByTestId("bar");
})