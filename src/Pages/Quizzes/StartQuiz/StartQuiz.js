import "./StartQuiz.css";
import { useState } from "react";
import { useHistory } from "react-router";
import {ErrorMessage} from "./components/ErrorMessage/ErrorMessage";

const StartQuiz = ({ fetchQuestions }) => {
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const history = useHistory();

    const handleSubmit = () => {
      if ( !difficulty ) {
        setError(true);
        return;
      } else {
        setError(false);
        fetchQuestions(difficulty);
        history.push("/quiz");
      }
    };


  return (
    <section className="Home-container">
      <div class="row">
        <h2>Seleccione su nivel</h2>

        <form className="form">

          {error && <ErrorMessage>Por favor rellene todos los campos</ErrorMessage>}

          {/* <div class="input-group mb-3">
            <input
              type="text"
              class="form-control input"
              placeholder="Ingrese su nombre"
              aria-label="Username"
              onChange={(e) => setName(e.target.value)}
            />
          </div> */}

          {/* <select
            class="form-select"
            aria-label="Default select example"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option selected>Seleccione su nivel</option>
            <option value="1">Fácil</option>
            <option value="2">Intermedio</option>
            <option value="3">Difícil</option>
          </select> */}
          <button className="btn-difficulty">
            <h2
            value={difficulty}
            // onChange={(e) => setDifficulty(e.target.value)}
            >
            Facíl</h2>
          </button>
          <button className="btn-difficulty">
            <h2 
            value={difficulty}
            // onChange={(e) => setDifficulty(e.target.value)}
            >
            Intermedio</h2>
          </button>
          <button className="btn-difficulty">
            <h2 
            value={difficulty}
            // onChange={(e) => setDifficulty(e.target.value)}
            >
            Dificil</h2>
          </button>

          <button
          type="button"
          class="btn btn-primary Btn Btn-secondary"
          onClick={handleSubmit}
          >
          <a href="#">Comenzar Quiz</a>
          </button>

        </form>
      </div>
    </section>
  );
};

export { StartQuiz };
