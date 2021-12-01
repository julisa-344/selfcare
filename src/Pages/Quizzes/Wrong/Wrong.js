import wrong from "./assets/wrong.PNG";

const Wrong = () => {
  return (
    <section className="containerWrongRight">
      <img className="header" src={wrong}></img>
      <h3>Inorrecto</h3>
      <button class="btn btn-primary Btn">Intentalo de nuevo</button>
    </section>
  );
};

export { Wrong };
