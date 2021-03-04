import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AuthLogin } from "./commons/Auth";
import Login from "./pages/Login";
import Empty from "./pages/Empty";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => {
            return <Redirect to="home"></Redirect>;
          }}
        />
        <Route
          path="/home"
          render={(props) => {
            //判斷登入狀態

            if (!AuthLogin()) {
              return <Redirect to={`/login?url=${props.match.path}`}></Redirect>;
            }
            return <Home {...props}></Home>;
          }}
        />
        <Route path="/login" component={Login} />
        <Route component={Empty} />
        {/* 1 */}
      </Switch>
    </Router>
  );
}

export default App;
