//Capitalize Each Word In String 
const mySentence = "freeCodeCamp is an awesome resource"

function capitalize (string){
  const stringTurnedArray = string.split(" ");
  return stringTurnedArray.map((element) => { 
    return element[0].toUpperCase() + element.substring(1); 
}).join(" ")
}

console.log(capitalize(mySentence))

//Capitalize Each Element (Which Are String) In An Array
const tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
];

/*
function capitalizeElementInArray(array){
    const elTurnedArray = array.map((element) => {
        element.split(" ")});
    return elTurnedArray.map((element) => {
        return element[0].toUpperCase() + element.substring(1)
    }).join(" ")
}
*/ 

function capitalizeElementInArray(array){
    return array.map((element) => {
        const wordsArray= element.split(" ");
        return wordsArray.map((word) => {
            return word[0].toUpperCase() + word.substring(1);
        }).join(" ")
    })
}

console.log(capitalizeElementInArray(tutorials));
