import { registerApplication, start } from "single-spa";
// import keycloak from "../keycloak/keycloak";

registerApplication({
  name: "@OnestyTech/intentus-nextgen-navbar",
  app: () => System.import("@OnestyTech/intentus-nextgen-navbar"),
  activeWhen: ["/"],
  customProps: { domElement: document.getElementById("nav-container") },
});

registerApplication({
  name: "@OnestyTech/intentus-nextgen-sidebar",
  app: () => System.import("@OnestyTech/intentus-nextgen-sidebar"),
  activeWhen: ["/"],
  customProps: { domElement: document.getElementById("sidenav-container") },
});

registerApplication({
  name: "@OnestyTech/intentus-nextgen-dashboard",
  app: () => System.import("@OnestyTech/intentus-nextgen-dashboard"),
  activeWhen: ["/dashboard"],
  customProps: { domElement: document.getElementById("main-container") },
});

registerApplication({
  name: "@OnestyTech/intentus-nextgen-app1",
  app: () => System.import("@OnestyTech/intentus-nextgen-app1"),
  activeWhen: ["/app1"],
  customProps: { domElement: document.getElementById("main-container") },
});

registerApplication({
  name: "@OnestyTech/intentus-nextgen-app2",
  app: () => System.import("@OnestyTech/intentus-nextgen-app2"),
  activeWhen: ["/app2"],
  customProps: { domElement: document.getElementById("main-container") },
});

registerApplication({
  name: "@OnestyTech/intentus-nextgen-app3",
  app: () => System.import("@OnestyTech/intentus-nextgen-app3"),
  activeWhen: ["/app3"],
  customProps: { domElement: document.getElementById("main-container") },
});

registerApplication({
  name: "@Barmenia/oa-tier",
  app: () => System.import("@Barmenia/oa-tier"),
  activeWhen: ["/barmenia-oa-tier"],
  customProps: { domElement: document.getElementById("main-container") },
});

registerApplication({
  name: "@Barmenia/oa-rs",
  app: () => System.import("@Barmenia/oa-rs"),
  activeWhen: ["/barmenia-oa-rs"],
  customProps: { domElement: document.getElementById("main-container") },
});

start({
  urlRerouteOnly: true,
});
