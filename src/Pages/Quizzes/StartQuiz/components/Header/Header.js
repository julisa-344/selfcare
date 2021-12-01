import { BrowserRouter } from "react-router-dom";
import "./Header.css";
import imagenes from "../../assets/banner-quizz.jpg"

const Header = () => {
  return (
    <BrowserRouter>
      <header className="header">
        <img className="header-banner" src={imagenes}/>
        <h1>
          Quizz
        </h1>
      </header>
    </BrowserRouter>
  );
};

export { Header };
