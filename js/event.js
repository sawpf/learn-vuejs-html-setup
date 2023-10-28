const app = Vue.createApp({
  data: () => ({
    counter: 0,
  }),
  methods: {
    clickHandler: function($event, message) {
      this.counter++
      console.log($event, message)
    }
  }
})
app.mount('#app')