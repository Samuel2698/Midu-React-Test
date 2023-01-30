import { useState, useEffect } from "react";
import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
const CAT_PREFIX_URL = "https://cataas.com/";

const App = () => {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  // Para recuperar la cita al cargar la pag.
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  // Para recuperar la img cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return;

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
  }, [fact]);

  return (
    <main>
      <h1>App de chatons uwu</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Image extracted using the three first words from ${fact}`}
          />
        )}
      </section>
    </main>
  );
};

export default App;
