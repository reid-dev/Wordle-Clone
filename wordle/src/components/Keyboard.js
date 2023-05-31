import React from 'react'

import Key from './Key'

function Keyboard() {
  const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key, index) => {
          return <Key keyValue={key}/>
        })}
      </div>
      <div className="line2">
      {keys2.map((key, index) => {
          return <Key keyValue={key}/>
        })}
      </div>
      <div className="line3">
        <Key keyValue={"ENTER"} bigKey/>
      {keys3.map((key, index) => {
          return <Key keyValue={key}/>
        })}
        <Key keyValue={"DELETE"} bigKey/>
      </div>
    </div>
  )
}

export default Keyboard