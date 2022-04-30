import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { AUTH0_DOMAIN, AUTH0_CLIENTID, AUTH0_AUDIENCE } from "./config/Config";

const providerConfig = {
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_CLIENTID,
  audience: AUTH0_AUDIENCE,
  redirectUri: window.location.origin
};

ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
