import React, {useContext} from 'react'

import { AppContext } from '../App'

function GameOver() {

    const {gameOver, setGameover, correctWord, currentAttempt} = useContext(AppContext)
  return (
    <div className="gameover">
        <h3>{gameOver.guessedWord ? "You correctly guessed." : "You failed"}</h3>
        <h1>Correct Word: {correctWord}</h1>

        {gameOver.guessedWord && (<h3>You guessed in {currentAttempt.attempt} attempts.</h3>)}
    </div>
  )
}

export default GameOver