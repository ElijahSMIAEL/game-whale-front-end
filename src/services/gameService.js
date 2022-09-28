import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}`

async function searchGame(formData) {
  const res = await fetch(`${BASE_URL}/api/games/search/${formData.query}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}
async function getGameDetails(gameData) {
  const res = await fetch(`${BASE_URL}/api/games/search/${gameData}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}
export {
  searchGame,
  getGameDetails
}