import React from "react";
import { LoadingSpinner } from "../LoadingSpinner";
import { Anchor, Image } from "./styles";

const DEFAULT_IMAGE = "https://imgur.com/dJa0Hpl.jpg";

export const Category = ({
  cover = DEFAULT_IMAGE,
  path,
  emoji, // = "?",
  loading
}) => (
  <Anchor href={path}>
    { loading ? <LoadingSpinner/> : <Image src={cover} />}
    {emoji}
  </Anchor>
);
