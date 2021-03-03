import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    return (
      <div>
        {props.name} error: {`${JSON.stringify(err)} ${JSON.stringify(info)}`}
      </div>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
