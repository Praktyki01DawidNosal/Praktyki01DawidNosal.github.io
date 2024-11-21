import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Plansza({ endGame }) {
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(10);
  const [questionCount, setQuestionCount] = useState(0);

  const maxQuestions = 20;
  const totalTime = 10;

  useEffect(() => {
    if (questionCount < maxQuestions) {
      generateQuestion();
    } else {
      endGame(score);
    }
  }, [questionCount]);

  useEffect(() => {
    if (timeLeft === 0) return handleAnswerSubmit();
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = ["+", "-", "*"][Math.floor(Math.random() * 3)];
    const questionText = `${num1} ${operator} ${num2}`;
    setQuestion(questionText);
    setCorrectAnswer(eval(questionText));
    setUserAnswer("");
    setTimeLeft(totalTime);
  };

  const handleAnswerSubmit = (e) => {
    e?.preventDefault();
    if (parseInt(userAnswer) === correctAnswer) {
      setScore((prev) => prev + 1);
    } else {
      setIncorrectCount((prev) => prev + 1);
    }
    setQuestionCount((prev) => prev + 1);
  };

  const progressWidth = (timeLeft / totalTime) * 100;

  return (
    <div className="ekranPoczatkowy">
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{
            width: `${progressWidth}%`,
            backgroundColor: `${
              progressWidth < 40
                ? "red"
                : progressWidth < 70
                ? "orange"
                : "green"
            }`,
          }}
        ></div>
      </div>
      <div className="Laczenie">
        <button
          className="powrot"
          onClick={() => window.location.reload()}
        ></button>
        <h2>Pytanie: {question}</h2>
      </div>
      <form onSubmit={handleAnswerSubmit}>
        <div className="Laczenie">
          <input
            className="twojaOdpowiedz"
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Twoja odpowiedź"
          />
          <button className="przyciskSPRAWDZ" type="submit"></button>
        </div>
      </form>
      <div className="informacje">
        <p className="poprawne">Poprawne odpowiedzi: {score}</p>
        <p className="niepoprawne">Niepoprawne odpowiedzi: {incorrectCount}</p>
        <p>
          Liczba pytań: {questionCount}/{maxQuestions}
        </p>
      </div>
    </div>
  );
}

export default Plansza;
