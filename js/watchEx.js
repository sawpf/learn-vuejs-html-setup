const app = Vue.createApp({
  data: () => ({
    firstName: '',
    lastName: '',
    colors: [
      { name: 'Red' },
      { name: 'Green' },
      { name: 'Blue' },
    ]
  }),
  computed: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName
    }
  },
  // watch: {
  //   firstName: function(value) {
  //     this.fullName = value + ' ' + this.lastName
  //   },
  //   lastName: function(value) {
  //     this.fullName = this.firstName + ' ' + value
  //   }
  // }
  watch: {
    colors: {
      handler: function(newValue, oldValue) {
        console.log('Update!')
      },
      deep: true
    }
  },
  methods: {
    onClick: function() {
      this.colors[1].name = 'White'
    }
  }
})
app.mount('#app')