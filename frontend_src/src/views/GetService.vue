<template>
    <h1>Услуга №1</h1>
    <p>Описание услуги</p>
    <h2>Необходимые документы</h2>
    <ul>
        <li>1. Согласие о персональных данных.</li>
        <li>2. Договор на предоставление услуги.</li>
    </ul>
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
        <button type="button" class="btn btn-secondary btn-lg btn-block">Заполнить документы</button>
    </form>
    <h2>Ознакомтесь с документами</h2>
    <div>Документы</div>
    <h2>Подпишите все документы</h2>
    <div class="signature_wrapper">
        <VueSignaturePad width="300px" height="100px" ref="signaturePad" />
    </div>
    <div>
  <button id="save">Save</button>
  <button id="clear">Clear</button>
</div>
    <button>Отправить</button>
  <div class="get-service">
  </div>
</template>

<script>
// import Vue from 'vue';
// import VueSignaturePad from 'vue-signature-pad';
// Vue.use(VueSignaturePad);

// var signaturePad;

// signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
//   penColor: 'rgb(0, 0, 0)'
// });
// signaturePad.toDataURL('image/png');
// // var saveButton = document.getElementById('save');
// var cancelButton = document.getElementById('clear');

// saveButton.addEventListener('click', function (event) {
//   var data = signaturePad.toDataURL('image/png');

// // Send data to server instead...
//   window.open(data);
// });

// cancelButton.addEventListener('click', function () {
// //   signaturePad.clear();
// 1+1;
// });

// import CustomerForm from '@/components/CustomerForm.vue'

export default {
  name: 'GetService',
  components: {
  }
}
</script>
<style>
.btn-block
{
    width:100% !important;
    margin: 40px 0;
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
    background-image: url(../assets/sign.png); 
    border: #CCC solid 1px;
    background-color: #ddd;

}
.signature-pad {
  position: absolute;
  left: 0;
  top: 0;
  width:300px;
  height:100px;
}
</style>