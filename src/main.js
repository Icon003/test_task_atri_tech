import Vue from "vue";
import App from "./App.vue";

import filters from './filters'

import fonts from '@/assets/styles/fonts.css'
import variables from '@/assets/styles/variables.css'

Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount("#app");
