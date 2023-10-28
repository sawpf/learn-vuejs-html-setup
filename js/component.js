const helloComponent = {
  template: '<p>Hello! Local!</p>'
}
const buttonCounter = {
  template: '<div><span>count: </span><button @click="countUp">{{ count }}</button></div>',
  data: () => ({
    count: 0
  }),
  methods: {
    countUp: function(event) {
      this.count++
    }
  }
}

const app = Vue.createApp({
  data: () => ({
    show: true
  }),
  components: {
    'hello-component-local': helloComponent,
    'button-counter': buttonCounter
  }
})

app.component('hello-component', { // グローバル登録
  template: '<p>Hello!</p>'
})

app.mount('#app')