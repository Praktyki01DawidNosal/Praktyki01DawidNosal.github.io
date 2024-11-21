// eslint-disable-next-line react/prop-types
function Wynik({ score }) {
  const totalQuestions = 20;
  const percentage = Math.round((score / totalQuestions) * 100);

  let grade;
  let gradeColor;

  if (percentage >= 98 && percentage <= 100) {
    grade = "Celujący (6)";
    gradeColor = "green";
  } else if (percentage >= 94 && percentage <= 97) {
    grade = "Bardzo dobry plus (5+)";
    gradeColor = "green";
  } else if (percentage >= 85 && percentage <= 93) {
    grade = "Bardzo dobry (5)";
    gradeColor = "green";
  } else if (percentage >= 81 && percentage <= 84) {
    grade = "Dobry plus (4+)";
    gradeColor = "lightgreen";
  } else if (percentage >= 70 && percentage <= 80) {
    grade = "Dobry (4)";
    gradeColor = "lightgreen";
  } else if (percentage >= 66 && percentage <= 69) {
    grade = "yellow";
    gradeColor = "yellow";
  } else if (percentage >= 53 && percentage <= 65) {
    grade = "Dostateczny (3)";
    gradeColor = "yellow";
  } else if (percentage >= 49 && percentage <= 52) {
    grade = "Dopuszczający plus (2+)";
    gradeColor = "orange";
  } else if (percentage >= 36 && percentage <= 48) {
    grade = "Dopuszczający (2)";
    gradeColor = "orange";
  } else if (percentage >= 1 && percentage <= 35) {
    grade = "Niedostateczny (1)";
    gradeColor = "red";
  } else {
    grade = "Idź się lepiej poucz";
    gradeColor = "red";
  }

  return (
    <div className="ekranWyniki">
      <div className="ramka">
        <h1>
          {score} / {totalQuestions}
        </h1>

        <h3>
          <p style={{ color: gradeColor }}>Ocena: {grade}</p>
        </h3>
        <p>Procent poprawnych odpowiedzi: {percentage}%</p>
      </div>
      <br />
      <button
        className="przyciskZAGRAJPONOWNIE"
        onClick={() => window.location.reload()}
      ></button>
    </div>
  );
}

export default Wynik;
