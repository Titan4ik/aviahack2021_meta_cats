<template>
<div id="get-services">
    <h1>Список услуг</h1>
    <h2>Поставщик 1</h2>
    <div class="list-group">
  <a href="get-service?id=11" class="list-group-item list-group-item-action">Услуга №1.1</a>
  <a href="get-service?id=12" class="list-group-item list-group-item-action">Услуга №1.2</a>
</div>
    <h2>Поставщик 2</h2>
    <div class="list-group">
  <a href="get-service?id=21" class="list-group-item list-group-item-action">Услуга №2.1</a>
  <a href="get-service?id=22" class="list-group-item list-group-item-action">Услуга №2.2</a>
</div>
    <h2>Поставщик 3</h2>
    <div class="list-group">
  <a href="get-service?id=31" class="list-group-item list-group-item-action">Услуга №3.1</a>
  <a href="get-service?id=32" class="list-group-item list-group-item-action">Услуга №3.2</a>
</div>
</div>
</template>

<script>

export default {
    name: 'GetServices'
}
</script>

<style >
h2 {
    margin-top:15px;
}
</style>