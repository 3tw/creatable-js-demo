export default function(element) {
  
  this.el = this.el.insertAdjacentElement('beforebegin', document.createElement(element))

  return this
}
