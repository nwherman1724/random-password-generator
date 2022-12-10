const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNum,
    symbol: getRandomSymbol
}

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}]
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNum() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*()[]{}=<>,."
    return symbols[Math.floor(Math.random() * symbols.length)]
}




//Credit Brad Traversy 50 Project in 50 days - Password Generator