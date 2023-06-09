import wordBank from '../data/wordbank.txt'
// Create a set of empty words to use as the first game state
export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
]

// Generate word list as a set of words
// Reason to use a set is to increase lookup performance
export const generateWordSet = async () => {
    let wordSet
    let todaysWord
    await fetch(wordBank)
        .then((response) => response.text())
        .then((result) => {
            const wordArray = result.split("\n")
            todaysWord = wordArray[Math.floor(Math.random() * wordArray.length)]
            wordSet = new Set(wordArray)
        })

        return {wordSet, todaysWord}
}
