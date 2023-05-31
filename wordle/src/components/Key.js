import React, {useContext} from 'react'
import { AppContext } from '../App'

function Key({keyValue, bigKey, disabled}) {
    const {onEnter, onDelete, onSelectLetter} = useContext(AppContext)
    
    const selectLetter = () => {
        // Check if the key is the enter key
        if (keyValue === "ENTER") {
            onEnter()
        }
        // Check if the key is the delete key
        else if (keyValue === "DELETE") {
            onDelete()
        }
        // If it's not delete or the letter key, it's a letter
        else {
            onSelectLetter(keyValue)
        }
    }

  return (
    <div className="key" id={bigKey ? "big": disabled && "disabled"} onClick={selectLetter}>
        {keyValue}
    </div>
  )
}

export default Key