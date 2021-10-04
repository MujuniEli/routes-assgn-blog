import "./App.css";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/Home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
