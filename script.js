
let doTheGame = function(){

    createQuestion("What color is the sky?", "Blue", "White", "Purple", "Color is an illusion");
    return createQuestion;


}







let createQuestion = function(questionText, choice1, choice2, choice3, choice4, correctChoice){



    let btn0 = document.getElementById("choice1");
    btn0.innerText = choice1;

    let btn1 = document.getElementById("btn1");
    btn1.innerText = choice2;

    let btn2 = document.getElementById("btn2");
    btn2.innerText = choice3;

    let btn3 = document.getElementById("btn3");
    btn3.innerText = choice4;




};
