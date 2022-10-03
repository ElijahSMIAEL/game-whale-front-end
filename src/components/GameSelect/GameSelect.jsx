import { useEffect, useState } from 'react'
import styles from './GameSelect.module.css'
import GameOption from '../GameOption/GameOption'


const GameSelect = (props) => {
  const author= props.author

  return (
    <div>
    { author.gameCollection.length ?
      <div>
        <h2>Your Game Collection</h2>
        <select 
          name="gameId" 
          id="gameId-input"
          onChange={props.handleChange}
        >
          <option>Select a game...</option>
          {author.gameCollection.map(game =>
            <GameOption 
              key={game}
              game={game}
            />
          )}
        </select>
      </div>
      :
      <h2>Add games to your collection</h2>
    }
    </div>
  )
}

export default GameSelect