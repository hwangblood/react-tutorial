import { Route, Switch } from "react-router-dom";

// basic components (not route)
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

// components to route
import Home from "./Home";
import NewPost from "./NewPost";
import EditPost from "./EditPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";

import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <Header title="React JS Blog" />
      <DataProvider>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={NewPost} />
          <Route path="/edit/:id" component={EditPost} />
          <Route exact path="/post/:id" component={PostPage} />
          <Route exact path="/about" component={About} />
          <Route path="*" component={Missing} />
        </Switch>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
