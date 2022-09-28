import styles from './GameDetails.module.css'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import AllPosts from '../AllPosts/AllPosts'
import { useEffect, useState } from 'react'
import { getGameDetails } from '../../services/gameService'
import { useLocation } from 'react-router-dom'
import parse from 'html-react-parser'
import Platforms from '../../components/Platforms/Platforms'


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
    <div className={styles.container}>
      <img src={game.background_image} alt="Game" className={styles.backgroundImage}/>
      <h1 className={styles.game}>{game.name}</h1>
      <div className={styles.description}>{parse(game.description)}</div>
      <h3>Rating</h3>
        {game.rating}
      <h3>Release Date</h3>
        {game.released}
      <h3>Platforms</h3>
        {game.platforms?.map(platform =>
          <Platforms 
            key={platform.platform.id}
            platform={platform}
          />
        )}
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