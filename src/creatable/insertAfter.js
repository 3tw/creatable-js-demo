export default function(element) {
  
  this.el = this.el.insertAdjacentElement('afterend', document.createElement(element))

  return this
}
