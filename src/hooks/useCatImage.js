import { useState, useEffect } from "react";
import { getImages } from "../services/images";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  //* Para recuperar la img cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return;

    const threeFirtsWords = fact.split(" ", 3).join(" ");
    console.log(threeFirtsWords);

    getImages({ threeFirtsWords }).then((newImages) => setImageUrl(newImages));
  }, [fact]);

  return { imageUrl };
}
