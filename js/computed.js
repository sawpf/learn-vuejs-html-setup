const app = Vue.createApp({
  data: () => ({
    message: 'Hello Vue.js!',
    basePrice: 100,
    km: 0,
    m: 0,
  }),
  computed: { // キャッシュあり
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    },
    taxIncludedPrice: {
      get: function() {
        return this.basePrice * 1.1
      },
      set: function(value) {
        this.basePrice = value / 1.1
      }
    },
    computedNumber: function() {
      console.log('computed')
      return Math.random()
    }
  },
  methods: { // キャッシュなし
    reversedMessageMethod: function() {
      return this.message.split('').reverse().join('')
    },
    methodsNumber: function() {
      console.log('methods')
      return Math.random()
    }
  },
  watch: {
    message: function(newValue, oldValue) {
      console.log('new: %s, old: %s', newValue, oldValue)
    },
    km: function(value) {
      console.log('km:' + value)
      this.km = value
      this.m = value * 1000
    },
    m: function(value) {
      this.km = value / 1000
      this.m = value
    }
  }
})
app.mount('#app')