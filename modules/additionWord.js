import { validateWord } from "./validateWord"
import { toLower, clearInput, getInputValue} from "./someMethods"

const words = [];

function pushInputValue() {
    if (words.length === 0) {
        words.push(getInputValue(field))
    } else {
        validateWord(words, field)
    }

   
    clearInput(field)
    toLower(field)
}
export function additionWord() {
     pushInputValue(getInputValue)
}

