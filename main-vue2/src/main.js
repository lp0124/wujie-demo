import Vue from 'vue'
import App from './App.vue'
import WujieVue from "wujie-vue2"

Vue.config.productionTip = false

Vue.use(WujieVue)

const { setupApp } = WujieVue

function credentialsFetch(url, options) {
  return window.fetch(url, { ...options, credentials: "omit" });
}

setupApp({
  name: "vue2",
  url: "//localhost:7777/",
  exec: true,
  fetch: credentialsFetch,
});

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
