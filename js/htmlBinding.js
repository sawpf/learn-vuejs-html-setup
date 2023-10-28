const app = Vue.createApp({
  data: () => ({
    isLarge: true,
    hasError: true,
    bgGrayClass: 'bg-gray',
    textBlueClass: 'text-blue',
    classObject: {
      large: true,
      'text-danger': true
    }
  }),
  methods: {
    toggleLarge: function() {
      this.isLarge = !this.isLarge
    },
    toggleError: function() {
      this.hasError = !this.hasError
    }
  }
})
app.mount('#app')