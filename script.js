
let doTheGame = function(){

    createQuestion("What color is the sky?", "Color is an illusion", "White", "Purple", "Blue", "Blue");
    btn0.onclick = createQuestion2;
    //createQuestion2("How much wood does a woodchuck Chuck?", "No wood", "What's a woodchuck?", "As much as a woodchuck could chuck wood","Yeah, what he said.","As Much as a woodchuck could chuck wood.");


};


let createQuestion = function(questionText, choice1, choice2, choice3, choice4, correctChoice) {

    placeQuestion = document.getElementById("question");
    placeQuestion.innerText = questionText;

    btn0 = document.getElementById("choice0");
    btn0.innerText = choice1;
   // btn0.onclick = function(){createQuestion(this)};

    btn1 = document.getElementById("choice1");
    btn1.innerText = choice2;

    btn2 = document.getElementById("choice2");
    btn2.innerText = choice3;

    btn3 = document.getElementById("choice3");
    btn3.innerText = choice4;

};
let createQuestion2 = function(questionText, choice1, choice2, choice3, choice4, correctChoice) {
    createQuestion2("How much wood does a woodchuck Chuck?", "No wood", "What's a woodchuck?", "As much as a woodchuck could chuck wood","Yeah, what he said.","As Much as a woodchuck could chuck wood.");

    let placeQuestion = document.getElementById("question");
    placeQuestion.innerText = questionText;

    let btn0 = document.getElementById("choice0");
    btn0.innerText = choice1;

    let btn1 = document.getElementById("choice1");
    btn1.innerText = choice2;

    let btn2 = document.getElementById("choice2");
    btn2.innerText = choice3;

    let btn3 = document.getElementById("choice3");
    btn3.innerText = choice4;

};

let checkAnswer = function(correctChoice){
    if(correctChoice.id === "correct"){
        createQuestion()
    }
}