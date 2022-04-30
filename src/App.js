import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./components/Router/Router";

import { useAuth0 } from "@auth0/auth0-react";
import { createUser } from "./api/user";
import { AUTH0_CLAIMS_URI } from "./config/Config";

function App() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const createUserHandler = async () => {
    if (isAuthenticated) {
      const loginCount = parseInt(user[`${AUTH0_CLAIMS_URI}/logins`]);

      if (loginCount <= 1) {
        const token = await getAccessTokenSilently();
        const result = await createUser(user, token);
        console.log(result.data);
      } else {
        console.log("User already present in our system");
      }
    } else {
      console.log("User is not authenticated");
    }
  };

  useEffect(() => {
    createUserHandler();
  }, [isAuthenticated]);

  const renderApp = () => <Router />;

  return <div className="App">{renderApp()}</div>;
}

export default App;
