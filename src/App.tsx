import React from "react";
import Home from "components/Home";
import Login from "components/Login";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
function App() {
  const loggedIn = true;
  return (
    <>
      <Router>
        <Route exact path="/">
          {loggedIn ? <Home /> : <Redirect to="/Login" />}
        </Route>
        <Route path="/Login" component={Login} />
      </Router>
    </>
  );
}

export default App;
