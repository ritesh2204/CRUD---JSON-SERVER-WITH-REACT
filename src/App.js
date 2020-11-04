import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Home, AddUserForm, EditUser, ViewUserPage } from "./AllLayouts";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/user/add" component={AddUserForm} />
      <Route exact path="/user/edit/:id" component={EditUser} />
      <Route exact path="/user/view/:id" component={ViewUserPage} />
    </Switch>
  </Router>
);

export default App;
