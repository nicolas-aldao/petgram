import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotocards } from "./components/ListOfPhotocards";
import { Logo } from "./components/Logo";

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotocards />
  </div>
);
