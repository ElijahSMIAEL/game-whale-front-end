import styles from './GameDetails.module.css'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import AllPosts from '../AllPosts/AllPosts'
import { useEffect, useState } from 'react'
import { getGameDetails } from '../../services/gameService'
import { useParams } from 'react-router-dom'

const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState({})
  const { gameName } = useParams()

  useEffect(() => {
    const fetchGameDetails = async () => {
      const gameData = await getGameDetails(gameName)
      setGameDetails(gameData)
    }
    fetchGameDetails()

  },[gameName])
  
  return (
    <>
    <h3>Game Details</h3>
    <p>{gameDetails.name}</p>
    <ProfileDetails />
    <AllPosts />
    </>
  )
}

export default GameDetails