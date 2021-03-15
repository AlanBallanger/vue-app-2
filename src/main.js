import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import AudioRecorder from 'vue-audio-recorder'
import AudioVisual from 'vue-audio-visual'


Vue.config.productionTip = false
Vue.use(AudioRecorder)
Vue.use(AudioVisual)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
