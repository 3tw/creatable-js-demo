export default function(element) {  
 
  this.el = this.el.insertBefore(document.createElement(element), this.el.firstChild)
  
  return this
}
