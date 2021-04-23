<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ json }}</p>
    <form enctype="multipart/form-data" action="http://188.120.226.213:8000/user_part/set_file/" method="post" v-on:submit="submit">
      <input type="file" name="input_file" accept="image/*">
      <input type="submit" value="Отправить">
    </form>
    <img v-if="img" src="http://188.120.226.213:8000/user_part/get_file/" alt="">
    <p v-else>sending img...</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data() {
    return {
      json: 'loading',
      img: true
    }
  },

  mounted() {
    this.getJson()
  },

  methods: {
    getJson() {
      fetch('http://188.120.226.213:8000/user_part/personal/')
      .then(async response => {
        if (response.ok) {
          this.json = await response.text()
        } else {
          this.json = 'response error ' + response.status
        }
      })
      .catch(error => {
        this.json = 'response error: ' + error
      })
    },

    submit(event) {
      event.preventDefault()

      const formData = new FormData(event.target)

      this.img = false

      fetch('http://188.120.226.213:8000/user_part/set_file/', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      })
      .then(response => {
        if (response.ok) {
          this.img = true
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
