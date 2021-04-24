<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
      <h1 class="text-center mb-5">Подписать документы</h1>
      <p class="mb-3">{{ json }}</p>
      <form enctype="multipart/form-data" action="http://188.120.226.213:8000/user_part/set_file/" method="post" v-on:submit="submit">
        <div class="mb-3">
          <label class="from-label">
            Какое-то поле
            <input class="form-control" type="text" name="name">
          </label>
        </div>
        <div class="mb-3">
          <label class="from-label">
            Поле с картинкой
            <input type="file" name="input_file" accept="image/*">
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Отправить</button>
      </form>
      <img class="mt-3" v-if="img" src="http://188.120.226.213:8000/user_part/get_file/" alt="">
      <p v-else>sending img...</p>
    </div>
    <div class="col-3"></div>
  </div>
</template>

<script>
import api from '@/api/'

export default {
  name: 'Form',
  props: {
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
      api.personal()
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

      api.setFile(formData)
      .then(response => {
        if (response.ok) {
          this.img = true
        }
      })
      .catch(error => {
        this.json = 'response error: ' + error
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
