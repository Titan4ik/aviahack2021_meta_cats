<template>
<div id="get-service">
  <div v-if="docSetInfo">
    <h1>{{ docSetInfo.name }}</h1>
    <p>{{ docSetInfo.description }}</p>
    <div v-if="!isTagsSubmited">
      <div v-if="docs">
        <p>Ваши данные нужны для заполнения следующих документов:</p>
        <ul>
          <li v-for="doc in docs" :key="doc.doc_id">
            <a :href="apiUrl + 'static' + doc.path" data-bs-toggle="modal" :data-bs-target="`#empty${doc.doc_id}`">{{ doc.doc_name }}</a>
            <div class="modal fade" :id="`empty${doc.doc_id}`" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">{{ doc.doc_name }}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <object :data="apiUrl + 'static' + doc.path" type="application/pdf" title="SamplePdf" width="100%" height="720">
                    <a :href="apiUrl + 'static' + doc.path" target=_blank>{{ doc.doc_name }}</a>
                  </object>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <p v-else>Загрузка необходимых документов...</p>
      <div v-if="tags">
        <h2>Для предоставления услуги необходимы следующие данные</h2>
        <p v-if="error">{{ error }}</p>
        <form v-if="tags" @submit="submitTags">
          <div v-for="tag in tags" :key="tag" class="form-group">
            <label class="w-100">
              {{ tag }}
              <input :type="tag === 'email' ? 'email' : 'text'" class="form-control" :name="tag" :value="$route.query[tag] || filled[tag]"  required>
            </label>
          </div>
          <button v-if="isTagsSending" class="btn btn-primary btn-block" disabled>Данные отправляются...</button>
          <button v-else type="submit" class="btn btn-primary btn-block">Отправить</button>
        </form>
      </div>
      <p v-else>Загрузка необходимых полей...</p>
    </div>
    <div v-if="!isSignSubmited" :hidden="!isTagsSubmited">
      <h2>Предварительный вид документов</h2>
      <div v-if="filledDocs">
        <p>Вы можете проверить вид документов:</p>
        <ul>
          <li v-for="doc in filledDocs" :key="doc.doc_id">
            <a :href="apiUrl + 'static/' + doc.path" data-bs-toggle="modal" :data-bs-target="`#filled${doc.doc_id}`">{{ doc.doc_name }}</a>
            <div class="modal fade" :id="`filled${doc.doc_id}`" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">{{ doc.doc_name }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <object :data="apiUrl + 'static/' + doc.path" type="application/pdf" title="SamplePdf" width="100%" height="720">
                  <a :href="apiUrl + 'static/' + doc.path" target=_blank>{{ doc.doc_name }}</a>
                </object>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
              </div>
              </div>
            </div>
            </div>
          </li>
        </ul>
      </div>
      <h2>Подписать все необходимые документы</h2>
      <div class="signature_wrapper">
        <canvas ref="signaturePad" id="signature-pad" class="signature-pad" width=300 height=100></canvas>
      </div>
      <div><button type="button" id="clear" class="clear-button" @click="clearSign">Очистить</button></div>
      <button v-if="isSignSending" class="btn btn-primary btn-block" disabled>Подписываем документы...</button>
      <button v-else class="btn btn-primary btn-block" @click="sendSign">Подписать</button>
      <div v-if="noSignError" class="alert alert-danger">Сделайте подпись</div>
    </div>
    <div v-else>
      <p>Документы успешно подписаны!</p>
    </div>
  </div>
  <p v-else>Загружаем услугу...</p>
</div>
</template>

<script>
import api from '@/api/'
import * as SignaturePad from 'signature_pad'

export default {
  name: 'GetService',
  data() {
    return {
      canvas: {},
      signaturePad: {},
      tags: false,
      filled: {},
      docSetInfo: false,
      docs: false,
      filledDocs: false,
      isTagsSubmited: false,
      isTagsSending: false,
      isSignSubmited: false,
      noSignError: false,
      isSignSending: false,
      error: false,
      apiUrl: api.url,
      formData: {}
    }
  },
  props: {
    docSetId: String
  },
  components: { },
  mounted(){
    this.getDocSetInfo()
    this.getTags()
    this.getDocs()
  },
  updated() {
    this.$nextTick()
    .then(() => {
      if ((Object.keys(this.signaturePad).length == 0) && this.isTagsSubmited) {
        this.canvas = this.$refs.signaturePad
        this.signaturePad = new SignaturePad.default(this.canvas, {
          penColor: 'rgb(0, 0, 0)'
        })
      }
    })
  },
  methods:
  {
    getDocSetInfo() {
      api.getDocSetInfo(this.docSetId)
      .then(async response => {
        if (response.ok) {
          this.docSetInfo = await response.json()
        }
      })
      .catch(() => this.docSetInfo = false)
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

    getDocs() {
      api.getDocs(this.docSetId)
      .then(async response => {
        if (response.ok) {
          this.docs = await response.json()
        } else {
          this.docs = false
        }
      })
    },

    submitTags(event) {
      event.preventDefault()
      const formData = new FormData(event.target)
      this.formData = new FormData(event.target)

      this.isTagsSubmited = false
      this.isTagsSending = true
      api.fillDocs(this.docSetId, formData)
      .then(async response => {
        if (response.ok) {
          this.filledDocs = await response.json()
          this.isTagsSubmited = true
          this.error = false
        } else {
          this.error = 'Ошибка, статус: ' + response.status
        }
      })
      .finally(() => {
        this.isTagsSending = false
      })
    },

    clearSign() {
      this.signaturePad.clear()
    },
    
    sendSign() {
      if (this.signaturePad.isEmpty()) {
        this.noSignError = true
        return
      }
      this.noSignError = false
      this.isSignSubmited = false
      this.isSignSending = true

      const formData = this.formData
      formData.set('el_sign', this.signaturePad.toDataURL())

      api.sendSign(this.docSetId, formData)
      .then(async response => {
        if (response.ok) {
          this.isSignSubmited = true
          this.error = false
        } else {
          this.isTagsSubmited = false
          this.error = 'Ошибка, статус: ' + response.status
        }
      })
      .finally(() => {
        this.isSignSending = false
      })
    }
  }
}
</script>
<style>
* {
  word-wrap: break-word!important;
  word-break: break-word!important;
}
.btn-block
{
  margin: 20px 0;
}
.form-group label
{
  margin: 15px 0 5px;
}
.signature_wrapper
{
  position: relative;
  width: 300px;
  height: 100px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: #CCC solid 1px;
  background-image: url(../assets/sign.png); 
  background-color: #fafafa;
  margin:20px 0 10px;
}
.signature-pad {
  position: absolute;
  left: 0;
  top: 0;
  width:300px;
  height:100px;
}
.clear-button
{
  color: #00F;
  background: none;
  border: none;
  border-bottom: 2px dashed;
  padding: 0px;
}
.clear-button:hover
{
  color: #F00;
}
#accordion
{
  margin:20px 0;
}
#get-service{
  padding-bottom:30px;
}
</style>