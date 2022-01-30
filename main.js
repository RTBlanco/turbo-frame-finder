// Read it using the storage API
chrome.storage.sync.get('on', function(items) {
  console.log('Settings retrieved', items);


  const frames = document.getElementsByTagName('div')
  const state = {
    on: items.on
  }

  if (state.on) {
    for (let i = 0; i < frames.length; i ++) {
      frames[i].classList.add('turbo-frame-finder')
    }
  } else {
    for (let i = 0; i < frames.length; i ++) {
      frames[i].classList.remove('turbo-frame-finder')
    }
  }
});