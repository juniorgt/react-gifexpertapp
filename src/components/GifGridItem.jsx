import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  // console.log( id, title, url );

  return (
    <div>
      <img className="aspect-square object-cover" src={url} alt={title} />
      <p className="text-white"> {title}</p>
    </div>
  );
};
