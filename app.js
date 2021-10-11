const board = document.querySelector('#board')
const colors = ['#7fff00', '#ff1493', '#ff00ff', '#7df9ff', '#ff3a40', '#FFF338', '#0b36c3', '#ca0000', '#28FFBF', '#D62AD0', '#FB3640', '#41AEA9'
  , '#28DF99', '#D2E603', '#54E346', '#0028FF', '#DBFF3D']
const SQUARES_NUMBER = 300

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseleave', () => removeColor(square))


  board.append(square)
}


function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 10px ${color}, 0 0 40px ${color}`

}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = '0 0 10px #111111'

}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
