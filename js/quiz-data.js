const quizData = [
    { // ID = 0
        "code": 
`let arr = [5, 10, 15, 20, 25];
let result = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 == 0) {
        result += arr[i];
    } else {
        result -= arr[i];
    }
}

console.log(result);`,

        "opt1": -10,
        "opt2": 5,
        "opt3": -15,
        "opt4": 20,
        
        "answer": -15
    },
    { // ID = 1
        "code": 
`function reverseString(str) {
    let reversed = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    
    return reversed;
}
    
const text = "Hello, world!";
const result = reverseString(text);

console.log(result);`,

        "opt1": "Hello!",
        "opt2": "!olleH",
        "opt3": "Hlo!le",
        "opt4": "o!Hell",

        "answer": "!olleH"
    },
    { // ID = 2
        "code": 
`function recursiveSum(n) {
    if (n <= 0) {
        return 0;
    } else {
        return n + recursiveSum(n - 2);
    }
}

let result = recursiveSum(10);

console.log(result);`,

        "opt1": 55,
        "opt2": 35,
        "opt3": 60,
        "opt4": 30,

        "answer": 30
    },
    {
        "code": 
`function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

const text = "The quick brown fox jumped over the lazy dog";
const result = findLongestWord(text);
console.log(result);`,

        "opt1": "quick",
        "opt2": "fox",
        "opt3": "brown",
        "opt4": "jumped",

        "answer": "jumped"
    }
];