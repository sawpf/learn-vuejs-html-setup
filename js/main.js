const app = Vue.createApp({
  data: () => ({
    newItem: '',
    todos: [{
      "item": "test",
      "isDone": false
    }]
  }),
  methods: {
    addItem: function (e) {
      // console.log('addItem')
      if (this.newItem === '') return
      let todo = {
        item: this.newItem,
        isDone: false
      }
      this.todos.push(todo)
      this.newItem = ''
    },
    deleteItem: function (index) {
      // console.log('Delete', index)
      this.todos.splice(index, 1)
    }
  }
})
app.mount('#app')