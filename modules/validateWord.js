
export function validateWord(words) {

    words.forEach((word) => {
        if (word.slice(-1) === field.value[0]) {
             words.push(field.value)
             console.log(field.value)
        } 
        
        else if (field.value === word) {
            console.log(`такое слово уже есть ${word}`)
            words.pop(word) 
        } else {
            console.log('Слово не прошло валидацию')
        }
    })
    console.log(words)
}