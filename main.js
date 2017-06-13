Vue.use(httpVueLoader);

new Vue({
  router,
  template: '<app></app>',
  components: {
    app: 'url:App.vue'
  }
}).$mount('#root');
