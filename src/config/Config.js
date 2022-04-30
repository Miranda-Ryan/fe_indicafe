const API_BASE_URL = process.env.REACT_APP_BASE_URL;
const TIMEOUT = process.env.REACT_APP_API_TIMEOUT;
const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const AUTH0_CLIENTID = process.env.REACT_APP_AUTH0_CLIENTID;
const AUTH0_CLAIMS_URI = process.env.REACT_APP_AUTH0_CLAIMS_URI;
const AUTH0_AUDIENCE = process.env.REACT_APP_AUTH0_AUDIENCE;

if (!API_BASE_URL) {
  throw new Error(
    ".env is missing the definition for REACT_APP_BASE_URL env variable"
  );
}

if (!TIMEOUT) {
  throw new Error(
    ".env is missing the definition for REACT_APP_API_TIMEOUT env variable"
  );
}

if (!AUTH0_DOMAIN) {
  throw new Error(
    ".env is missing the definition for REACT_APP_AUTH0_DOMAIN env variable"
  );
}

if (!AUTH0_CLIENTID) {
  throw new Error(
    ".env is missing the definition for REACT_APP_AUTH0_CLIENTID env variable"
  );
}

if (!AUTH0_CLAIMS_URI) {
  throw new Error(
    ".env is missing the definition for REACT_APP_AUTH0_CLAIMS_URI env variable"
  );
}

if (!AUTH0_AUDIENCE) {
  throw new Error(
    ".env is missing the definition for REACT_APP_AUTH0_AUDIENCE env variable"
  );
}

export {
  API_BASE_URL,
  TIMEOUT,
  AUTH0_DOMAIN,
  AUTH0_CLIENTID,
  AUTH0_CLAIMS_URI,
  AUTH0_AUDIENCE
};
