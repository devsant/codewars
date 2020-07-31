function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}


// expect to return Word
console.log(capitalizeWord('word'));
// expecto to return I
console.log(capitalizeWord('i'));
// expecto to return Glasswear
console.log(capitalizeWord('glasswear'));