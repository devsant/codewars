function sakuraFall(v) {
  return v <= 0 ? 0 : 400 / v;
}


console.log(sakuraFall(5));
console.log(sakuraFall(10));
console.log(sakuraFall(-1));