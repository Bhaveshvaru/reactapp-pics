import './ImageList.css'
import React from 'react';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <img src={image.urls.regular} key={image.id} alt={image.description} />;
  });
  return <div className="image-list">{images}</div>;
};
export default ImageList;
