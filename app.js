// 1
for (let x = 10; x <= 20; x++) {
    console.log(x, )
}

// 2
for (let i = 10; i <= 20; i++) {
    console.log(i * i);
}

// 3
for (var k = 1; k <= 10; k++) {
   console.log(`7 * ${k} = ${7 * k},`);
}

// 4
var sum = 0;
for (var a = 1; a <= 15; a++) {
    sum += a;
}
console.log(`Sum: ${sum}`)

// 5

let p = 1;

for (let i = 15; i <= 35; i++) {
    p *= i;
}

console.log("Добуток усіх цілих чисел від 15 до 35: " + p);

// 6

let sum2 = 0;
let count = 0;

for (let a = 1; a <= 500; a++) {
    sum2 += a;
    count++;
}
const result = sum2 / count;

console.log("Середнє арифметичне від 1 до 500: " + result)

// 7 

let sum3 = 0;

for (let a = 30; a <= 80; a++) {
    if (a % 2 === 0) {
        sum3 += a;
    }
}

console.log("Сума лише парних чисел від 30 до 80: " + sum3)

// 8 
 for(let a = 100; a <= 200; a++) {
    if(a % 3 === 0) {
        console.log(a)
    }
 }

// 9, 10, 11

const number = 134; 
let count2 = 0;
let sum_count2 = 0;

console.log(`Дільники числа ${number}:`);
for (let d = 1; d <= number; d++) {
    if (number % d === 0) {
        console.log(d);
        if (d % 2 === 0) {
            count2++;
            sum_count2 += d;
        }
    }
}
console.log(`Кількість парних дільників: ${count2}`);
console.log(`Сума парних дільників: ${sum_count2}`);


for (let d = 1; d <= number; d++) {
    if (number % d === 0) {
        
    }
}

// 12

for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++) {
        console.log(`${a} * ${b} = ${(a * b)}`);
    }
}

