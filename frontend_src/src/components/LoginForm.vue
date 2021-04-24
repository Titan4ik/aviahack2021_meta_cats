<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
      <h1 class="text-center mb-5">Войти</h1>
      <p v-if="isLogin">Вы авторизованы</p>
      <form v-else v-on:submit="submit">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Логин</label>
          <input type="text" name="login" class="form-control" id="exampleInputEmail1">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Пароль</label>
          <input type="password" name="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Войти</button>
      </form> 
    </div>
    <div class="col-3"></div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
  },

  data() {
    return {
      isLogin: false,
      error: false
    }
  },

  mounted() {
  },

  methods: {
    submit(event) {
      event.preventDefault()

      const formData = new FormData(event.target)

      fetch('http://188.120.226.213:8000/users/sign_in/', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      })
      .then(response => {
        if (response.ok) {
          this.isLogin = true
          const tokens = response.json();
          if (tokens) {
            this.$cookies.set('access_token', 'access_token');
            this.$cookies.set('refresh_token', 'access_token');
          }
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
