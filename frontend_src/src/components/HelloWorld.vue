<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ json }}</p>
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
      json: 'loading'
    }
  },
  mounted() {
    fetch('http://188.120.226.213:8000/user_part/personal/')
    .then(async response => {
      if (response.ok) {
        this.json = await response.text()
      } else {
        this.json = 'response error ' + response.status
      }
    })
    
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
