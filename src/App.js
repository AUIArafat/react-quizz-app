import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import { UserProvider } from "./contexts/Context";
import AnswersPage from "./pages/AnswersPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { QuestionsPage } from "./pages/QuestionsPage";
import QuizPage from "./pages/QuizPage";
import Signin from "./pages/Signin";

function App() {
  return (
    <Router>
      <UserProvider>
        <Layout>
          <Switch>
            <Route exact path={"/signin"} component={Signin} />
            <PrivateRoute exact path={"/"} component={HomePage} />
            <PrivateRoute exact path={"/questions"} component={QuestionsPage} />
            <PrivateRoute exact path={"/answers"} component={AnswersPage} />
            <PrivateRoute exact path={"/quiz"} component={QuizPage} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </UserProvider>
    </Router>
  );
}

export default App;
