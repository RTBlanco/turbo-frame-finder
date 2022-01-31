// Read it using the storage API
chrome.storage.sync.get('on', function(items) {
  const state = {on: items.on}

  const frames = document.getElementsByTagName('turbo-frame')
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
