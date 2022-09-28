import styles from './GameDetails.module.css'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import AllPosts from '../AllPosts/AllPosts'
import { useEffect, useState } from 'react'
import { getGameDetails } from '../../services/gameService'
import { useLocation } from 'react-router-dom'
import parse from 'html-react-parser'


const GameDetails = () => {
  const [game, setGame] = useState({})
  const gameName = useLocation()

  useEffect(() => {
    const fetchGameDetails = async () => {
      const gameData = await getGameDetails(gameName.pathname)
      setGame(gameData.game)
    }
    fetchGameDetails()

  },[gameName])
  

  return (
    <>
    { game.description ? 
    <div>
      <h3>Game Details</h3>
      <p>{game.name}</p>
      <div className={styles.description}>{parse(game.description)}</div>
    </div>
    :
    <h1>LOADING...</h1>
    }
    <ProfileDetails />
    <AllPosts />
    </>
  )
}

export default GameDetails