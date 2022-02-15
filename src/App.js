import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Searchpage from './components/searchpage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
          <Route exact path="/search">
            <Searchpage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
