let birthYear = prompt("Введіть рік народження:");
let city = prompt("Введіть місто, де ви живете:");
let favSport = prompt("Введіть свій улюблений вид спорту:");

if (birthYear && city && favSport) {
    let age = 2023 - birthYear;

    let message = "Ваш вік: " + age + " років.\n";

    if (birthYear === null) {
        message = "Шкода, що ви не захотіли вводити свій вік :(\n"
    }
    

    if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {

        let country = '';
        switch (city) {
            case "Київ":
                country = "Україна";
                break;
            case "Вашингтон":
                country = "США";
                break;
            case "Лондон":
                country = "Велика Британія";
                break;
        }
        message += "Ти живеш у столиці " + country + "\n";
    } else if (city === null) {
        message += "Шкода, що ви не захотіли вводити своє місто :( \n"
    } else {
        message += "Ти живеш у місті " + city + "\n";
    }

    if(favSport === "футбол" || favSport === "баскетбол" || favSport === "бокс") {
        
        let champion = '';
        switch(favSport) {
            case "футбол":
                champion = "Ліонель Мессі";
                break;
            case "баскетбол":
                champion = "Майкл Джордан";
                break;
            case "бокс":
                champion = "Майк Тайсон";
                    break;
        }
        message += "Круто, хочеш стати як " + champion + "?\n"
    } else if (favSport === null) {
        message += "Шкода, що ви не захотіли вводити свій улюблений спорт :(\n"
    }
    alert(message);
}






/* let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true) {
    case (numOrStr === null):
        console.log('ви скасували');
        break;
    case (numOrStr.trim() === ''):
        console.log('Empty String');
        break;
    case (isNaN(+numOrStr)):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
} */