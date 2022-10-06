import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootswatch/dist/cosmo/bootstrap.min.css'

createApp(App)
    .use(router)
    .mount('#app');
