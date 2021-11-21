import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/signin"} component={Signin} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
