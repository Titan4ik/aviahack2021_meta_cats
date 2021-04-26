const api = {
  url: 'http://188.120.226.213:8000/',

  personal() {
    return fetch(this.url + 'user_part/personal/', {
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
    return fetch(this.url + 'user_part/set_file/', {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
  },

  signIn(formData) {
    return fetch(this.url + 'users/sign_in/', {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
  },

  addDocs(formData) {
    return fetch(this.url + 'documents/add_docs/', {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
  },

  createQrCode(docSetId, formData) {
    return fetch(this.url + 'documents/create_qr_code/?doc_set_id=' + docSetId, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
  },

  getTags(docSetId) {
    return fetch(this.url + 'documents/get_tags/?doc_set_id=' + docSetId, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          access_token: localStorage.getItem('access_token'),
          refresh_token: localStorage.getItem('refresh_token'),
      })
    })
  },

  getDocs(docSetId) {
    return fetch(this.url + 'documents/get_docs/?doc_set_id=' + docSetId, {
      method: 'GET',
      credentials: 'include'
    })
  },

  getDoc(docSetId, docId) {
    return fetch(`${this.url}documents/get_doc/?doc_set_id=${docSetId}&doc_id=${docId}`, {
      method: 'GET',
      credentials: 'include'
    })
  },

  getDocSetInfo(docSetId) {
    return fetch(`${this.url}documents/get_doc_set_info/?doc_set_id=${docSetId}`, {
      method: 'GET',
      credentials: 'include'
    })
  },

  fillDocs(docSetId, formData) {
    formData.set('access_token', localStorage.getItem('access_token'))
    formData.set('refresh_token', localStorage.getItem('refresh_token'))
    return fetch(`${this.url}documents/fill_docs/?doc_set_id=${docSetId}`, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
  },

  sendSign(docSetId, formData) {
    return fetch(`${this.url}electronic_app/create/?doc_set_id=${docSetId}`, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
  },

  getDocSets() {
    return fetch(this.url + 'documents/get_doc_sets/', {
      method: 'GET',
      credentials: 'include'
    })
  },

  async isLogin() {
    return (await fetch(this.url + 'users/test_sign_user/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_token: localStorage.getItem('access_token'),
        refresh_token: localStorage.getItem('refresh_token'),
      })
    })).ok
  },

  testProducer() {
    return fetch(this.url + 'users/test_sign_producer/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_token: localStorage.getItem('access_token'),
        refresh_token: localStorage.getItem('refresh_token'),
      })
    })
  },

  getProducerOffers() {
    return fetch(this.url + 'users/get_producer_offers/', {
      method: 'POST',
      body: JSON.stringify({
        access_token: localStorage.getItem('access_token'),
        refresh_token: localStorage.getItem('refresh_token'),
      })
    })
  },

  logout() {
    fetch(this.url + 'users/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_token: localStorage.getItem('access_token'),
        refresh_token: localStorage.getItem('refresh_token'),
      })
    })
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
  }
}

export default api