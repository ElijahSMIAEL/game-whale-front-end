import { useEffect, useState } from 'react'
import styles from './GameOption.module.css'
import { getGameDetails } from '../../services/gameService'

const GameOption = (props) => {
  const [game, setGame] = useState({})
  const gameId = props.game

  useEffect(() => {
    const fetchGameDetails = async () => {
      const path = `/games/${gameId}`
      const gameData = await getGameDetails(path)
      setGame(gameData.game)
    }
    fetchGameDetails()
  }, [gameId])
  
  return (
    <>
      <option value={game.id}>
        {game.name}
      </option>
    </>
  )
}

export default GameOption