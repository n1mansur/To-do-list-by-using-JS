const wrapper = document.getElementById('wrapper')
wrapper.style.cssText = `
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: #EFEFEF;
  max-width:1440px;
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`

//** To Do list APP */
const h1 = document.createElement('h1')
h1.innerHTML = 'To Do list APP'
h1.style.cssText = `
  font-weight: 700;
  font-size: 56px;
  margin-bottom: 30px;
`
wrapper.append(h1)

//** main section */
const div = document.createElement('div')
div.style.cssText = `
  width: 456px;
  height: 434px;
  background: #FBFBFB;
  padding:32px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction:column;
  gap:10px;
`
wrapper.append(div)

//** create input and btn */
const form = document.createElement('form')
const inp = document.createElement('input')
inp.id = 'myValue'
const btn = document.createElement('button')
btn.type = 'button'
form.style.cssText = `
  width:100%;
  display:flex;
  justify-content: space-between;
  align-items:center;
`
inp.style.cssText = `
  padding: 8px 16px;
  width: 320px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #E5E9EB;
  border-radius: 6px;
  font-weight: 400;
  font-size: 14px;
`
btn.style.cssText = `
  background: #4094F7;
  border-radius: 6px;
  width: 60px;
  height: 40px;
  padding: 8px 16px;
  color:#fff;
  border:none;
  cursor:pointer;
  transition: 0.5s;
`
btn.id = 'myBtn'
btn.textContent = 'Add'
inp.placeholder = 'Text input'
form.append(inp)
form.append(btn)
div.append(form)
btn.addEventListener('mouseenter', (e) => {
  e.target.style.background = `#fff`
  e.target.style.color = `#4094F7`
  e.target.style.boxShadow = `0px 0px 5px #4094F7`
  e.target.style.transition = '0.5s'
})
btn.addEventListener(
  'mouseout',
  () => {
    btn.style.cssText = `
    background: #4094F7;
    border-radius: 6px;
    width: 60px;
    height: 40px;
    padding: 8px 16px;
    color:#fff;
    border:none;
    cursor:pointer;
    transition: 0.5s;
  `
  },
  false
)

//** create list information */
const list = document.createElement('div')
list.className = 'cl'
list.style.cssText = `
  width: 412px;
  height:100%;
  display:flex;
  flex-direction:column;
  gap:10px;
  overflow:auto;
  padding:10px;
`
const clearAll = document.createElement('button')
clearAll.addEventListener('click', () => {
  const cl = document.querySelector('.cl')
  cl.innerHTML = ''
})
clearAll.addEventListener('mouseenter', (e) => {
  e.target.style.background = `#0E73F6`
  e.target.style.color = `#fff`
  e.target.style.transition = '0.5s'
})
clearAll.addEventListener(
  'mouseout',
  () => {
    clearAll.style.cssText = `
    border:none;
    width:100%;
    height:40px;
    background:none;
    color:#0E73F6;
    cursor:pointer;
    border-radius:8px;
    transition: 0.5s;
  `
  },
  false
)
clearAll.textContent = 'clearAll'
clearAll.className = 'hover'
clearAll.style.cssText = `
  border:none;
  width:100%;
  height:40px;
  background:none;
  color:#0E73F6;
  cursor:pointer;
  border-radius:8px;
  transition: 0.5s;
`

clearAll.style.cssText
div.append(list, clearAll)

//** JavaScript */
const myBtn = document.getElementById('myBtn')
myBtn.addEventListener('click', () => {
  if (myValue.value) {
    const item = document.createElement('div')
    item.className = 'item'
    const h2 = document.createElement('h2')
    item.style.cssText = `
      width: 100%;
      min-height: 48px;
      background: #FFFFFF;
      box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      display:flex;
      align-items:center;
      justify-content: space-between;
      padding:0 20px;
    `
    const div3 = document.createElement('div')
    const btn_i_1 = document.createElement('button')
    const btn_i_2 = document.createElement('button')
    btn_i_1.className = 'btn1'
    btn_i_2.className = 'btn2'
    btn_i_1.style.cssText = `
      border:none;
      background:none;
      margin-right:10px;
      cursor:pointer;
    `
    btn_i_2.style.cssText = `
    border:none;
    background:none;
    cursor:pointer;
  `
    const i = document.createElement('i')
    const i2 = document.createElement('i')
    i.className = 'bx bx-sm bxs-pencil'
    i2.className = 'bx bx-sm bx-x mysz'
    const mysz = document.querySelector('.mysz')
    console.log(mysz);
    //mysz.style.cssText = `font-size:50px`
    h2.textContent = myValue.value
    h2.className = 'text'
    btn_i_1.append(i)
    btn_i_2.append(i2)
    div3.append(btn_i_1, btn_i_2)
    item.append(h2, div3)
    list.append(item)
    myValue.value = ''
    inp.style.cssText = `
      padding: 8px 16px;
      width: 320px;
      height: 40px;
      background: #FFFFFF;
      border: 1px solid #E5E9EB;
      border-radius: 6px;
      font-weight: 400;
      font-size: 14px;
    `
  } else {
    inp.style.cssText += `
      border:1px solid red;
    `
  }
  deleteFn()
  cangeBtn()
})

const deleteFn = () => {
  const deleteBtn = document.querySelectorAll('.btn2')
  const itemsBtn = document.querySelectorAll('.item')
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', () => {
      itemsBtn[i].remove()
    })
  }
}
const cangeBtn = () => {
  let inchisi = 0
  const changeBtn = document.querySelectorAll('.btn1')
  for (let i = 0; i < changeBtn.length; i++) {
    inchisi = i
  }
  changeBtn[inchisi].addEventListener('click', () => {
    const changeValue = prompt()
    const text = document.querySelectorAll('.text')
    text[inchisi].innerHTML = changeValue
  })
}
