  function high(x) {
    const alphabetic = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const wordToNumber = x.trim().split(' ').map((words) => {
      const arrNumber = Array.from(words)
        .map(x => alphabetic.indexOf(x) + 1)
        .reduce((arrNumber, words) => {
          return arrNumber += words;
        });

      return arrNumber;
    });

    const maxScoreIndex = wordToNumber.indexOf(Math.max(...wordToNumber));

    return x.split(' ')[maxScoreIndex];
  }


  // taxi
  console.log(high('man i need a taxi up to ubud'));
  // volcano
  console.log(high('what time are we climbing up the volcano'));
  // semynak
  console.log(high('take me to semynak'));