import { createSSRApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { requestInterceptor } from "./interceptors";
import "uno.css";

export function createApp() {
  const app = createSSRApp(App);
  app.use(store);
  app.use(requestInterceptor);
  return {
    app,
  };
}
