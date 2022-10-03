import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/posts`

async function create(postData) {
  const res = await fetch(BASE_URL, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  return await res.json()
}

async function getAll() {
  const res = await fetch(BASE_URL)
  return await res.json()
}

async function deletePost(postId) {
  const res = await fetch(`${BASE_URL}/${postId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    }
  })
  return await res.json()
}

export {
  create,
  getAll,
  deletePost,
}