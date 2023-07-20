const buttonCounter = document.getElementById('btn');
// eslint-disable-next-line func-names
buttonCounter.addEventListener('click', function () {
  buttonCounter.innerHTML = +buttonCounter.innerHTML + 1;
});
