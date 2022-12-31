# CHROME URL SAVER

Chrome extension to save website URLs

## JavaScript concepts used

- functions
- onclick() (replaced with addEventListener())
- document.getElementById()
- addEventListener()
- array.push()
- if conditional
- for loops
- += (to add to an element, instead of overwriting it)
- element.innerHTML
    - document.createElement() (tested as alternative to innerHTML)
    - element.textContent (tested as alternative to innerHTML)
    - element.append (tested as alternative to innerHTML)
- template literals / template strings
- localStorage
    - localStorage.setItem(key, value)
        - both key and value need to be strings
    - localStorage.getItem(key)
    - localStorage.clear()
- JSON.stringify()
- JSON.parse()

## Other: Deploying to Chrome locally

- deployed locally to Chrome
    - added manifest.json
    - added icon.png
    - navigated to chrome://extensions/
    - turned on developer mode
    - clicked "Load unpacked"
    - pointed to application folder
    - verified that application appears in extensions list
    - tested application in new browser tab