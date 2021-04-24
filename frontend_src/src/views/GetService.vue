<template>
<div id="get-service">
    <h1>Некоторая услуга</h1>
    <p>Описание услуги</p>
    <div v-if="docs">
        <p>Эти данные нужны для заполнения следующих документов:</p>
        <ul>
            <li v-for="doc in docs" :key="doc.doc_id">
                {{ doc.doc_name }}
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
        <button type="submit" class="btn btn-primary btn-block">Отправить</button>
        
    </form>
    <div :hidden="!isTagsSubmited">
        <h2>Предварительный вид документов</h2>
        <div id="accordion" role="tablist" aria-multiselectable="true">
            <div class="card">
                <div class="card-header" role="tab" id="headingOne">
                <h5 class="mb-0">
                    <a data-toggle="collapse" data-parent="#accordion"  href="#" aria-expanded="true" aria-controls="collapseOne">
                    Документ #1
                    </a>
                </h5>
                </div>
                <div id="collapseOne" class="collapse " role="tabpanel" aria-labelledby="headingOne">
                    <div class="card-block">
                        Содержимое документа 1
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" role="tab" id="headingOne">
                <h5 class="mb-0">
                    <a data-toggle="collapse" data-parent="#accordion"  href="#" aria-expanded="true" aria-controls="collapseOne">
                    Документ #1
                    </a>
                </h5>
                </div>
                <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                    <div class="card-block">
                        Содержимое документа 1
                    </div>
                </div>
            </div>
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
      isTagsSubmited: false
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
            api.getTags(11)
            .then(async response => {
                if (response.ok) {
                    this.tags = await response.json()
                }
            })
        },
        getDocs() {
            api.getDocs(11)
            .then(async response => {
                if (response.ok) {
                    this.docs = await response.json()
                }
            })
        },
        submitTags(event) {
            event.preventDefault()
            this.isTagsSubmited = true
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