import { useState, useEffect } from "react";
import "./App.css";
import { getRandomFact } from "./services/facts";

const CAT_PREFIX_URL = "https://cataas.com/";

const App = () => {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  // Para recuperar la cita al cargar la pag.

  useEffect(() => {
    getRandomFact().then(setFact);
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

  const handleClick = async () => {
    const newFact = await getRandomFact(setFact);
    setFact(newFact);
  };

  return (
    <main>
      <h1>App de chatons uwu</h1>
      <button onClick={handleClick}>Get new fact</button>
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
