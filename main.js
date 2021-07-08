import Creatable from 'creatable-js'

const el = new Creatable()

//// Counter ////

function count() {
  let count = -1
  return () => {
    return ++count
  }
}

const counter = count()

//// Function calls ////

let functionSeries = []

// Add colors
functionSeries.push(function() {
  const calls = `el
  .select('.col-middle')
  .addClass('bg-blue')
  .insertAfter('div')
  .addClass('col col-right bg-yellow')
  .attribute('style', 'opacity: 0;')
  .append('div')
  .attribute('style', 'padding: 0 20px; width: calc(100% - 40px); max-width: 450px; text-align: left;')
  .append('h2')
  .text('Code Log')
  .insertAfter('p')
  .addClass('code-log')
  .select('button')
  .addClass('pointer')
  .text("Let's fix this button")
  `
  el
    .select('.col-middle')
    .addClass('bg-blue')
    .insertAfter('div')
    .addClass('col col-right bg-yellow')
    .attribute('style', 'opacity: 0;')
    .append('div')
    .attribute('style', 'padding: 0 20px; width: calc(100% - 40px); max-width: 450px; text-align: left;')
    .append('h2')
    .text('Code Log')
    .insertAfter('p')
    .addClass('code-log')
    .select('button')
    .addClass('pointer')
    .text("Let's fix this button")

  el
    .select('.code-log')
    .insertBefore('p')
    .append('strong')
    .text('const el = new Creatable()')
    .selectParent()
    .selectNext()
    .text(calls)
})

// Style button
functionSeries.push(function() {
  const calls = `el
  .select('button')
  .attribute(
    'style',
    'width: fit-content; padding: 10px 20px; margin: 0 20px; border: none;border-radius: 3px; background: var(--magenta); color: #fff; font-weight: 700;'
  )
  .text('Now, show our code')
  `

  el
    .select('button')
    .attribute(
      'style',
      'width: fit-content; padding: 10px 20px; margin: 0 20px; border: none;border-radius: 3px; background: var(--magenta); color: #fff; font-weight: 700;'
    )
    .text('Now, show our code')

  el.select('.code-log').text(calls)
})

// Show log
functionSeries.push(function() {
  const calls = `el
  .select('.code-log')
  .selectParent()
  .attribute('style', 'opacity: 1; transition: opacity .35s ease-in-out; line-height: 1.4rem; font-size: 1rem;')
  .select('button')
  .text('Ok, go on - create some elements')
  `

  el
    .select('.code-log')
    .selectParent()
    .selectParent()
    .attribute('style', 'opacity: 1; transition: opacity .35s ease-in-out; line-height: 1.4rem; font-size: 1rem;')
    .select('button')
    .text('Ok, go on - create some elements')

  el.select('.code-log').text(calls)
})

// Create input
functionSeries.push(function() {
  const calls = `el
  .select('main')
  .prepend('div')
  .addClass('col col-left bg-purple')
  .append('div')
  .attribute('style', 'padding: 0 20px; max-width: 450px;')
  .append('input')
  .attribute('placeholder', 'This is an ugly input')
  .attribute('id', 'custom-input')
  .attribute('multiple')
  .select('button')
  .text("Make it of type 'file'")
 `

  el
    .select('main')
    .prepend('div')
    .addClass('col col-left bg-purple')
    .append('div')
    .attribute('style', 'padding: 0 20px; max-width: 450px;')
    .append('input')
    .attribute('placeholder', 'This is an ugly input')
    .attribute('id', 'custom-input')
    .attribute('multiple')
    .select('button')
    .text("Make it of type 'file'")

  el.select('.code-log').text(calls)
})

// Add attribute to input
functionSeries.push(function() {
  const calls = `el
  .select('input')
  .attribute('type', 'file')
  .select('button')
  .text('Add a label and a span')
`

  el.select('input').attribute('type', 'file').select('button').text('Add a label and a span')

  el.select('.code-log').text(calls)
})

