const app = Vue.createApp({
  data: () => ({
    message: 'Hello Vue.js!',
    checked: false,
    colors: [],
    color: '',
    selected: '',
    selectedArray: [],
    lazy: '',
    trim: '',
    number: 0
  }),
})
app.mount('#app')