// TODO 内置对象

;(() => {
  /* 1. ECMAScript 的内置对象 */
  // let b: Boolean = new Boolean(1)
  // let n: Number = new Number(true)
  // let s: String = new String('abc')
  // let d: Date = new Date()
  // let r: RegExp = /^1/
  // let e: Error = new Error('error message')
  // b = true
  // console.log(b)
  // let bb: boolean = new Boolean(2) // error

  const div: HTMLElement = document.getElementById('test')
  console.log('div: ', div)
  const divs: NodeList = document.querySelectorAll('div')
  console.log('divs: ', divs)
  document.addEventListener('click', (event: MouseEvent) => {
    console.dir(event.target)
  })
  const fragment: DocumentFragment = document.createDocumentFragment()
  console.log('fragment: ', fragment)
})()
