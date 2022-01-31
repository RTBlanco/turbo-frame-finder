const state = {
  on: ''
}

const checked = checkStorage().then(data => {
  state.on = data
})

document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('toggle-switch');
  toggleSwitch.checked = state.on

  
  toggleSwitch.addEventListener('change', () => {
    state.on = !state.on;
    chrome.storage.sync.set({'on': state.on}, ()=> {});
  });
});

function checkStorage() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get('on', function(items) {
      resolve(items.on)
    });
  });
}