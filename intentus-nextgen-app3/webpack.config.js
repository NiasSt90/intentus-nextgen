const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "OnestyTech",
    projectName: "intentus-nextgen-app3",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {});
};
