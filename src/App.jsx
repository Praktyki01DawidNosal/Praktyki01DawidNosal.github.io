import { useState, useEffect } from "react";
import "./App.css";
import Logo from "/public/logomatmatyka2.png";
import Plansza from "./Plansza";
import Wynik from "./Wynik";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  const onStart = () => {
    setGameStarted(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !gameStarted) {
      onStart();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const endGame = (finalScore) => {
    setScore(finalScore);
    setGameEnded(true);
  };

  return (
    <div>
      {gameEnded ? (
        <Wynik score={score} />
      ) : gameStarted ? (
        <Plansza endGame={endGame} />
      ) : (
        <div className="ekranPoczatkowy">
          <img src={Logo} alt="logo matematyczne" />
          <h1></h1>
          <button className="przyciskSTART" onClick={onStart}></button>
          <p>
            Naciśnij przycisk <i>ROZPOCZNIJ GRĘ</i> lub klawisz <i>ENTER</i>,
            aby kontynuować.
          </p>
          <p className="tekst">Powodzenia! ❤</p>
        </div>
      )}
    </div>
  );
}

export default App;
