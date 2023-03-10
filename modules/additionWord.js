import { validateWord } from "./validateWord"
import { clearInput, getInputValue, toLower} from "./someMethods"

const words = [];

function pushInputValue() {
    words.length === 0 
    ? words.push(toLower(field)) 
    : validateWord(words, field)

    clearInput(field)
}
export function additionWord() {
     pushInputValue(getInputValue)
}
