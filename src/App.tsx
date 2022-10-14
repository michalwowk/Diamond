import { useState } from "react";
import { Diamond } from "./components/Diamond";
import { AlphabetCharacters, alphabetRegEx } from "./utils/utils";

export default function App() {
  const [character, setCharacter] = useState<AlphabetCharacters | "">("");

  const handleCharacterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();

    const isValid = alphabetRegEx.test(value) || value === "";

    if (!isValid) {
      return;
    }

    setCharacter(value as AlphabetCharacters);
  };

  return (
    <div className="app">
      <div>
        <h1>The Diamond Kata</h1>
        <div className="form-group">
          <label htmlFor="character">Alphabet character</label>
          <input
            className="form-input"
            onChange={handleCharacterChange}
            placeholder="Alphabet character"
            value={character}
            id="character"
          />
        </div>
      </div>
      <section>{character && <Diamond character={character} />}</section>
    </div>
  );
}
