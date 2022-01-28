document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('toggle-switch')
  const state = {
    on: false
  }
  
  
  
  toggleSwitch.addEventListener('click', () => {
    state.on = !state.on
  })

  toggleSwitch.parentNode.style = 'border; 1px solid black'
  console.log(toggleSwitch.parentNode.style)

})
