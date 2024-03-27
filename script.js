const badWords = ['пiдманула', 'пiдвела'];
const daysOfWeek = ['понедiлок', 'вiвторок', 'середу', 'четвер', 'п’ятницю', 'суботу', 'недiлю'];

function isBadWordOrDay(word) {
    return badWords.includes(word) || daysOfWeek.includes(word.toLowerCase());
}

function replaceBadWordOrDay(word) {
    return '*'.repeat(word.length);
}

function processLine(line) {

    const words = line.split(/[\s,.-]+/);

    const replacedWords = words.map(word => {
        if (isBadWordOrDay(word)) {
            return replaceBadWordOrDay(word);
        } else {
            return word;
        }
    });

    const processedLine = replacedWords.join(' ');

    return processedLine;
}

const originalText = `Ти казала в понедiлок – пiдем разом по барвiнок.
Я прийшов, тебе нема, пiдманула, пiдвела.
Ти ж мене пiдманула, ти ж мене пiдвела.
Ти ж мене, молодого, з ума розуму звела.
Я казала у вiвторок – поцiлую разiв сорок.
Ти прийшов, мене нема, пiдманула, пiдвела.
Я ж тебе пiдманула, я ж тебе пiдвела.
Я ж тебе, молодого, з ума розуму звела.
Ти казала у середу – пiдем разом по череду.
Я прийшов, тебе нема, пiдманула, пiдвела.
Ти ж мене пiдманула, ти ж мене пiдвела.
Ти ж мене, молодого, з ума розуму звела.
Я казала у четвер – пiдем разом на концерт.
Ти прийшов, мене нема, пiдманула, пiдвела.
Ти ж мене пiдманула, ти ж мене пiдвела.
Ти ж мене, молодого, з ума розуму звела.
Ти казала у п’ятницю – пiдем разом по пшеницю.
Я прийшов, тебе нема, пiдманула, пiдвела.
Я ж тебе пiдманула, ти ж мене пiдвела.
Ти ж його, молодого, з ума розуму звела.
Я казала у суботу – пiдем разом на роботу.
Я прийшов, тебе нема, пiдманула, пiдвела.
Я ж тебе пiдманула, ти ж мене пiдвела.
Ти ж його, молодого, з ума розуму звела.
Я казала у недiлю – пiдем разом на весiлля.
Я прийшов, тебе нема, пiдманула, пiдвела.
Ти ж мене пiдманула, ти ж мене пiдвела.
Ти ж мене, молодого, з ума розуму звела.`;

const lines = originalText.trim().split('\n');

const processedText = lines.map(processLine).join('\n');

console.log(processedText);