// Prettify input: step 1
functionSeries.push(function() {
  const calls = `el
  .select('input')
  .insertParent('label')
  .addClass('upload-holder')
  .append('span')
  .attribute('style', 'color: #fff;')
  .select('input')
  .addClass('file-input')
  .select('button')
  .text('A few more things ...')
  .select('.col-left div')
  .append('div')
  .addClass('note')
  .attribute('style', 'opacity: 0;')
`

  el
    .select('input')
    .insertParent('label')
    .addClass('upload-holder')
    .append('span')
    .attribute('style', 'color: #fff;')
    .select('input')
    .addClass('file-input')
    .select('button')
    .text('A few more things ...')
    .select('.col-left div')
    .append('div')
    .addClass('note')
    .attribute('style', 'opacity: 0;')

  el.select('.code-log').text(calls)
})

// Prettify input: step 2
functionSeries.push(function() {
  const calls = `el
  .select('.upload-holder span')
  .text('Filezz go here ...')
  .selectParent()
  ...
  .select('.note')
  .attribute('style', 'opacity: 1;  transition: opacity .35s 1s ease-in-out;')
  .append('p')
  .text('* You can find my function for appending names of uploaded files on')
  .attribute('style', 'color: #fff; line-height: 1.1rem; font-size: 0.8rem;')
  .append('a')
  .attribute('href', 'https://github.com/3tw/reusable-javascript/blob/master/helpers.js')
  .attribute('target', '_blank')
  .attribute('rel', 'noopener')
  .attribute('style', 'padding-left: 5px; color: #fff;')
  .text('GitHub')
`

  el
    .select('.upload-holder span')
    .text('Filezz go here ...')
    .selectParent()
    .insertAfter('h3')
    .attribute('style', 'color: #fff; margin: 20px 0 5px 0;')
    .text('a place for your files:')
    .insertAfter('div')
    .attribute('style', 'padding: 10px; background: #fff; line-height: 1.2rem; font-size: 0.8rem;')
    .addClass('file-holder')
    .select('button')
    .removeClass('pointer')
    .text('Try out your new input!')
    .selectParent()
    .attribute('style', 'background-color: var(--magenta); transition: background-color .35s ease-in-out')
    .select('.note')
    .attribute('style', 'opacity: 1;  transition: opacity .35s 1s ease-in-out;')
    .append('p')
    .text('* You can find my function for appending names of uploaded files on')
    .attribute('style', 'color: #fff; line-height: 1.1rem; font-size: 0.8rem;')
    .append('a')
    .attribute('href', 'https://github.com/3tw/reusable-javascript/blob/master/helpers.js')
    .attribute('target', '_blank')
    .attribute('rel', 'noopener')
    .attribute('style', 'padding-left: 5px; color: #fff;')
    .text('GitHub')

  el.select('.code-log').text(calls)

  appendUploadName('custom-input', '.file-holder')
})

//// Listeners ////

document.querySelector('button').addEventListener('click', () => {
  // counter()
  let currentCount = counter()

  if (currentCount < functionSeries.length) {
    functionSeries[currentCount]()
  }
})

//// Helpers ////

/**
 * Append uploaded file name(s)
 * @param {String} inputId Id of the input with type='file'
 * @param {String} nameHolder Selector for element where span elements with file names are appended
 * @returns {void} 
 */

function appendUploadName(inputId, nameHolder) {
  document.getElementById(inputId).addEventListener('change', function() {
    const loadedFiles = [
      ...document.getElementById(inputId).files
    ]
    if (loadedFiles) {
      document.querySelector(nameHolder).classList.add('active')

      loadedFiles.forEach((file) => {
        const fileNameEl = document.createElement('span')
        const fileNameText = document.createTextNode(file.name)
        fileNameEl.appendChild(fileNameText)
        document.querySelector(nameHolder).appendChild(fileNameEl)
      })
    }
  })
}
