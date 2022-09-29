import styles from './GameDetails.module.css'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import AllPosts from '../AllPosts/AllPosts'
import { useEffect, useState } from 'react'
import { getGameDetails } from '../../services/gameService'
import { useLocation } from 'react-router-dom'
import parse, { attributesToProps } from 'html-react-parser'
import Platforms from '../../components/Platforms/Platforms'
import Games from '../Games/Games'
import * as profileService from '../../services/profileService'



const GameDetails = (props) => {
  const [game, setGame] = useState({})
  const gameName = useLocation()
  const profile = props.user.profile

  useEffect(() => {
    const fetchGameDetails = async () => {
      const gameData = await getGameDetails(gameName.pathname)
      setGame(gameData.game)
    }
    fetchGameDetails()
  
  },[gameName])
  
  const handleAddGame = async () => {
  const newGame = await profileService.handleAddGame(game, profile)
  }
  
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
      <button className="btn btn-secondary"
        onClick={()=> handleAddGame()}
      >
        Add to Collection
      </button>
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