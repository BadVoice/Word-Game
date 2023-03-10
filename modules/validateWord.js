
export function validateWord(words) {

    words.forEach((word) => {

        if(word !== field.value.toLowerCase()){
            field.value = field.value.toLowerCase()
        }
        if (word.slice(-1) === field.value[0]) {
             words.push(field.value)
        } 
         else if (field.value === word) {
            console.log(`такое слово уже есть ${word}`)
            words.pop(word) 
        } 
    })

}