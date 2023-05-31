import React, {useCallback, useEffect, useContext} from 'react'

import { AppContext } from '../App'
import Key from './Key'

function Keyboard() {
  const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  
  const {onEnter, onDelete, onSelectLetter, disabledLetters, almostLetters, correctLetters} = useContext(AppContext)
  // Handle keypresses
  const handleKeypress = useCallback((event) => {
    const key = event.key.toUpperCase()
    // Check if the key is the enter key
    if (event.key === "Enter") {
      onEnter()
    }

    else if (event.key === "Backspace") {
      onDelete()
    }

    else {
      // Check if Event.key is in keys1, keys2, or keys3
      if (keys1.includes(key) || keys2.includes(key) || keys3.includes(key))
        onSelectLetter(key)
    }
  })

  // Detect keypresses
  useEffect(() => {
    document.addEventListener('keydown', handleKeypress)
    return () => {
      document.removeEventListener('keydown', handleKeypress)
    }
  }, [handleKeypress])

  return (
    <div className="keyboard" onKeyDown={handleKeypress}>
      <div className="line1">
        {keys1.map((key, index) => {
          return <Key keyValue={key} disabled={disabledLetters.includes(key)} almost={almostLetters.includes(key)} correct={correctLetters.includes(key)}/>
        })}
      </div>
      <div className="line2">
      {keys2.map((key, index) => {
          return <Key keyValue={key} disabled={disabledLetters.includes(key)} almost={almostLetters.includes(key)} correct={correctLetters.includes(key)}/>
        })}
      </div>
      <div className="line3">
        <Key keyValue={"ENTER"} bigKey/>
      {keys3.map((key, index) => {
          return <Key keyValue={key} disabled={disabledLetters.includes(key)} almost={almostLetters.includes(key)} correct={correctLetters.includes(key)}/>
        })}
        <Key keyValue={"DELETE"} bigKey/>
      </div>
    </div>
  )
}

export default Keyboard