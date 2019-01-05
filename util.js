let randomNumber = function(number) {
  return Math.floor(Math.random() * number);
};

let youWon = function(timeGap, interval) {
  let timeTaken = (count * timeGap) / 1000;
  let message = 'you won and time taken : ' + timeTaken + ' seconds';
  alert(message);
  clearInterval(interval);
  document.getElementById('main').onclick = randomPositionAndColour;
  document.getElementById('main').style.top = '0px';
  document.getElementById('main').style.left = '0px';
  count = 0;
};

const randomColour = function() {
  return `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`;
};
const randomPixels = function(number) {
  return `${randomNumber(number)}px`;
};

let changeColorAndPosition = function(timeGap, interval) {
  document.getElementById('main').style.color = randomColour();
  document.getElementById('main').style.background = randomColour();
  document.getElementById('main').style.left = randomPixels(1230);
  document.getElementById('main').style.top = randomPixels(670);
  document.getElementById('main').onclick = youWon.bind(
    null,
    timeGap,
    interval
  );
  count++;
};
let count = 0;

let randomPositionAndColour = function() {
  let timeGap = 500;
  let interval = setInterval(function() {
    changeColorAndPosition(timeGap, interval);
  }, timeGap);
};
