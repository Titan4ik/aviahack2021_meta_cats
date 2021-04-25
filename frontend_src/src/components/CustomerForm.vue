<template>
  <div>
    <h1 class="text-center mb-5">Создать услугу</h1>
    <form v-on:submit="submit">
      <input type="hidden" name="access_token" :value="access_token">
      <input type="hidden" name="refresh_token" :value="refresh_token">
      <div class="mb-3">
        <label class="from-label w-100">
          Название услуги
          <input type="test" class="form-control" name="name">
        </label>
      </div>
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
      <button v-if="isSending" class="btn btn-primary btn-block" disabled>Создаем услугу...</button>
      <button v-else type="submit" class="btn btn-primary">Отправить</button>
      <p v-if="error">{{ error }}</p>
      <div v-if="qrCode" class="answer">
        <p>Ваш QR код:</p>
        <img class="mt-3 mw-100" :src="qrCode" alt="">
      </div>
    </form>
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
      qrCode: false,
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
      .then(async response => {
        if (response.ok) {
          this.qrCode = await response.text()
        } else {
          this.error = 'response error: ' + response.status
        }
        this.isSending = false
      })
      .catch(error => {
        this.error = 'response error: ' + error
        this.isSending = false
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
.answer {
  margin-top: 30px;
}

.answer p {
  margin-top: 20px;
  margin-bottom: 10px;
}

</style>
