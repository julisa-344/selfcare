import "./Home.css";
import { useState } from "react";
import { useHistory } from "react-router";
import {ErrorMessage} from "../../components/ErrorMessage/ErrorMessage";

const Home = ({ name, setName, fetchQuestions }) => {
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
  
    const history = useHistory();
  
    const handleSubmit = () => {
      if ( !difficulty || !name) {
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
        <h2>Ajustes del quiz</h2>
        <form className="col s12 form">

          {error && <ErrorMessage>Por favor rellene todos los campos</ErrorMessage>}

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control input"
              placeholder="Ingrese su nombre"
              aria-label="Username"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <select
            class="form-select"
            aria-label="Default select example"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option selected>Open this select menu</option>
            <option value="1">Fácil</option>
            <option value="2">Intermedio</option>
            <option value="3">Difícil</option>
          </select>

          <button 
          type="button" 
          class="btn btn-primary Btn"
          onClick={handleSubmit}>
            Comenzar Quiz
          </button>
        </form>
      </div>
    </section>
  );
};

export { Home };
