import LandingPage from './pages/LandingPage'
import MenuPage from './pages/MenuPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import "./assets/css/stylesheet.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/menu">
            <MenuPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
