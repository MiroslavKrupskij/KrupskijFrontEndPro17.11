class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    displayInfo() {
      console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
    }
  }
  
  class Car {
    constructor(brand, model, year, licensePlate, owner) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.licensePlate = licensePlate;
      
      if (owner instanceof Person && owner.age >= 18) {
        this.owner = owner;
      } else {
        console.log('Власник повинен бути особою старше 18 років.');
      }
    }
  
    displayInfo() {
      console.log(`Автомобіль: ${this.brand} ${this.model}, Рік: ${this.year}, Номерний машини: ${this.licensePlate}`);
      if (this.owner) {
        console.log('Власник:');
        this.owner.displayInfo();
      }
    }
  }

  const person1 = new Person('Іван', 25);
  const person2 = new Person('Марія', 30);

  const car1 = new Car('Toyota', 'Camry', 2022, 'BH1234A', person1);
  const car2 = new Car('Honda', 'Civic', 2019, 'BH5678V', person2);

  car1.displayInfo();
  car2.displayInfo();