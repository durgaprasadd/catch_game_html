let randomNumber = function(number) {
  return Math.floor(Math.random() * number);
};

let youWon = function(timeInterval) {
  let timeTaken = (count * timeInterval) / 1000;
  let message = 'you won and time taken : ' + timeTaken + ' seconds';
  alert(message);
  count = 0;
};

const randomColour = function() {
  return `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`;
};
const randomPixels = function(number) {
  return `${randomNumber(number)}px`;
};

let changeColorAndPosition = function(timeInterval) {
  document.getElementById('main').style.color = randomColour();
  document.getElementById('main').style.background = randomColour();
  document.getElementById('main').style.left = randomPixels(1230);
  document.getElementById('main').style.top = randomPixels(670);
  document.getElementById('main').onclick = youWon.bind(timeInterval);
  count++;
};
let count = 0;

let randomPositionAndColour = function() {
  let timeInterval = 500;
  let interval = setInterval(
    changeColorAndPosition.bind(null, timeInterval),
    timeInterval
  );
};
