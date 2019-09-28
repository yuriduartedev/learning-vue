import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import './plugins/vuetify'
import axios from './plugins/axios'

Vue.config.productionTip = false

Vue.filter('currency', value => {
	return 'R$ ' + value.toLocaleString()
}) 

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
