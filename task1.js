//append div to document with its selector 

class DomElement {
 
    constructor(selector) {
      this.selector = selector
    }
  
    create() {
      if(this.selector[0] == '.'){
        const div = document.createElement("div")
        div.classList.add(this.selector)
        document.body.append(div)
      }
    }
}
  
  let newElement = new DomElement(".block")
  newElement.create()
  
  
  console.log(newElement)

export default DomElement