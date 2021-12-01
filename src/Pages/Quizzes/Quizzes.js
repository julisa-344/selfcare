import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useState } from "react";
import { Header } from "./StartQuiz/components/Header/Header";
import { StartQuiz } from "./StartQuiz/StartQuiz";
// import { Quiz } from "./Quiz/Quiz";
// import {Facts} from "./Facts/Facts";
// import { Wrong } from "./Wrong/Wrong"
// import { Right } from "./Right/Right"


function Quizzes() {
  const [name, setName] = useState();
  const fetchQuestions = () => {};

  return (
    <Router>
        <Switch>
          <Route path="/startquiz" exact>
            <Header />
            <StartQuiz
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>

          {/* <Route path="/quiz">
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
          </Route> */}

        </Switch>

    </Router>
  );
}

export { Quizzes };