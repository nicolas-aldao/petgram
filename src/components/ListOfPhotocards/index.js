import React, {Fragment} from "react";
import { useQuery, gql } from "@apollo/client";
import { Photocard } from "../Photocard";
import { PhotocardSkeleton } from "../../skeletons/PhotocardSkeleton";

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotocards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId: categoryId }
  });
  if (data) {
    return (
      <ul>
        {data.photos.map(photo => (
          <Photocard key={photo.id} id={photo.id} {...photo} />
        ))}
      </ul>
    );
  }
  if (loading) {
    return (
      <Fragment>
        <PhotocardSkeleton />
        <PhotocardSkeleton />
        <PhotocardSkeleton />
      </Fragment>
    );
  }
};
