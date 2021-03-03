import React from "react";
import { useRouteMatch } from "react-router-dom";

function Child1(props) {
  let match = useRouteMatch();

  return (
    <div>
      <h6>Route 1</h6>
      <br />
      <code>{JSON.stringify(match)}</code>
    </div>
  );
}

export default Child1;
