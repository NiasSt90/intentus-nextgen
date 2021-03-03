import React from "react";

export default function Root(props) {
  return (
    <section className="container">
      <h2>App 2</h2>
      <h4>
        keycloakUser:{" "}
        {JSON.parse(localStorage.getItem("kc-data")).idTokenParsed?.email}
      </h4>
      <small>
        <code>{props.name}</code>
      </small>
    </section>
  );
}
