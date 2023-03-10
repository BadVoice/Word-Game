
export function displayWords(words) {
    let message = document.getElementById('message')
    let wordDiv = document.createElement("div")
    wordDiv.innerHTML = words
    message.appendChild(wordDiv)
}