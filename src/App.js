import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Home, AddUserForm, EditPost, ViewUserPage, CreatePost } from "./AllLayouts";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/create-post" component={CreatePost} />
      <Route exact path="/user/add" component={AddUserForm} />
      <Route exact path="/user/view/:id" component={ViewUserPage} />
      <Route exact path="/post/edit/:id" component={EditPost} />

    </Switch>
  </Router>
);

export default App;
