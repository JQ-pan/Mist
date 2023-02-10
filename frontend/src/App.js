import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import BottomBlock from "./components/BottomBlock"
import GameIndex from "./components/HomeDisplayPage/GameIndex";

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
        <GameIndex />
      <BottomBlock />
    </>
  );
}

export default App;