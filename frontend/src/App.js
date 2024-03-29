import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import BottomBlock from "./components/BottomBlock"
import GameIndex from "./components/GameIndexPage";
import GameShowPage from "./components/GameShowPage/";
import CartPage from "./components/CartPage/";
import LibraryPage from "./components/LibraryPage/";
import GameGenrePage from "./components/GameGenrePage";

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
        <Route path="/cart">
          <CartPage />
        </Route>

        <Route path="/library">
          <LibraryPage />
        </Route>

        <Route path="/game/:gameId">
          <GameShowPage />
        </Route>

        <Route path="/:genre">
          <GameGenrePage />
        </Route>

      </Switch>
    </>
  );
}

export default App;