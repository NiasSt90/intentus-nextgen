import React from "react";

const styles = {
  // position: 'fixed',
  top: 0,
  width: "100%",
};

export default function Root(props) {
  return (
    <header style={styles}>
      <nav className="navbar bg-dark mb-auto">
        <a className="navbar-brand" href="/">
          <img src="" alt="logo" width="30" height="30" /> Intentus NextGen
        </a>
        <span style={{ color: "white" }}>
          (keycloakUser:{" "}
          {JSON.parse(localStorage.getItem("kc-data")).idTokenParsed?.email})
        </span>
        <code>
          <code>({props.name})</code>
        </code>
      </nav>
    </header>
  );
}
