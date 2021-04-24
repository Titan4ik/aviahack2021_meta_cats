<template>
  <div class="container">
    <div class="row">
      <div id="nav">
        <router-link to="/get-services">Список услуг</router-link> |
        <router-link to="/create-service">Создать услугу</router-link> |
        <router-link v-if="!isLogin" to="/login">Войти</router-link>
        <a v-else @click="exit">Выйти</a>
      </div>
      <div class="col-md-3"></div>
      <div class="col-md-6 col 12">
        <router-view/>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import api from '@/api/'
import store from '@/store/'

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
    }
  },

  mounted() {
    this.checkLogin()
  },

  computed: {
    isLogin() {
      return store.isLogin
    }
  },

  methods: {
    checkLogin() {
      api.isLogin()
      .then((result) => {
        store.isLogin = result
      })
    },
    exit() {
      api.logout()
      store.isLogin = false
    }
  }
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
  text-decoration: underline;
  cursor: pointer;
}

#nav a.router-link-active {
  color: #42b983;
}
</style>
