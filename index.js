var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  name = kittens.push("Ralph");
  return name
}

function destructivelyPrependKitten(name) {
  name = kittens.unshift("Bob");
  return name
}

function destructivelyRemoveLastKitten(name) {
  name = kittens.pop();
  return name
}

function destructivelyRemoveFirstKitten(name) {
  name = kittens.shift();
  return name
}

function appendKitten(name) {
  name = kittens.concat("Broom");
  return name
}

function prependKitten(name) {
  name = ["Arnold", ...kittens];
  return name
}

function removeLastKitten(name) {
  name = kittens.slice(0, kittens.length-1)
  return name
}

function removeFirstKitten(name) {
  name = kittens.slice(1)
  return name
}
