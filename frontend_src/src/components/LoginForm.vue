<template>
    <div class="">
      <h1 class="text-center mb-5">Войти</h1>
      <p v-if="isLogin">Вы авторизованы</p>
      <form v-else v-on:submit="submit">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Логин</label>
          <input type="text" name="username" class="form-control" id="exampleInputEmail1">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Пароль</label>
          <input type="password" name="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Войти</button>
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
      error: false
    }
  },

  computed: {
    isLogin() {
      return store.isLogin
    }
  },

  mounted() {
  },

  methods: {
    submit(event) {
      event.preventDefault()

      const formData = new FormData(event.target)

      api.signIn(formData)
      .then(async response => {
        if (response.ok) {
          store.isLogin = true
          this.error = false
          const tokens = await response.json()
          console.log(tokens)
          localStorage.setItem('access_token', tokens.access_token)
          localStorage.setItem('refresh_token', tokens.refresh_token)
        } else {
          this.error = 'Не удалось авторизоваться: ' + response.status
        }
      })
      .catch(error => {
        this.error = 'Не удалось авторизоваться: ' + error
      })
    }
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
