import { createApp } from 'vue';

import App from './App.vue';

import router from '/shared/plugins/router';
import store from '/shared/plugins/store';

const VUE_PLUGINS = [
    router,
    store,
];

const app = createApp(App);

VUE_PLUGINS.forEach(plugin => app.use(plugin));

app.mount('#app');