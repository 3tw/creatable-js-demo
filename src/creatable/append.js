export default function(element) {
  
  this.el = this.el.appendChild(document.createElement(element))
  
  return this
}
