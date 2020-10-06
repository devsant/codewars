const numbers = [1, 3, 2];


function mirror(data) {
  // sort minor to biggest
  const mirrorNumber = data.slice().sort((a, b) => a - b);
  // mirror in the middle of larger number
  return [...mirrorNumber, ...mirrorNumber.reverse().slice(1)];
}

console.log(mirror(numbers))