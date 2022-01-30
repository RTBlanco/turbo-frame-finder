
document.addEventListener('DOMContentLoaded', () => {
  
  const state = {
    on: checkStorage()
  }
  console.log(state.on)
  const toggleSwitch = document.getElementById('toggle-switch');

  toggleSwitch.checked = state.on

  
  toggleSwitch.addEventListener('change', () => {
    state.on = !state.on;
    // localStorage.setItem('on', state.on)

    chrome.storage.sync.set({'on': state.on}, ()=> {
      console.log('Settings saved');
    });
  });
});

function checkStorage() {
  // let storage = localStorage.getItem('on')

  // if (typeof storage === 'undefined' || storage === 'false' ) {
  //   return false
  // } else {
  //   return true
  // }

  chrome.storage.sync.get('on', function(items) {
    console.log('Settings retrieved', items);
    if (typeof items.on === 'undefined') {
      return false
    }  
    return items.on
  });
}