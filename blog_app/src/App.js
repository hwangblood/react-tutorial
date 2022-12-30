// basic components (not route)
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

// components to route
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";

import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Missing from "./Missing";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/post">
          <NewPost />
        </Route>
        <Route exact path="/post/:id">
          <PostPage />
        </Route>
        <Route exact path="/about" component={About} />
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
