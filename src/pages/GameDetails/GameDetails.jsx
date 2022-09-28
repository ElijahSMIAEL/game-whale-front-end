import styles from './GameDetails.module.css'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import AllPosts from '../AllPosts/AllPosts'
import { useEffect, useState } from 'react'
import { getGameDetails } from '../../services/gameService'
import { useLocation } from 'react-router-dom'

const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState({})
  const gameName = useLocation()
  const game = gameDetails.game


  useEffect(() => {
    const fetchGameDetails = async () => {
      const gameData = await getGameDetails(gameName.pathname)
      setGameDetails(gameData)
    }
    fetchGameDetails()

  },[gameName])
  
  return (
    <>
    <h3>Game Details</h3>
    <p>{game.name}</p>
    <ProfileDetails />
    <AllPosts />
    </>
  )
}

export default GameDetails