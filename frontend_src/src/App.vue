<template>
  <div class="container">
    <div class="row">
      <div v-if="isLogin" class="hello-user"><span>Добро пожаловать, <span v-if="isProducer">поставщик {{ producerName }}</span><span v-else>пользователь {{ login }}</span>! <a @click="exit">Выйти</a></span></div>
      <div id="nav">
        <router-link to="/get-services">Список услуг</router-link>
        <span v-if="isLogin && isProducer"> | <router-link to="/create-service">Создать услугу</router-link></span>
        <span v-if="!isLogin"> | <router-link v-if="!isLogin" to="/login">Войти</router-link></span>
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
    this.checkProducer()
  },

  computed: {
    isLogin() {
      return store.isLogin
    },

    isProducer() {
      return store.isProducer
    },

    login() {
      return store.login
    },

    producerName: {
      get() {
        return store.producerName
      },
      set(value) {
        localStorage.setItem('producerName', value)
        store.producerName = value
      }
    }
  },

  methods: {
    checkLogin() {
      api.isLogin()
      .then((result) => {
        store.isLogin = result
      })
    },

    checkProducer() {
      api.testProducer()
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json()
          store.isProducer = true
          this.producerName = data.name
        } else {
          store.isProducer = false
        }
      })
    },

    exit() {
      api.logout()
      store.isLogin = false
      store.isProducer = false
      this.producerName = ''
      localStorage.removeItem('login')
      localStorage.removeItem('producerName')
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
  margin: 30px;
  padding: 0;
  flex-shrink: unset;
  text-align: center;
}

#nav a, .hello-user a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: underline;
  cursor: pointer;
}

.hello-user {
  margin-top: 30px;
  margin-bottom: -20px;
  text-align: center;
}

.hello-user a {
  text-decoration: underline !important;
  cursor: pointer !important;
}

#nav a.router-link-active {
  color: #42b983;
}
</style>
