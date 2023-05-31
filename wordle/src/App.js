import { useState, createContext } from 'react';

import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault } from './components/Words'

import './App.css';

export const AppContext = createContext();

function App() {

  // Create the board state
  const [board, setBoard] = useState(boardDefault)
  return (
    <div className="App">
      <nav>
        Wordle
      </nav>
      <AppContext.Provider value={{board, setBoard}}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
