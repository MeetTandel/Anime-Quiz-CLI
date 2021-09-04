let readlineSync = require("readline-sync")
const chalk = require('chalk');

let score = 0
let highScores = [{
    name: "Tanjiro",
    score: 5    
},
{
    name: "Eren", 
    score: 4
}];

(function welcome(){
    let userName = readlineSync.question("What's your name? ")
    console.log(chalk.yellow("Welcome " + userName + " Do you know Meet?"))
})()

let questions= [
   {
        question: "Which is my favorite Anime? ",
        answer: "Attack on Titans"
    },
    {
        question: "Anime of the year in 2020? ",
        answer: "Jujutsu Kaisen"
    },
    {
        question: "What is my favorite food? ",
        answer: "One Piece"
    },
    {
        question: "2019 anime of the year? ",
        answer: "Devilman Crybaby"
    },
    {
        question: "Which is your favorite character? ",
        answer: "Gon"
    },
]

function play(question, answer){
    var userAnswer = readlineSync.question(question)

    if(userAnswer.toLowerCase() == answer.toLowerCase()){
        console.log(chalk.green("right"))
        score++
    }
    else{
        console.log(chalk.red("wrong"))
    }

    console.log(chalk.blue("current score: ", score))
    console.log(chalk.white("----------------------"))
}

(function game(){
    console.log("Let's know your anime knowledge?----")
    questions.forEach(question =>{
        play(question.question, question.answer)
    })
})()

function showScore(){
    switch(score){
         case 0:
            console.log("🤭")
            break;
        case 1:
            console.log("🙁")
            break;
        case 2:
            console.log("🙂")
            break;
        case 3:
            console.log("😎")
            break;
    }

    console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

showScore()


