<template>
    <div class="">
      <h1 class="text-center mb-5">Войти</h1>
      <p v-if="isLogin">Вы авторизованы</p>
      <form v-else v-on:submit="submit">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Логин</label>
          <input type="text" name="username" class="form-control" id="exampleInputEmail1" v-model="login">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Пароль</label>
          <input type="password" name="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button v-if="isLoginSending" class="btn btn-primary" disabled>Производим авторизацию...</button>
        <button v-else type="submit" class="btn btn-primary">Войти</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>
import api from '@/api/'
import store from '@/store/'

export default {
  name: 'LoginForm',
  props: {
  },

  data() {
    return {
      error: false,
      isLoginSending: false
    }
  },

  computed: {
    isLogin() {
      return store.isLogin
    },
    login: {
      get() {
        return store.login
      },
      set(value) {
        localStorage.setItem('login', value)
        store.login = value
      }
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

  mounted() {
  },

  methods: {
    submit(event) {
      event.preventDefault()

      const formData = new FormData(event.target)

      this.isLoginSending = true
      api.signIn(formData)
      .then(async response => {
        if (response.ok) {
          store.isLogin = true
          this.error = false
          const tokens = await response.json()
          localStorage.setItem('access_token', tokens.access_token)
          localStorage.setItem('refresh_token', tokens.refresh_token)
          this.checkProducer()
          this.$router.push('get-services')
        } else {
          this.error = 'Не удалось авторизоваться: ' + response.status
        }
      })
      .catch(error => {
        this.error = 'Не удалось авторизоваться: ' + error
      })
      .finally(() => {
        this.isLoginSending = false
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
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
