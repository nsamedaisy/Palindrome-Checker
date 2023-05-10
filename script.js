const txtInput = document.querySelector('.inputs input')

const checkBtn = document.querySelector('.inputs button')

const infoTxt = document.querySelector('.info-text')

let filter

checkBtn.addEventListener('click', () => {
  // split method splits a string object into an array of strings by separating the string into sub strings
  // reverse method reverse an array in place
  // join method joins all elements of an array into a string
  const reverse = filter.split('').reverse().join('')
  infoTxt.style.display = 'block'

  if (filter !== reverse) {
    return infoTxt.innerHTML = `False, <span>'${txtInput.value}'</span> isn't a palindrome`
  }
  infoTxt.innerHTML = `True, <span>'${txtInput.value}'</span> is a palindrome`
})

txtInput.addEventListener('keyup', () => {
  //removing spaces and all special characters from entered value
  filter = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, '')
  if (filter) {
    return checkBtn.classList.add('active')
  }
  infoTxt.style.display = 'none'
  checkBtn.classList.remove('active')
})
