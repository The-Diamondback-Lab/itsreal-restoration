import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Article from './pages/Article';

import tocData from '../data/toc.json';
import LoadingLogo from "./components/LoadingLogo";

export default function App() {
  // Mapping each part in table of contents to a Route object
  let articleRoutes = tocData.map((x, i) => (
    <Route exact path={'/' + x.path} key={`route-part-${i+1}`}>
      <Article part={x.path} hasTimeline={x.hasTimeline}/>
    </Route>
  ));

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/loading">
            <LoadingLogo />
          </Route>
          {articleRoutes}
        </Switch>
    </Router>
  );
}
