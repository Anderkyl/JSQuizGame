let count = 0;
let numRight = 0;
let numQuestions;
let correct;


let doTheGame = function(){
    btn0.onclick = function(){checkCorrect(this)};
    btn1.onclick = function(){checkCorrect(this)};
    btn2.onclick = function(){checkCorrect(this)};
    btn3.onclick = function(){checkCorrect(this)};


    if(count===0){

        createQuestion("What color is the sky?", "Color is an illusion", "White", "Purple", "Blue", "Blue");
    }else if(count===1){
        createQuestion("What is 'one' in japanese?","Ichi","Ni","San","Yon","Ichi");
    }else if(count===2){
        createQuestion("Who drives the struggle bus?","Me","you","Mr. Law","Most definitely me.","Most definitely me.");
    }else {
            let question = document.getElementById("question");
            question.innerText = "You got" + numRight + " correct out of " + numQuestions;
            document.getElementById("BUTTON").innerHTML = " ";
        }

    document.getElementById("progress").innerText = "Question " + (count + 1) + " of " + numQuestions;


};


let createQuestion = function(questionText, choice1, choice2, choice3, choice4, correctChoice) {

    placeQuestion = document.getElementById("question");
    placeQuestion.innerText = questionText;

    option1= document.getElementById("choice0");
    option1.innerText = choice1;

    button = document.getElementById("btn0");

    btn0 = document.getElementById("choice0");
    btn0.innerText = choice1;

    btn1 = document.getElementById("choice1");
    btn1.innerText = choice2;

    btn2 = document.getElementById("choice2");
    btn2.innerText = choice3;

    btn3 = document.getElementById("choice3");
    btn3.innerText = choice4;

    correct=correctChoice;

};

let checkCorrect = function(button){
    if(button.innerText===correct){
        numRight++
        count++;
    }else {
        count++;

    }
    doTheGame();
};
