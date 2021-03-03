import React from "react";

const styles = {
  normalCard: {},
  newsCard: {
    height: 100,
    // width: '66%'
  },
  twinsCard: {
    // height: 100,
    // width: '33%'
  },
};

export default function Root(props) {
  return (
    <section className="container">
      <h2>Dashboard</h2>
      <h4>
        keycloakUser:{" "}
        {JSON.parse(localStorage.getItem("kc-data")).idTokenParsed?.email}
      </h4>
      <small>
        <code>{props.name}</code>
      </small>
      {/*<div className="card-rows">*/}
      <div className="card-columns">
        <div className="card">card 1</div>
        <div className="card">card 2</div>
        <div className="card">card 3</div>
      </div>
      <div className="card-columns">
        <div className="card" style={styles.newsCard}>
          card 4
        </div>
        <div className="" style={styles.twinsCard}>
          <div className="card">card 5</div>
          <div className="card">card 6</div>
        </div>
      </div>
      {/*</div>*/}
    </section>
  );
}
