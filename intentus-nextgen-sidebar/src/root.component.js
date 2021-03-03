import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const styles = {
  // width: '25%',
  height: 1200,
};

export default function Root(props) {
  return (
    <section className="bg-dark" style={styles}>
      <br />
      <small>
        <code>({props.name})</code>
      </small>
      <span style={{ color: "white" }}>
        (keycloakUser:{" "}
        {JSON.parse(localStorage.getItem("kc-data")).idTokenParsed?.email})
      </span>
      {/*<div className="nav flex-column">*/}
      <div className="list-group panel">
        <BrowserRouter>
          <Link to="/dashboard" className="nav-link">
            Übersicht
          </Link>
          <Link to="/app1" className="nav-link">
            App 1
          </Link>
          <Link to="/app2" className="nav-link">
            App 2
          </Link>
          <Link to="/app3" className="nav-link">
            App 3
          </Link>
          <Link to="/barmenia-oa-tier" className="nav-link">
            Barmenia oa-tier
          </Link>
          <Link to="/barmenia-oa-rs" className="nav-link">
            Barmenia oa-rs
          </Link>
        </BrowserRouter>
      </div>
    </section>
  );
}
