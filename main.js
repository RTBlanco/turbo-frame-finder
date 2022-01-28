// import {state} from './popup.js'

document.addEventListener('DOMContentLoaded', ()=> {
  const frames = document.getElementsByTagName('div')
  if (state.on) {
    for (let i = 0; i < frames.length; i ++) {
      frames[i].className += 'turbo-frame-finder'
    }
  } else {
    for (let i = 0; i < frames.length; i ++) {
      frames[i].classList.remove('turbo-frame-finder')
    }
  }
})