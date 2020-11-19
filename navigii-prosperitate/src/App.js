import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Form from "./components/Form";
import MyTravel from "./components/MyTravel";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
            <Form />
          </Route>
          <Route
            path="/my-travel/:name/:age/:rank/:region/:departure/:travelMode"
            component={MyTravel}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
