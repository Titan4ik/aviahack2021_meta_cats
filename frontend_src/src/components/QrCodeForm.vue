<template>
  <div>
    <h1 class="text-center mb-5">Получить QR код</h1>
    <div v-if="tags">
        <h2>Эти поля будут предзаполнены у клиента</h2>
        <form v-if="tags" @submit="submitTags">
          <div v-for="tag in tags" :key="tag" class="form-group">
            <label class="w-100">
              {{ tag }}
              <input :type="tag === 'email' ? 'email' : 'text'" class="form-control" :name="tag" >
            </label>
          </div>
          <button v-if="isTagsSending" class="btn btn-primary btn-block" disabled>Создаем QR код...</button>
          <button v-else type="submit" class="btn btn-primary btn-block">Создать QR код</button>
          <p v-if="error">{{ error }}</p>
          <div v-if="qrCode" class="answer">
            <p>Ваш QR код:</p>
            <img class="mt-3 mw-100" :src="qrCode" alt="">
          </div>
        </form>
      </div>
      <p v-else>Загрузка необходимых полей...</p>
  </div>
</template>

<script>
import api from '@/api/'

export default {
  name: 'QrCodeForm',
  props: {
    docSetId: String
  },

  data() {
    return {
      isSending: false,
      error: false,
      qrCode: false,
      tags: false,
      filled: false,
      isTagsSubmited: false,
      isTagsSending: false,
      access_token: localStorage.getItem('access_token'),
      refresh_token: localStorage.getItem('refresh_token')
    }
  },

  mounted() {
    this.getTags()
  },

  methods: {
    submitTags(event) {
      event.preventDefault()
      const formData = new FormData(event.target)
      this.formData = new FormData(event.target)

      this.isTagsSubmited = false
      this.isTagsSending = true
      api.createQrCode(this.docSetId, formData)
      .then(async response => {
        if (response.ok) {
          this.qrCode = await response.text()
          this.isTagsSubmited = true
        } else {
          this.error = 'response error: ' + response.status
        }
      })
      .finally(() => {
        this.isTagsSending = false
      })
    },

    getTags() {
      api.getTags(this.docSetId)
      .then(async response => {
        if (response.ok) {
          const data = await response.json()
          this.tags = data.tags
          this.filled = data.filled
        }
      })
      .catch(() => this.getTags = false)
    },
  }
}
</script>

<style scoped>

.answer {
  margin-top: 30px;
}

.btn-block
{
  margin: 20px 0;
}
.form-group label
{
  margin: 15px 0 5px;
}

.answer p {
  margin-top: 20px;
  margin-bottom: 10px;
}

</style>
