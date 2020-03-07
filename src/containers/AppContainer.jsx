import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ViewProvider } from "../contexts/View";
import { CharactersProvider } from "../contexts/Characters";
import { CharacterDetailsModalProvider } from "../contexts/CharacterDetailsModal";
import { UserProvider } from "../contexts/User";

import CharacterDetailsModalContainer from "./modals/CharacterDetailsModalContainer";

import HomeViewContainer from "./views/HomeViewContainer";
import MeViewContainer from "./views/MeViewContainer";

const AppContainer = () => {
  return (
    <ViewProvider>
      <UserProvider>
        <CharacterDetailsModalProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <CharactersProvider>
                  <HomeViewContainer />
                </CharactersProvider>
              </Route>
              <Route path="/me">
                <CharactersProvider>
                  <MeViewContainer />
                </CharactersProvider>
              </Route>
            </Switch>
          </Router>
          {/* modals */}
          <CharacterDetailsModalContainer />
        </CharacterDetailsModalProvider>
      </UserProvider>
    </ViewProvider>
  );
};

export default AppContainer;
