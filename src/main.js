// // import { createApp } from "vue";
// import App from "./App.vue";
// import "./registerServiceWorker";
// import vuetify from "./plugins/vuetify";

// // createApp(App).mount("#app");
// new Vue({
//   vuetify,
//   render: (h) => h(App),
// }).$mount("#app");

// src/main.js

import Vue from "vue";

import vuetify from "./plugins/vuetify";

new Vue({
  vuetify,
}).$mount("#app");
