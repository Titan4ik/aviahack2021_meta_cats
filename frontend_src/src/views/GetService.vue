<template>
<div id="get-service">
    <h1>Некоторая услуга</h1>
    <p>Описание услуги</p>
    <div v-if="docs">
        <p>Эти данные нужны для заполнения следующих документов:</p>
        <ul>
            <li v-for="doc in docs" :key="doc.doc_id">
                <a :href="'http://188.120.226.213:8000/static' + doc.path" data-bs-toggle="modal" :data-bs-target="`#empty${doc.doc_id}`">{{ doc.doc_name }}</a>
                <div class="modal fade" :id="`empty${doc.doc_id}`" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{{ doc.doc_name }}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <object :data="'http://188.120.226.213:8000/static' + doc.path" type="application/pdf" title="SamplePdf" width="100%" height="720"></object>
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
    <h2>Для предоставления услуги необходимы следующие данные</h2>
    <form v-if="tags" @submit="submitTags">
        <div v-for="tag in tags" :key="tag" class="form-group">
            <label class="w-100">
                {{ tag }}
                <input type="text" class="form-control" :name="tag"  required>
            </label>
        </div>
        <button v-if="isTagsSending" class="btn btn-primary btn-block" disabled>Данные отправляются...</button>
        <button v-else type="submit" class="btn btn-primary btn-block">Отправить</button>
    </form>
    <div :hidden="!isTagsSubmited">
        <h2>Предварительный вид документов</h2>
        <div v-if="filledDocs">
        <p>Вы можете проверить вид документов:</p>
        <ul>
            <li v-for="doc in filledDocs" :key="doc.doc_id">
                <a :href="'http://188.120.226.213:8000/static' + doc.path" data-bs-toggle="modal" :data-bs-target="`#filled${doc.doc_id}`">{{ doc.doc_name }}</a>
                <div class="modal fade" :id="`filled${doc.doc_id}`" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ doc.doc_name }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <object :data="'http://188.120.226.213:8000/static/' + doc.path" type="application/pdf" title="SamplePdf" width="100%" height="720"></object>
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
            <canvas id="signature-pad" class="signature-pad" width=300 height=100></canvas>
        </div>
        <div><button type="button" id="clear" class="clear-button" @click="clearSign">Очистить</button></div>
        <button class="btn btn-primary btn-block" type="submit">Подписать</button>
    </div>
</div>
</template>

<script>
import api from '@/api/'
import * as SignaturePad from 'signature_pad';

export default {
  data() {
    return {
      canvas: {},
      signaturePad: {},
      tags: false,
      docs: false,
      filledDocs: false,
      isTagsSubmited: false,
      isTagsSending: false
    }
  },
  name: 'GetService',
  components: { },
    mounted(){
        this.canvas = document.querySelector("#signature-pad")
        this.signaturePad = new SignaturePad.default(this.canvas, {
            penColor: 'rgb(0, 0, 0)'
        })
        
        this.getTags()
        this.getDocs()
    },
    methods:
    {
        getTags() {
            api.getTags(13)
            .then(async response => {
                if (response.ok) {
                    this.tags = await response.json()
                }
            })
        },
        getDocs() {
            api.getDocs(13)
            .then(async response => {
                if (response.ok) {
                    this.docs = await response.json()
                }
            })
        },
        submitTags(event) {
            event.preventDefault()
            const formData = new FormData(event.target)

            this.isTagsSubmited = false
            this.isTagsSending = true
            api.fillDocs(13, formData)
            .then(async response => {
                if (response.ok) {
                    this.filledDocs = await response.json()
                    this.isTagsSubmited = true
                }
            })
            .finally(() => {
                this.isTagsSending = false
            })
        },
        clearSign: function () {
            this.signaturePad.clear()
        }
    }
}
</script>
<style>
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