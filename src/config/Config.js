const API_BASE_URL = process.env.REACT_APP_BASE_URL;
const TIMEOUT = process.env.REACT_APP_API_TIMEOUT;

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

export { API_BASE_URL, TIMEOUT };
