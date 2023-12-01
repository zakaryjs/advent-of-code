const fs = require('fs')
const readline = require('readline')

const words = []

// create readStream to read text file with words

const readStream = fs.createReadStream('challenge1words.txt')

// uses readline to read each individual line from the stream created above

const eachLine = readline.createInterface({
    input: readStream,
})

// push each line to an array called words

eachLine.on('line', (line) => {words.push(line)})

// after the file has been completely read:

eachLine.on('close', () => {
    // declare final value, to be updated after every line is iterated through
    let finalValue = 0
    // for each line
    for (word of words) {
        let numsInWord = []
        // for each character in the word
        for (letter of word) {
            // if the character is equal to a number, add it to the numsInWordArray
            if (letter === '0' || letter === '1' || letter === '2' || letter === '3' || letter === '4' || letter === '5' || letter === '6' || letter === '7' || letter === '8' || letter === '9') {
                numsInWord.push(letter)
            }
        }
        console.log(numsInWord)
        // first number is equal to the first character in the numsInWord array
        let firstNum = numsInWord[0]
        // last number is equal to the last character in the numsInWord array
        let lastNum = numsInWord[numsInWord.length-1]
        // the number is equal to the combination of the first and last number
        let num = firstNum + lastNum
        // convert it to a number...
        let numAsNum = Number(num)
        console.log(numAsNum)
        // and add it to the final value
        finalValue += numAsNum
        // repeat this for the entirety of the list
    }
    console.log('Final value is: ' + finalValue)
})
