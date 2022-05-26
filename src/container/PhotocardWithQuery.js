import React from "react";
import { Photocard } from "../components/Photocard";
import { PhotocardSkeleton } from "../skeletons/PhotocardSkeleton";
import { useQuery, gql } from "@apollo/client";

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotocardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id: id }
  });
  console.log("la id: " + id);
  console.log("la data: " + data);
  {
    if (loading) return <PhotocardSkeleton />;
    else if (error) return <p>Oops, something happened</p>;
  }
  return <Photocard {...data.photo} />;
};
