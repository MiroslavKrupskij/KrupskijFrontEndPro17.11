class SuperMath {
    constructor() {}
  
    input() {
      return prompt("Введіть номер:");
    }
  
    validateZnak(znak) {
      const allowedOperators = ["+", "-", "*", "/", "%"];
      return allowedOperators.includes(znak);
    }
  
    performOperation(x, y, znak) {
      switch (znak) {
        case "+":
          return x + y;
        case "-":
          return x - y;
        case "*":
          return x * y;
        case "/":
          return x / y;
        case "%":
          return x % y;
        default:
          return "Неправильний оператор.";
      }
    }
  
    check(obj) {
      const { X, Y, znak } = obj;
  
      if (!this.validateZnak(znak)) {
        console.log("Неправильний оператор, введіть коректний (+, -, *, /, %).");
        this.input();
      } else {
        const confirmed = confirm(`Виконати операцію: ${X} ${znak} ${Y}?`);
        if (confirmed) {
          const result = this.performOperation(X, Y, znak);
          console.log(`Результат: ${result}`);
        } else {
          this.input();
        }
      }
    }
  }
  
  const obj = { X: 12, Y: 3, znak: "/" };
  const p = new SuperMath();
  p.check(obj);