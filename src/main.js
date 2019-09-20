import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import router from './router/index.js';
import animate from 'animate.css';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;


new Vue({
  render: h => h(App),
  router,
}).$mount('#app');



