<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
      <h1 class="text-center mb-5">Создать услугу</h1>
      <form v-on:submit="submit">
        <input type="hidden" name="access_token" :value="access_token">
        <input type="hidden" name="refresh_token" :value="refresh_token">
        <div class="mb-3">
          <label class="from-label w-100">
            Описание услуги
            <textarea class="form-control" rows="3" name="description"> </textarea>
          </label>
        </div>
        <div class="mb-3">
          <label class="from-label">
            Документы
            <input class="form-control" type="file" name="files" multiple accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
          </label>
        </div>
        <p v-if="isSending">sending...</p>
        <button v-else type="submit" class="btn btn-primary">Отправить</button>
        <p v-if="error">{{ error }}</p>
      </form>
    </div>
    <div class="col-3"></div>
  </div>
</template>

<script>
import api from '@/api/'

export default {
  name: 'CustomerForm',
  props: {
  },

  data() {
    return {
      isSending: false,
      error: false,
      access_token: localStorage.getItem('access_token'),
      refresh_token: localStorage.getItem('refresh_token')
    }
  },

  mounted() {
  },

  methods: {
    submit(event) {
      event.preventDefault()

      const formData = new FormData(event.target)

      this.isSending = true

      api.addDocs(formData)
      .then(response => {
        if (response.ok) {
          this.error = 'Документы отправлены'
        } else {
          this.error = 'response error: ' + response.status
        }
        this.isSending = false;
      })
      .catch(error => {
        this.error = 'response error: ' + error
        this.isSending = false;
      })
    }
  }
}
</script>

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
