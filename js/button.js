const buttonCounter = document.getElementById('btn');
buttonCounter.addEventListener('click', function () {
  buttonCounter.innerHTML = +buttonCounter.innerHTML + 1;
});
