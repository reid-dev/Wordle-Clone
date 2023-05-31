import React, {useContext} from 'react'

import { AppContext } from '../App'

function Letter({ letterPosition, attemptValue}) {
    const {board, correctWord, currentAttempt} = useContext(AppContext)
    const letter = board[attemptValue][letterPosition]

    const correct = correctWord[letterPosition] === letter
    const almost = correctWord.includes(letter) && !correct && letter !== ""

    const letterState = currentAttempt.attempt > attemptValue && (correct ? "correct" : almost ? "almost" : "error")
  return (
    <div className="letter" id={letterState}>{letter}</div>
  )
}

export default Letter