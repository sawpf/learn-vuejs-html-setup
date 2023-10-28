const app = Vue.createApp({
  data: () => ({
    message: 'Hello Vue.js!',
    message2: 'Hello <span style="color:red;">Vue.js!</span>',
    str: 'Hello Vue.js! str',
    num: 61,
    boo: true,
  }),
  methods: {
    clickHandler: function(e) {
      this.message = this.message.split('').reverse().join('')
      console.log('clickHandler')
    }
  }
})
app.mount('#app')