const app = Vue.createApp({
  data: () => ({
    toggle: true,
    color: ['red', 'yellow', 'blue'],
    i: 0,
  }),
  methods: {
    toggleAction: function() {
      this.toggle = !this.toggle
    },
  }
})
app.mount('#app')