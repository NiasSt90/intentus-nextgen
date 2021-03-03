import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function Main(props) {
  let match = useRouteMatch();

  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/route1`}>Child 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/route2`}>Child 2</Link>
        </li>
      </ul>
      <code>{JSON.stringify(match)}</code>
    </div>
  );
}

export default Main;
