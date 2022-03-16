import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Router from "./components/Router/Router";

function App() {
  const renderApp = () => <Router />;

  return <div className="App">{renderApp()}</div>;
}

export default App;
