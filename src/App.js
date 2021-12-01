import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Quizzes } from "./Pages/Quizzes/Quizzes";
import { Quiz } from "./Pages/Quizzes/Quiz/Quiz";
import {Facts} from "./Pages/Quizzes/Facts/Facts";
import { Wrong } from "./Pages/Quizzes/Wrong/Wrong"
import { Right } from "./Pages/Quizzes/Right/Right"

import {Filter} from "./Pages/Filter/Filter"

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/startquiz" exact>
            <Quizzes
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

          <Route path="/filter">
            <Filter />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
