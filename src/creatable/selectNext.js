export default function() {
  
  this.el = this.el.nextSibling
  
  if (!this.el) {
    throw new Error(`This element doesn't have a node immediately following it.`)
  }
  
  return this
}
