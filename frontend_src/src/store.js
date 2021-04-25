import Vue from "vue";

export default Vue.observable({
  isLogin: false,
  isProducer: false,
  login: localStorage.getItem('login') || '',
  producerName: localStorage.getItem('producerName') || '',
})