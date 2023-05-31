import React, {useContext, useEffect} from 'react'

import { AppContext } from '../App'

function Letter({ letterPosition, attemptValue}) {
    const {board, correctWord, currentAttempt, disabledLetters, setDisabledLetters, almostLetters, setAlmostLetters, correctLetters, setCorrectLetters} = useContext(AppContext)
    const letter = board[attemptValue][letterPosition]

    const correct = correctWord[letterPosition] === letter
    const almost = correctWord.includes(letter) && !correct && letter !== ""

    const letterState = currentAttempt.attempt > attemptValue && (correct ? "correct" : almost ? "almost" : "error")

    useEffect(() => {
      if (letter !=="" && !correct && !almost) {
        setDisabledLetters((prev) => [...prev, letter])
      }
      if (letter !=="" && almost) {
        setAlmostLetters((prev) => [...prev, letter])
      }
      if (letter !=="" && correct) {
        setCorrectLetters((prev) => [...prev, letter])
      }
    }, [currentAttempt.attempt])
  return (
    <div className="letter" id={letterState}>{letter}</div>
  )
}

export default Letter