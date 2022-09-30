import styles from './GameDetails.module.css'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import AllPosts from '../AllPosts/AllPosts'
import { useEffect, useState } from 'react'
import { getGameDetails } from '../../services/gameService'
import { useLocation } from 'react-router-dom'
import parse, { attributesToProps } from 'html-react-parser'
import Platforms from '../../components/Platforms/Platforms'
import Games from '../Games/Games'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import * as profileService from '../../services/profileService'
import * as gameService from '../../services/gameService'




const GameDetails = (props) => {
  const [game, setGame] = useState({})
  const [playedBy, setPlayedBy] = useState([])
  const gameName = useLocation()
  const profiles = props.profiles
  const profile = profiles.find(p =>  p._id === props.user.profile)

  // function check(player) {
  //   return player?.gameCollection.forEach((collected) => {
  //     if (parseInt(collected) === game.id & !playedBy.some(play => {
  //       return play === player
  //     })) {
  //       playedBy.push(player)
  //       console.log(playedBy)
  //     } else {
  //       return
  //     }
  // })
  // }

  // function loadPlayers() {
  //   profiles.forEach(player => check(player))
  // }

  useEffect(() => {
    function loadPlayers() {
      profiles.forEach(player => {
        player?.gameCollection.forEach((collected) => {
          if (parseInt(collected) === game.id & !playedBy.some(play => {
            return play === player
          })) {
            setPlayedBy([...playedBy, player])
          } else {
            return
          }
        })
      })
    }
    loadPlayers()
  }, [game.id, playedBy, profiles])

  useEffect(() => {
    const fetchGameDetails = async () => {
      const gameData = await getGameDetails(gameName.pathname)
      setGame(gameData.game)
    }
    fetchGameDetails()
  
  },[gameName])
  
  const handleAddGame = async () => {
    profileService.handleAddGame(game, profile._id)
    if (!playedBy.some(play => {
      return play === profile._id
    })) {
      setPlayedBy([...playedBy, profile])
    } else {
      return
    }
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
      { playedBy.length ? 
        <div>
        <h1>I am here my G</h1>
        {playedBy.map(profile =>
          <ProfileCard
          key={profile._id}
          profile={profile}
          />
          )}
        </div>
        :
        <h1>LOADING...</h1>
      }
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