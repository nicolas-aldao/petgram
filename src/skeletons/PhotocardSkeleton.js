import React, {Fragment} from "react";
import ReactPlaceholder from "react-placeholder";
import {
  TextBlock,
  RectShape,
  RoundShape
} from "react-placeholder/lib/placeholders";

export const PhotocardSkeleton = () => {
  return (
    <Fragment>
      <RectShape color="#eee" style={{ height: "260px", marginBottom: 10 }} />
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <RoundShape
          color="#eee"
          style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }}
        />
        <TextBlock color="#eee" rows={1} style={{ width: 120 }} />
      </div>
    </Fragment>
  );
};

// return (
//     <Article ref={element}>
//       {show && (
//         <ReactPlaceholder
//           ready={!loading}
//           showLoadingAnimation={true}
//           customPlaceholder={photoCardSkeleton}
//         >
//           <React.Fragment>
//             <a href={`/?detail=${id}`}>
//               <ImgWrapper>
//                 <Img src={src} />
//               </ImgWrapper>
//             </a>
//             <Button onClick={() => setLiked(!liked)}>
//               <Icon size="32px" /> {likes} likes!
//             </Button>
//           </React.Fragment>
//         </ReactPlaceholder>
//       )}
//     </Article>
//   )
