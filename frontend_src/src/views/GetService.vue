<template>
<div id="get-service">
    <h1>Услуга №1</h1>
    <p>Описание услуги</p>
    <h2>Необходимые документы</h2>
        <div class="list-group need_doc_wrapper">
            <a href="#" class="list-group-item list-group-item-action">Согласие о персональных данных.</a>
            <a href="#" class="list-group-item list-group-item-action">Договор на предоставление услуги.</a>
    </div>
    <h2>Для предоставления услуги необходимы следующие данные</h2>
    <form>
        <div class="form-group">
            <label for="exampleFormControlInput1">ФИО</label>
            <input type="text" class="form-control" readonly id="formName" placeholder="Иванов Иван Иванович" required value="Иванов Иван Иванович">
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput2">Серия и номер паспорта</label>
            <input type="text" class="form-control" id="formPasport" placeholder="1111 111111">
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput2">Кем и когда выдан</label>
            <input type="text" class="form-control" id="formPasportInfo" placeholder="Населенный пункт, орган, дата, код подразделения">
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput2">Адрес регистрации</label>
            <input type="text" class="form-control" id="formRegInfo" placeholder="Населенный пункт, орган, дата, код подразделения">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="formEmail1" aria-describedby="emailHelp" placeholder="ivanov@example.com">
        </div>
        <div class="signature_wrapper">
            <canvas id="signature-pad" class="signature-pad" width=300 height=100></canvas>
        </div>
        <div><button type="button" id="clear" class="clear-button" @click="clearSign">Очистить</button></div>
        <button type="button" class="btn btn-primary btn-lg btn-block">Заполнить и подписать все документы</button>
        
    </form>
    <h2>Заполненные документы</h2>
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
    <div>
</div>
    <button class="btn btn-primary btn-lg btn-block" type="submit">Отправить</button>
  </div>
</template>

<script>

import * as SignaturePad from 'signature_pad';

export default {
  data() {
    return {
      canvas: {},
      signaturePad: {}
    }
  },
  name: 'GetService',
  components: { },
    mounted(){
        console.log(213412);
        this.canvas = document.querySelector("#signature-pad");
        this.signaturePad = new SignaturePad.default(this.canvas, {
            penColor: 'rgb(0, 0, 0)'
        });
        
    },
    methods:
    {
        clearSign: function () {
            this.signaturePad.clear();
        }

    }
}
</script>
<style>
.btn-block
{
    width:100%;
    margin: 20px 0;
}
.form-group label
{
    font-size: 20px;
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
    background-color: #ffffee;
    margin:30px 0 10px;

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