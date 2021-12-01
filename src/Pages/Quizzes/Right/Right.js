
import right from "./assets/right.PNG"
import "./Right.css"

const Right = () => {
  return (
    <section className="containerWrongRight">
      <img className="header"  src={right}>
      </img>
      <h3>Correcto</h3>
      <button 
      class="btn btn-primary Btn">
      Siguiente
      </button>
    </section>
  );
};

export { Right };