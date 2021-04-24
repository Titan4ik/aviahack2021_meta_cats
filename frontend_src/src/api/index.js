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
      method: 'GET',
      credentials: 'include'
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
  }
}

export default api