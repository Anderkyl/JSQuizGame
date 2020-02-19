
let doTheGame = function(){

    createQuestion("What color is the sky?", "Blue", "White", "Purple", "Color is an illusion");
    createQuestion("How much wood does a woodchuck Chuck?", "No wood", "What's a woodchuck?", "As much as a woodchuck could chuck wood","Yeah, what he said.");


};


let createQuestion = function(questionText, choice1, choice2, choice3, choice4, correctChoice) {

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