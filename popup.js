const state = {
  on: false
};

document.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('on', false)

  const toggleSwitch = document.getElementById('toggle-switch');
  toggleSwitch.addEventListener('click', () => {
    // state.on = !state.on;
  });
});

