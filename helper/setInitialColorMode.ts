// Function Set Initial Color Mode
function setInitialColorMode() {
  var body = document.body;
  var head = document.head;

  // Theme Address Bar Color
  var androidTC = document.createElement('meta');
  androidTC.setAttribute('name', 'theme-color');
  var iosTC = document.createElement('meta');
  iosTC.setAttribute('name', 'apple-mobile-web-app-status-bar-style');

  var localTheme = localStorage.getItem('theme-mode');

  function setDark() {
    // Theme Address Bar Color Change
    androidTC.setAttribute('content', 'hsl(207, 26%, 17%)');
    iosTC.setAttribute('content', 'hsl(207, 26%, 17%)');

    // Set attr body
    body.setAttribute('data-theme', 'dark');

    // set localstorage
    localStorage.setItem('theme-mode', 'dark');
  }

  function setLight() {
    // Theme Address Bar Color Change
    androidTC.setAttribute('content', 'hsl(0, 0%, 98%)');
    iosTC.setAttribute('content', 'hsl(0, 0%, 98%)');

    // set localstorage
    localStorage.setItem('theme-mode', 'light');
  }

  if (localTheme === 'dark') {
    setDark();
  } else {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      var queryMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (queryMedia.matches) {
        setDark();
      } else {
        setLight();
      }
    } else {
      setLight();
    }
  }

  head.appendChild(androidTC);
  head.appendChild(iosTC);
}

// our function needs to be a string
export const blockingSetInitialColorMode = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode();
  })()
  `;
