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
    <>
      <h3>Game Search</h3>
      <SearchForm handleGameSearch={handleGameSearch} />
      {games ? 
        <>
          {games.map(game => 
            <GameCard 
              game={game}
              key={game.index}
            />
          )}
        </>
        :
        <h3>Please search for a Game!</h3>
      }
    </>
  );
}
 
export default Games;