const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


function decode(expr) {
    let binarLetter = [];
    let morseLetter = [];
    let actualLetter = [];
    for (let i = 0; i < expr.length; i) {
        let mySubstring = expr.substring(i, i += 10);
        if (mySubstring === '**********') {
            binarLetter.push(12);
        } else {
            binarLetter.push(parseInt(mySubstring));
        }
    }
    for (let i of binarLetter) {
        i = i.toString();
        let morseSymbol = [];
        for (let s = 0; s < i.length; s) {
            let newI = i.substring(s, s += 2);
            if (newI === '10') {
                morseSymbol.push('.');
            } else if (newI === '11') {
                morseSymbol.push('-');
            } else {
                morseSymbol.push(' ');
            }
        }
        morseLetter.push(morseSymbol.join(''));
    }
    for (let i of morseLetter) {
        if (i === ' ') {
            actualLetter.push(i);
        } else {
            actualLetter.push(MORSE_TABLE[i]);
        }
    }
    return actualLetter.join('');
}

module.exports = {
    decode
}