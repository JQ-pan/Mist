import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import BottomBlock from "./components/BottomBlock"
import GameIndex from "./components/GameIndexPage/GameIndex";
import GameShowPage from "./components/GameShowPage/";
import CartPage from "./components/CartPage/";

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
        <Route exact path="/">
          <GameIndex />
          <BottomBlock />
        </Route>
        <Route path="/:gameId">
          <GameShowPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;