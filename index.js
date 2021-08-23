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

// Not generalized version (can pass the test)
// See below for generalized version of this function
const titleCased = () => {
  return tutorials.map(function (element){
    const words = element.split(" ");
    console.log(words);
    return words.map(function(word){
      return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
  })
}

//console.log(titleCased())
//LOG:[
//      'What Does The This Keyword Mean?',
//      'What Is The Constructor OO Pattern?',
//      'Implementing Blockchain Web API',
//      'The Test Driven Development Workflow',
//      'What Is NaN And How Can We Check For It',
//      'What Is The Difference Between StopPropagation And PreventDefault?',
//      'Immutable State And Pure Functions',
//      'What Is The Difference Between == And ===?',
//      'What Is The Difference Between Event Capturing And Bubbling?',
//      'What Is JSONP?'
//    ]


// Generalized (Abstracted) version (can't pass the test)
//    can take other arrays with similar structure
function capitalizeElementInArray(array){
  return array.map((element) => {
      const wordsArray= element.split(" ");
      return wordsArray.map((word) => {
          return word[0].toUpperCase() + word.substring(1);
      }).join(" ")
  })
}

// console.log(capitalizeElementInArray(tutorials))
//LOG:[
//      'What Does The This Keyword Mean?',
//      'What Is The Constructor OO Pattern?',
//      'Implementing Blockchain Web API',
//      'The Test Driven Development Workflow',
//      'What Is NaN And How Can We Check For It',
//      'What Is The Difference Between StopPropagation And PreventDefault?',
//      'Immutable State And Pure Functions',
//      'What Is The Difference Between == And ===?',
//      'What Is The Difference Between Event Capturing And Bubbling?',
//      'What Is JSONP?'
//    ]



[ 'what', 'does', 'the', 'this', 'keyword', 'mean?' ]
[ 'What', 'is', 'the', 'Constructor', 'OO', 'pattern?' ]
[ 'implementing', 'Blockchain', 'Web', 'API' ]
[ 'The', 'Test', 'Driven', 'Development', 'Workflow' ]
[ 'What', 'is', 'NaN',  'and', 'how',  'Can', 'we', 'Check', 'for', 'it' ]
[ 'What', 'is', 'the', 'difference', 'between', 'stopPropagation', 'and', 'preventDefault?' ]
[ 'Immutable', 'State', 'and', 'Pure', 'Functions' ]
[ 'what', 'is', 'the', 'difference', 'between', '==', 'and', '===?' ]
[ 'what', 'is', 'the', 'difference', 'between', 'event', 'capturing', 'and', 'bubbling?' ]
[ 'what', 'is', 'JSONP?' ]

