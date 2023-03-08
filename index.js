let field = document.getElementById('field');
let message = document.getElementById('message');
let addBtn = document.getElementById('add')

// создать массив в которые будут записываться города 
const cities = [];

console.log(cities)
console.log(field.value)

// получить значение с инпута
function getInputValue(field) {
    return field.value
}

function clearInput(field) {
    return field.value = "";
}

// function clearArray() {
//     cities.splice(0,cities.length);
// }


function validateValue() {
    cities.forEach((city) => {
        if (city.slice(-1) === field.value[0]) {
            cities.push(field.value)

        } else if (field.value === city) {
            console.log(`такое слово уже есть ${city}`)
            cities.pop(city)
        }
    })
}

function pushInputValue() {

    if (cities.length === 0) {
        cities.push(getInputValue(field))
    } else {
        validateValue()
    }


    console.log(cities)


    clearInput(field)
}

addBtn.addEventListener("click", pushInputValue)