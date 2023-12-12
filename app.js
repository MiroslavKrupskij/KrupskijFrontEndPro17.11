function pow(a, b) {

  if (b === 0) {
      return 1;
  } 
  return a * pow(a, b - 1);
}

const c = parseFloat(prompt("Введіть число:"));
const d = parseInt(prompt("Введіть ступінь:"));

const result = pow(c, d);
console.log(`${c} в ступені ${d} дорівнює ${result}`);