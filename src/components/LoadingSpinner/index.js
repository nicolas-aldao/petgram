import React from "react";
import { SpinnerDiv, SpinnerWrapper } from "./styles";

export const LoadingSpinner = () => {
  return (
    <SpinnerWrapper>
      <SpinnerDiv id="loading"></SpinnerDiv>
    </SpinnerWrapper>
  );
};
