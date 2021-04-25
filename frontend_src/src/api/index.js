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
  },

  getTags(docSetId) {
    return fetch('http://188.120.226.213:8000/documents/get_tags/?doc_set_id=' + docSetId, {
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
    return fetch('http://188.120.226.213:8000/documents/get_docs/?doc_set_id=' + docSetId, {
      method: 'GET',
      credentials: 'include'
    })
  },

  getDoc(docSetId, docId) {
    return fetch(`http://188.120.226.213:8000/documents/get_doc/?doc_set_id=${docSetId}&doc_id=${docId}`, {
      method: 'GET',
      credentials: 'include'
    })
  },

  getDocSetInfo(docSetId) {
    return fetch(`http://188.120.226.213:8000/documents/get_doc_set_info/?doc_set_id=${docSetId}`, {
      method: 'GET',
      credentials: 'include'
    })
  },

  fillDocs(docSetId, formData) {
    formData.set('access_token', localStorage.getItem('access_token'))
    formData.set('refresh_token', localStorage.getItem('refresh_token'))
    return fetch(`http://188.120.226.213:8000/documents/fill_docs/?doc_set_id=${docSetId}`, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
  },

  sendSign(docSetId, formData) {
    return fetch(`http://188.120.226.213:8000/electronic_app/create/?doc_set_id=${docSetId}`, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
  },

  getDocSets() {
    return fetch('http://188.120.226.213:8000/documents/get_doc_sets/', {
      method: 'GET',
      credentials: 'include'
    })
  },

  async isLogin() {
    return (await fetch('http://188.120.226.213:8000/users/test_sign_user/', {
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

  async isProducer() {
    return (await fetch('http://188.120.226.213:8000/users/test_sign_producer/', {
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

  getProducerOffers() {
    return fetch('http://188.120.226.213:8000/users/get_producer_offers/', {
      method: 'POST',
      body: JSON.stringify({
        access_token: localStorage.getItem('access_token'),
        refresh_token: localStorage.getItem('refresh_token'),
      })
    })
  },

  logout() {
    fetch('http://188.120.226.213:8000/users/logout/', {
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