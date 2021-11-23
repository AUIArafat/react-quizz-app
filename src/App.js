import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import { UserProvider } from "./contexts/Context";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

function App() {
  return (
    <Router>
      <UserProvider>
        <Layout>
          <Switch>
            <Route exact path={"/signin"} component={Signin} />
            <PrivateRoute exact path={"/"} component={Home} />
          </Switch>
        </Layout>
      </UserProvider>
    </Router>
  );
}

export default App;
