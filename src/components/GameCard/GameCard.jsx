import styles from './GameCard.module.css'
import GameDetails from '../../pages/GameDetails/GameDetails'
import { Link } from 'react-router-dom'

const GameCard = (props) => {
  return (
    <>
    <Link to={`/game/${props.game.id}`}>
      {props.game.name}
    </Link>
    <GameDetails />
    </>
  )
}

export default GameCard