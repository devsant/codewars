function squareSum(numbers) {
  let totalSum = 0;
  numbers.forEach((number) => {
    totalSum = totalSum + Math.pow(number, 2);
  })
  return totalSum;
}

//expect to be 50
console.log(squareSum([0, 3, 4, 5]));
//expect to to be 5
console.log(squareSum([1, 2]));