
let message = document.getElementById('message');
let addBtn = document.getElementById('add');

const words = [];

console.log(words)
console.log(field.value)

function getInputValue(field) {
    return field = document.getElementById('field').value
}

//make toLowerCase function

function clearInput(field) {
    return field.value = "";
}

// function clearArray() {
//     cities.splice(0,cities.length);
// }

function validateValue() {
    words.forEach((word) => {
        if (word.slice(-1) === field.value[0]) {
            words.push(field.value)
        } else if (field.value === word) {
            console.log(`такое слово уже есть ${word}`)
            words.pop(word) 
        }
    })
}

function pushInputValue() {
    if (words.length === 0) {
        words.push(getInputValue(field))
    } else {
        validateValue()
    }

    console.log(words)
    clearInput(field)
}
function additionWord() {
     pushInputValue(getInputValue),
     validateValue(getInputValue),
     clearInput(getInputValue)

}

addBtn.addEventListener("click", additionWord)