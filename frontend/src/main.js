// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'theme/index.css';
import '../node_modules/intro.js/introjs.css';
import App from './App';
import store from './store';

Vue.use(ElementUI);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  // router,
  // template: '<App/>',
  // components: {App},
  render: h => h(App),
});
