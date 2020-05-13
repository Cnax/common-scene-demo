import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import MessageTemplateCreator from "message-template-creator";
// import "message-template-creator/message-template-creator.css";
import "./styles.scss";

Vue.use(ElementUI);
Vue.use(MessageTemplateCreator);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
