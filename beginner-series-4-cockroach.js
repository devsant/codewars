function cockroachSpeed(s) {
  return Math.floor(s * 27.778)
}


//Expect to be 30
console.log(cockroachSpeed(1.08));
//Expect to be 30
console.log(cockroachSpeed(1.09));
//Expect to be 0
console.log(cockroachSpeed(0));