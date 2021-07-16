import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/characters/page/1" />
        </Route>
        <Route path="/characters" exact>
          <Redirect to="/characters/page/1" />
        </Route>
        <Route path="/characters/:id" exact>
          <CharacterDetail />
        </Route>
        {/*
        <Route path="/characters/detail/:id" exact>
          <CharacterDetail />
        </Route>
        <Route path="/characters/detail/:id/:page" exact>
          <CharacterDetail />
        </Route>
        */}
        <Route path="/characters/page/:page" exact>
          <CharacterList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
