import Js from './Components/Js.js';
import Css from './Components/Css.js';
import Html from './Components/Html.js';
import Home from './Components/Home.js';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/html">html</Link></li>
            <li><Link to="/css">css</Link></li>
            <li><Link to="/js">js</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/html" component={Html}/>
          <Route path="/css" component={Css}/>
          <Route path="/js" component={Js}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
