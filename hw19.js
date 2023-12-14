function creationOfSum() {
    let sum = 0;

    function addNumber(number) {
        sum += number;
        return sum;
    }

    return addNumber;
}

const sum = creationOfSum();

console.log(sum(3)); 
console.log(sum(5));  
console.log(sum(20));