const question = document.querySelector("#questions");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");
const timer = document.querySelector("#timerstatus")
const questions = [question1, question2, question3, question4, question5, questions6]

const question1 = {
    title : "What is a coding language used to alter HTML in live time based off of user input?",
    options : ["Italian", "Javascript", "Spanish", "Japanese"],
    answer : "Javascript"
}
const question2 = {
    title : "Which of the following is a Data type used in Javascript?",
    options : ["Arrays", "Bubbles", "Containers", "Body"],
    answer : "Arrays"
};
const question3 = {
    title : "Which of the following is used when listing an Array?",
    options : ["{}", "()", "<>", "[]"],
    answer : "[]"
};
const question4 = {
    title : "Which of the following is used to define a string?",
    options : ["{}", "[]", "\"\"", "()"],
    answer : "\"\""
};
const question5 = {
    title : "What are arrays used for in Javascript?",
    options : ["To store multpile values in a single variable.", "To pass a single number into a variable.", "To pass a single function into a variable.", "To overpass a Boolean."],
    answer : "To store multpile values in a single variable."
};
const question6 = {
    title : "What is a type of function used in Javascript?",
    options : ["Probable", "Arrow", "Powerful", "Alternate"],
    answer : "Arrow"
};

let totalSeconds = 0;
let secondsElapsed = 0;
