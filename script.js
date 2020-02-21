let count = 0;
// let numRight = 0;
// let correctOne;
// let numQuestions



let doTheGame = function(){

    if(count===0){

        createQuestion("What color is the sky?", "Color is an illusion", "White", "Purple", "Blue", "Blue");
    }else if(count===1){
        createQuestion("What is 'one' in japanese?","Ichi","Ni","San","Yon","Ichi");
    }

};


let createQuestion = function(questionText, choice1, choice2, choice3, choice4, correctChoice) {

    placeQuestion = document.getElementById("question");
    placeQuestion.innerText = questionText;

    option1= document.getElementById("choice0");
    option1.innerText = choice1;

    button = document.getElementById("btn0");
    button.onclick = increaseCount();


    btn1 = document.getElementById("choice1");
    btn1.innerText = choice2;

    btn2 = document.getElementById("choice2");
    btn2.innerText = choice3;

    btn3 = document.getElementById("choice3");
    btn3.innerText = choice4;

};

let increaseCount = function(){

        count++;
        doTheGame();


};