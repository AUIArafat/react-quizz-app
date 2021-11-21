import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={"/"} component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
