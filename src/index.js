import creatable_append from './creatable/append.js'
import creatable_attribute from './creatable/attribute.js'
import creatable_addClass from './creatable/addClass.js'
import creatable_insertBefore from './creatable/insertBefore.js'
import creatable_insertAfter from './creatable/insertAfter.js'
import creatable_prepend from './creatable/prepend.js'
import creatable_removeClass from './creatable/removeClass.js'
import creatable_select from './creatable/select.js'
import creatable_selectChild from './creatable/selectChild.js'
import creatable_selectNext from './creatable/selectNext.js'
import creatable_selectParent from './creatable/selectParent.js'
import creatable_selectPrev from './creatable/selectPrev.js'
import creatable_text from './creatable/text.js'

export function Creatable(selector = null) {
  this.el = selector
}

Creatable.prototype = {
  constructor: Creatable,
  append: creatable_append,
  attribute: creatable_attribute,
  addClass: creatable_addClass,
  insertAfter: creatable_insertAfter,
  insertBefore: creatable_insertBefore,
  prepend: creatable_prepend,
  removeClass: creatable_removeClass,
  select: creatable_select,
  selectChild: creatable_selectChild,
  selectNext: creatable_selectNext,
  selectParent: creatable_selectParent,
  selectPrev: creatable_selectPrev,
  text: creatable_text
}
