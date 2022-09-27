import styles from './GameCard.module.css'
import GameDetails from '../../pages/GameDetails/GameDetails'
import { Link } from 'react-router-dom'

const GameCard = (props) => {
  return (
    <div className={styles.gameCard}>
      <img src={props.game.background_image} alt="Game" className={styles.backgroundImage}/>
    <Link to={`/game/${props.game.id}`}>
      {props.game.name}
    </Link>
    </div>
  )
}

export default GameCard