import './assets/css/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import vuetify from "@/plugins/vuetify.js";

import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';
import router from "@/routers/index.js";

import App from './App.vue'

const app = createApp(App);

app.use(createPinia());
app.use(vuetify);
app.use(router);
app.use(PerfectScrollbarPlugin);

app.mount('#app')
