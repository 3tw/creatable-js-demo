export default function() {
  
  this.el = this.el.previousSibling
  
  if (!this.el) {
    throw new Error(`This element doesn't have a node immediately preceding it.`)
  }
  
  return this
}
