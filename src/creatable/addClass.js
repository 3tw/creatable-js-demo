function createClassArray (classString) {
  return classString.trim().split(/^|\s+/);
}

export default function (classes) {
  
  const classNames = createClassArray(classes)
  this.el.classList.add(...classNames)
  
  return this
}
