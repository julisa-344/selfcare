import "./Quiz.css";
import "../../App.css"
import { useState } from "react";
import { Right } from "../Right/Right";
import { Wrong } from "../Wrong/Wrong"

const Quiz = () => {
  const questions = [
    {
      questionText:
        "Las grasas se encuentran únicamente en los alimentos de origen animal",
      answerOptions: [
        { answerText: "Falso", isCorrect: true },
        { answerText: "Verdadero", isCorrect: false },
        { answerText: "Depende", isCorrect: false },
      ],
      fact: "lorem tghg rehn4idv  e3irnbcfdkei eubgrfv rubgdj iubvgfdk rj",
    },
    {
      questionText: "Seleccione el grupo de alimentos que son altas fuente de calcio?",
      answerOptions: [
        { answerText: "Carnes rojas, Naranjas, Cereales", isCorrect: false },
        { answerText: "Brocoli, Almendras, huevo", isCorrect: true },
        { answerText: "Ciruelas, higos, kiwis, Manzanas", isCorrect: false },
        { answerText: "Ninguna de las anteriores", isCorrect: false },
      ],
    },
    {
      questionText:
        "¿Cuáles son los grupos de frutas que son fuentes de vitamina A?",
      answerOptions: [
        { answerText: "Aguacate, plátano, melón", isCorrect: true },
        { answerText: "Piña, plátano, fresas", isCorrect: false },
        { answerText: "kiwi, magos, papaya", isCorrect: false },
        { answerText: "Naranjas, toronjas, piña", isCorrect: false },
      ],
    },
    {
      questionText: "¿Las frutas engordan si se comen de noche?",
      answerOptions: [
        { answerText: "Verdadero", isCorrect: false },
        { answerText: "Falso", isCorrect: true },
        {
          answerText: "Depende de que tan noche y que fruta es",
          isCorrect: false,
        },
      ],
    },

    {
      questionText: "¿Que causa la Malnutrición?",
      answerOptions: [
        {
          answerText: "Disminución de la proliferación celular",
          isCorrect: false,
        },
        {
          answerText: "Disminución de la proliferación celular",
          isCorrect: false,
        },
        { answerText: "Deficiencia de nutrientes", isCorrect: false },
        { answerText: "Todas las anteriores", isCorrect: true },
      ],
    },
    {
      questionText: "Las personas que toman mucho alcohol:",
      answerOptions: [
        {
          answerText: "Pueden presentar carencias de vitaminas y minerales.",
          isCorrect: true,
        },
        {
          answerText: "Suelen llevar una dieta equilibrada.",
          isCorrect: false,
        },
        {
          answerText: "Suelen acumular proteínas en el hígado.",
          isCorrect: false,
        },
        {
          answerText: "Pueden absorber mejor los nutrientes.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "¿Cuáles son los grupos de frutas que son fuentes de vitamina A?",
      answerOptions: [
        { answerText: "Naranjas, toronjas, piña", isCorrect: false },
        { answerText: "Naranjas, toronjas, piña", isCorrect: true },
        { answerText: "Naranjas, toronjas, piña", isCorrect: false },
        { answerText: "Naranjas, toronjas, piña", isCorrect: false },
      ],
    },
    {
      questionText: "¿Las frutas engordan si se comen de noche?",
      answerOptions: [
        { answerText: "Verdadero", isCorrect: false },
        { answerText: "Falso", isCorrect: true },
        {
          answerText: "Depende de que tan noche y que fruta es",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "¿Las frutas engordan si se comen de noche?",
      answerOptions: [
        { answerText: "Verdadero", isCorrect: false },
        { answerText: "Falso", isCorrect: true },
        {
          answerText: "Depende de que tan noche y que fruta es",
          isCorrect: false,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const answerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <section className="container-quiz">
      {showScore ? (
        <h2 className="score-section">
          Tu puntaje es {score} de {questions.length}
        </h2>
      ) : (
        <>
          <section className="question-section">
            
              <h2 className="question-count">Pregunta {currentQuestion + 1}/{questions.length}</h2>
            
            <p className="question-text">
              {questions[currentQuestion].questionText}
            </p>
            
          </section>
          <section className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                class="btn btn-primary Btn"
                onClick={() => answerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}

              </button>
            ))}
          </section>



        </>
      )}
    </section>
  );
};

export { Quiz };
