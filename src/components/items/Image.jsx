import { useEffect, useState } from "react";

export const Image = ({ src, alt, size }) => {
    const [image, setImage] = useState(null);
  
    useEffect(() => {
      const loadImage = async () => {
        const img = await import(src);
        setImage(img.default);
      };
      loadImage();
    }, [src]);
  
    return (
      <img src={image} alt={alt} style={{ width: size }} />
    );
  };
  