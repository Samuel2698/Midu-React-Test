import { useState, useEffect } from "react";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
const CAT_PREFIX_URL = "https://cataas.com/";

const App = () => {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const threeFirtsWords = fact.split(" ", 3).join(" ");
        console.log(threeFirtsWords);

        fetch(
          `https://cataas.com/cat/says/${threeFirtsWords}?size=50&color=red&json=true`
        )
          .then((res) => res.json())
          .then((res) => {
            const { url } = res;
            setImageUrl(`${CAT_PREFIX_URL}${url}`);
          });
      });
  }, []);

  return (
    <main>
      <h1>App de chatons uwu</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the three first words from ${fact}`}
        />
      )}
    </main>
  );
};

export default App;
