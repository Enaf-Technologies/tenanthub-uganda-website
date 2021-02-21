import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import LoadScript from "vue-plugin-load-script";

const app = createApp(App).use(router).use(LoadScript);

app.mount('#app')