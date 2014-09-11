// from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInt(min, max) {
  return parseInt(Math.random() * (max - min) + min , 0);
}