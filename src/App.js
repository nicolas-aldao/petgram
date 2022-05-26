import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotocards } from "./components/ListOfPhotocards";
import { Logo } from "./components/Logo";
import { PhotocardWithQuery } from "./container/PhotoCardWithQuery";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      {detailId ? (
        <PhotocardWithQuery id={detailId} />
      ) : (
        <ListOfPhotocards categoryId={1} />
      )}
    </div>
  );
};
