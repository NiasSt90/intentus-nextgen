import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Main from "./components/Main";

export default function Root(props) {
  const APP_PATH = window.process?.env.REACT_APP_PATH || "/app1";

  return (
    <section className="container">
      <h2>App 1</h2>
      <h4>
        keycloakUser:{" "}
        {JSON.parse(localStorage.getItem("kc-data")).idTokenParsed?.email}
      </h4>
      <small>
        <code>{props.name}</code>
      </small>
      <hr />
      <BrowserRouter>
        <Switch>
          <Route exact path={APP_PATH} component={Main} />
          <Route path={`${APP_PATH}/route1`} component={Child1} />
          <Route path={`${APP_PATH}/route2`} component={Child2} />
        </Switch>
      </BrowserRouter>
    </section>
  );
}
