export default function(selector) {

  this.el = this.el.querySelector(selector)

  if (!this.el) {
    throw new Error(`Child element with selector '${selector}' could not be found.`)
  }

  return this
}
