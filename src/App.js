import { BrowserRouter as Router, Switch, Route, link } from "react-router-dom";
import "./App.css";

import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Home } from "./Pages/Home/Home";
import { Quiz } from "./Pages/Quiz/Quiz";
import {Facts} from "./Pages/Facts/Facts";
import { Wrong } from "./Pages/Wrong/Wrong"
import { Right } from "./Pages/Right/Right"

function App() {
  const [name, setName] = useState();
  const fetchQuestions = () => {};
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>

          <Route path="/quiz">
            <Quiz />
          </Route>

          <Route path="/facts">
            <Facts />
          </Route>

          <Route path="/wrong">
            <Wrong />
          </Route>

          <Route path="/right">
            <Right />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
