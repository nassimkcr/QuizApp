let questions = document.getElementsByClassName('question');
let i=1;
function nextQuestion () {
    
    if(i < 4){
        questions[i-1].classList.remove('active-question');
        questions[i].classList.add('active-question');
        i= i+1;

    }
   
}

function previousQuestion(){
    if(i < 4 ){
        questions[i-1].classList.remove('active-question');
        questions[i-2].classList.add('active-question');
        answers.pop();
        if(indexOfQuestion > 1){
            indexOfQuestion = indexOfQuestion -1;
        }
       if(i > 1){
           i = i -1;
       }

    }

}

let answers = [];
let score = 0;


function checkAnswer (qstIndex) {

    let questionString = `question${qstIndex}`;

   
    let choices = document.getElementsByName(questionString);

    console.log(answers)
        for(let i=0; i<4; i++){
            if(choices[i].checked){
                    if(choices[i].value ==='true'){
                            answers.push(1)}
                    else{
                        answers.push(0);
                    }        
            }

         }
}



function isItChecked(qstIndex){
    let b = 0;

    let i = 0;
    let questionString = `question${qstIndex}`;

   
    let choices = document.getElementsByName(questionString);

    while(i<4 && b===0){
        if(choices[i].checked){
            b = 1;
        }
        else{
            b = 0;
        }

        i = i +1;

    }

    return b ;

}


function getScore(){

    let scoreTab = document.getElementsByClassName('score')[0];
    scoreTab.classList.remove('hide');

    for(let answer of answers){
        console.log(answer)
        if(answer === 1){
            score = score + 1;
        }
        
    }

    

    console.log('myscore',score)

    if(score === 3){
        scoreTab.style.backgroundColor = "green";
    }
    if(score === 2){

        scoreTab.style.backgroundColor = 'orange';
        
    }

    if(score === 1){
        scoreTab.style.backgroundColor = '#CC6666';

    }

    if(score === 0){
        scoreTab.style.backgroundColor = 'red';

    }

    document.getElementById('score-id').innerText = Math.floor((score/3)*100)+ '%';


}



    
let buttons = document.getElementsByClassName('btn');


let indexOfQuestion = 1;


for(let button of buttons){
    button.addEventListener('click', function(){

        isItChecked(indexOfQuestion);

        if(isItChecked(indexOfQuestion)===1){
            document.getElementById('err').classList.add('hide');

            if(indexOfQuestion < 3){
                checkAnswer(indexOfQuestion);
                nextQuestion();
            }

            if (indexOfQuestion === 3){
                checkAnswer(indexOfQuestion);
                document.getElementById('next').classList.add('hide')
                questions[2].classList.remove('active-question')
                getScore();

            }
            
            indexOfQuestion = indexOfQuestion + 1;

        }

        else{
            document.getElementById('err').classList.remove('hide');
            indexOfQuestion = indexOfQuestion;

            
        }
            

 });


}


let backBtn = document.getElementsByClassName("backBtn");

for(let back of backBtn){
    back.addEventListener('click', function(){
         previousQuestion();
        document.getElementById('err').classList.add('hide');

})
} 
