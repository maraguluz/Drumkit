//import { sortUserPlugins } from 'vite'
import './style.css'
//keydown event is fired when a key is pressed
const sounds = document.querySelectorAll('audio')
const keys = document.querySelectorAll('.keys div')

window.addEventListener('keydown', (event) => {
  //the keycode
  let code = event.keyCode.toString()

  //Playing the audio if the keyCode is equal to the audio's ID
  sounds.forEach((sound) => {
    if (code === sound.id) {
      sound.play()
      sound.currentTime = 0
    }
  })
  keys.forEach((key) => {
    if (code === key.id) {
      key.classList.add('playing')
      setTimeout(() => key.classList.remove('playing'), 100)
    }
  })
})
