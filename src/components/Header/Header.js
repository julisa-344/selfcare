import { BrowserRouter, Link } from "react-router-dom";
import "./Header.css";
import imagenes from "../../assets/img"

const Header = () => {
  return (
    <BrowserRouter>
      <header className="header">
        <img className="header-banner" src={imagenes.banerQuizz}/>
        <Link to="/">
          Quizz
        </Link>
      </header>
    </BrowserRouter>
  );
};

export { Header };
