import { useState, createContext, useEffect } from 'react';

import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault, generateWordSet } from './components/Words'

import './App.css';

export const AppContext = createContext();

function App() {

  // Create the board state
  const [board, setBoard] = useState(boardDefault)
  const [currentAttempt, setCurrentAttempt] = useState({ attempt: 0, letterPosition: 0 })
  const [wordSet, setWordSet] = useState(new Set())

  // Correct word
  const correctWord = "APPLE"

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet)
    })
  }, [])

  // Keyboard functions
  const onSelectLetter = (keyValue) => {
    if (currentAttempt.letterPosition === 5) return
    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue
    setCurrentAttempt({ attempt: currentAttempt.attempt, letterPosition: currentAttempt.letterPosition + 1 })
    setBoard(newBoard)
  }

  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return
    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = ""
    setCurrentAttempt({ attempt: currentAttempt.attempt, letterPosition: currentAttempt.letterPosition - 1 })
    setBoard(newBoard)
  }

  const onEnter = () => {
    // If the current position isn't 5, we don't want to do anything
    if (currentAttempt.letterPosition !== 5) return
  
    let currentWord = ""
    board[currentAttempt.attempt].forEach((letter) => {
      currentWord += letter
    })

    if (wordSet.has(currentWord.toLowerCase())) {
      setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letterPosition: 0 })
    } else {
      alert("Word not found")
    }
    
  }

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currentAttempt, setCurrentAttempt, onSelectLetter, onDelete, onEnter, correctWord }}>
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
