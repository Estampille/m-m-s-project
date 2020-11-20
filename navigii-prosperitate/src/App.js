import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Form from "./components/Form";
import MyTravel from "./components/MyTravel";
import "./components/HomePage.css";

console.log(process.env.REACT_APP_GRAPHHOPPER_API_KEY);

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
            path="/my-travel/:name/:age/:rank/:start/:arrive/:departure/:travelMode"
            component={MyTravel}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
