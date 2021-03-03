import keycloak from "../keycloak/keycloak";

window.appGlobalStore = {
  keycloakData: {},

  updateKeycloakData: (kc) => {
    window.appGlobalStore.keycloakData = kc;
    localStorage.setItem("kc-data", JSON.stringify(keycloak));
    window.dispatchEvent(new Event("onKeycloakDataUpdate"));
  },

  event_1: () => {
    alert("Event_1 is globally dispatched");
    window.dispatchEvent(new Event("onEvent1"));
  },

  event_2: () => {
    alert("Event_2 is globally dispatched");
    window.dispatchEvent(new Event("onEvent2"));
  },
};
