import { useState, useEffect } from "react";
import "./App.css";
import { getRandomFact } from "./services/facts";
import { useCatImage } from "./hooks/useCatImage";

const App = () => {
  const [fact, setFact] = useState();
  const { imageUrl } = useCatImage({ fact });

  //* Para recuperar la cita al cargar la pag.

  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact));
  }, []);

  const handleClick = async () => {
    const newFact = await getRandomFact();
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
