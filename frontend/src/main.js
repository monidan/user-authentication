import { createApp } from 'vue';

import App from './App.vue';

import router from './shared/plugins/router';

const VUE_PLUGINS = [
    router,
];

const app = createApp(App);

VUE_PLUGINS.forEach(plugin => app.use(plugin));

app.mount('#app');