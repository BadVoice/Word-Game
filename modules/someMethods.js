export function getInputValue(field) {
    return field = document.getElementById('field').value
 }

export  function toLower(field) {
    if(field.value == field.value.toUpperCase()) {
        return field.value.toLowerCase()
    }
}
export function clearInput(field) {
    return field.value = "";
}

//make toLowerCase function

// function clearArray() {
//     cities.splice(0,cities.length);
// }


