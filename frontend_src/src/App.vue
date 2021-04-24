<template>
  <div class="container">
    <div id="nav">
      <router-link to="/">Подписать документы</router-link> |
      <router-link to="/create-service">Создать услугу</router-link> |
      <router-link to="/get-service">Получить услугу</router-link> |
      <router-link to="/login">Войти</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
