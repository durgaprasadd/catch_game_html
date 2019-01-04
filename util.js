let randomNumber = function(number) {
    return Math.floor(Math.random() * number);
  };

  let youWon = function(interval) {
    alert('you won and time taken : ' + count);
    count = 0;
    clearInterval(interval);
  };

  const randomColour = function() {
    return `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(
      255
    )})`;
  };
  const randomPixels = function(number) {
    return `${randomNumber(number)}px`;
  };

  let changeColorAndPosition = function() {
    document.getElementById('main').style.color = randomColour();
    document.getElementById('main').style.background = randomColour();
    document.getElementById('main').style.left = randomPixels(1230);
    document.getElementById('main').style.top = randomPixels(670);
    document.getElementById('main').onclick = youWon;
    count++;
  };
  let count = 0;

  let randomPositionAndColour = function() {
    let interval = setInterval(changeColorAndPosition, 500);
  };