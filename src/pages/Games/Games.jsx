import styles from './Games.module.css'
import { useState } from 'react'
import GameCard from '../../components/GameCard/GameCard'
import SearchForm from '../../components/SearchForm/SearchForm'
import { searchGame } from '../../services/gameService'

const Games = () => {
  const [games, setGames] = useState([])

  const handleGameSearch = async formData => {
    const gameResults = await searchGame(formData)
    setGames(gameResults.result)
  }

  return (
    <div className={styles.pageContent} id="content">
      <div className={styles.searchBar}>
      <SearchForm handleGameSearch={handleGameSearch} />
      </div>
      {games ? 
        <div className={styles.gameContainer}>
          {games.map(game => 
            <GameCard 
              game={game}
              key={game.id}
            />
          )}
        </div>
        :
        <h3>Please search for a Game!</h3>
      }
    </div>
  );
}
 
export default Games;