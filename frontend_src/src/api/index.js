const api = {
  personal() {
    return fetch('http://188.120.226.213:8000/user_part/personal/', {
      method: "POST",
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          access_token: localStorage.getItem('access_token'),
          refresh_token: localStorage.getItem('refresh_token'),
      })
    })
  },

  setFile(formData) {
    return fetch('http://188.120.226.213:8000/user_part/set_file/', {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
  },

  signIn(formData) {
    return fetch('http://188.120.226.213:8000/users/sign_in/', {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
  },

  addDocs(formData) {
    return fetch('http://188.120.226.213:8000/documents/add_docs/', {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
  }
}

export default api