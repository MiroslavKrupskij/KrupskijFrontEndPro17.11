// 1
for (let a = 20; a <= 30; a += 0.5) {
    console.log(a);
}

// 2
const d = 27;
for (let k = 10; k <= 100; k += 10) {
    console.log(`${k}$ = ${k * d}₴`)
}

// 3
const number = 3782;
for (let a = 1; a <= 100; a++) {
    if(a * a <= number) {
        console.log(a)
    }
}

// 4 
function is_prime(number2) {
    if (number2 <= 1) {
        return false; 
    }
    for (let d = 2; d <= Math.sqrt(number2); d++) {
        if (number2 % d === 0) {
            return false; 
        }
    }
    return true; 
}
const input_number = prompt(`Введіть число: `)

if (is_prime(input_number)) {
    console.log(`${input_number}  є простим числом.`);
} else {
    console.log(`${input_number} не є простим числом.`);
} 

// 5
function is_log3(num) {
    if (num <= 0) {
        return false; 
    }
    while (num !== 1) {
        if (num % 3 !== 0) {
            return false; 
        }
        num /= 3;
    }
    return true; 
}
const num = prompt(`Введіть число:`); 
if (is_log3(num)) {
    console.log(`${num} можна отримати зведенням числа 3 у деякий ступінь.`);
} else {
    console.log(`${num} не можна отримати зведенням числа 3 у деякий ступінь.`);
}