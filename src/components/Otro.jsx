import { useCatImage } from "../hooks/useCatImage";

const Otro = () => {
  const { imageUrl } = useCatImage({ fact: "cat" });
  console.log(imageUrl);

  return (
    <>
      {imageUrl && (
        <img src={imageUrl} alt="An image from https://cataas.com" />
      )}
    </>
  );
};

export default Otro;
