const operation = prompt("Виберіть операцію (add, sub, mult, div):");

var перше_число = prompt("Введіть перше число:");

var друге_число = prompt("Введіть друге число:");

перше_число = parseFloat(перше_число);

друге_число = parseFloat(друге_число);

switch (operation) {
       case "add":
         result = перше_число + друге_число;
         alert(`${перше_число} + ${друге_число} = ${result}`);
         break;
       case "sub":
         result = перше_число - друге_число;
         alert(`${перше_число} - ${друге_число} = ${result}`);
         break;
       case "mult":
         result = перше_число * друге_число;
         alert(`${перше_число} * ${друге_число} = ${result}`);
         break;
       case "div":
         result = перше_число / друге_число;
         alert(`${перше_число} / ${друге_число} = ${result}`);
         break;
}  

console.log()