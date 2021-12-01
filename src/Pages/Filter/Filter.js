import "./Filter.css";

const Filter = () => {
  return (
    <section className="container-filter">
      <img></img>
      <h2>Filtros</h2>
      <form className="form-filter">
        <div className="container-options-filter">
        <h3>Personalizado</h3>
          <label for="customRange1" class="form-label">
            Calorías
          </label>
          <input type="range" class="form-range" id="customRange1" /> <br />
          <label for="customRange1" class="form-label">
            Proteínas
          </label>
          <input type="range" class="form-range" id="customRange1" /> <br />
          <label for="customRange1" class="form-label">
            Carbohidratos
          </label>
          <input type="range" class="form-range" id="customRange1" /> <br />
          <label for="customRange1" class="form-label">
            Grasas
          </label>
          <input type="range" class="form-range" id="customRange1" /> <br />
        </div>

        <div className="container-options-filter">
        <h3>Comidas</h3>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
            Desayuno
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
             
            />
            <label class="form-check-label" for="flexCheckChecked">
              Almuerzo
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              
            />
            <label class="form-check-label" for="flexCheckChecked">
              Cena
            </label>
          </div>
        </div>

        <div className="container-options-filter">
            <h3>Tiempo</h3>
            <label for="customRange1" class="form-label">
            Tiempo
          </label>
          <input type="range" class="form-range" id="customRange1" />
        </div>

        <div className="container-options-filter">
        <h3>Dificultad</h3>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
            Fácil
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
           
            />
            <label class="form-check-label" for="flexCheckChecked">
              Media
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
           
            />
            <label class="form-check-label" for="flexCheckChecked">
              Difícil
            </label>
          </div>
        </div>

        <button class="btn btn-primary Btn"><a href="#">
          Aplicar
          </a>
          </button>

      </form>
    </section>
  );
};

export { Filter };
