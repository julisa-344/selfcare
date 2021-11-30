import { BrowserRouter as Router, Switch, Route, link } from "react-router-dom";
import "./App.css";

import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Home } from "./Pages/Home/Home";
import { Quiz } from "./Pages/Quiz/Quiz";
import { Result } from "./Pages/Result/Result";

function App() {
  const [name, setName] = useState();
  const fetchQuestions = () =>{

  }
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home 
            name={name} 
            setName={setName} 
            fetchQuestions={fetchQuestions}
            />
            
          </Route>

          <Route path="/quiz">
            <Quiz />
          </Route>

          <Route path="/result">
            <Result />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
