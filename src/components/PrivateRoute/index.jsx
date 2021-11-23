import { Redirect, Route } from "react-router";
import { storageData } from "../../utils/storageData";

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const loggedInUser = storageData.getLoggedInUser();
        if (loggedInUser) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
}
