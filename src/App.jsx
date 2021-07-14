import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CharacterList />
        </Route>
        <Route exact path="/characters">
          <CharacterList />
        </Route>
        <Route exact path="/characters/:id">
          <CharacterDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
