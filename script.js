// var titles = ['Back To December', 'Better Than Revenge', 'Castles Crumbling', 'Dear John', 'Electric Touch', 'Enchanted', 'Foolish One', 
//               'Haunted', 'I Can See You', 'Innocent', 'Last Kiss', 'Long Live', 'Mean', 'Mine', 'Never Grow Up', 'Ours', 'Sparks Fly', 'Speak Now', 
//               'Superman', 'The Story Of Us', 'Timeless', 'When Emma Falls in Love'];


// var audios = ['tracks/Back To December.mp3', 'tracks/Better Than Revenge.mp3', 'tracks/Castles Crumbling.mp3', 'tracks/Dear John.mp3', 
//                 'tracks/Electric Touch.mp3', 'tracks/Enchanted.mp3', 'tracks/Foolish One.mp3', 'tracks/Haunted.mp3', 'tracks/I Can See You.mp3', 
//                 'tracks/Innocent.mp3', 'tracks/Last Kiss.mp3', 'tracks/Long Live.mp3', 'tracks/Mean.mp3', 'tracks/Mine.mp3', 'tracks/Never Grow Up.mp3',
//                 'tracks/Ours.mp3', 'tracks/Sparks Fly.mp3', 'tracks/Speak Now.mp3', 'tracks/Superman.mp3', 'tracks/The Story Of Us.mp3', 'tracks/Timeless.mp3',
//                 'tracks/When Emma Falls in Love.mp3'];

var titles = ['Cruel Summer', 'Fearless', 'Lover', 'The Archer', 'Miss Americana & the Heartbreak Prince', 'The Man', 'You Need to Calm Down',
                'Willow', 'Tis The Damn Season', 'Love Story', 'You Belong With Me', 'Dont Blame Me', 'Delicate', 'Ready For It', 'Tolerate It', 
                'Champagne Problems', 'Majorie', 'Enchanted', 'Betty', 'The 1', 'All Too Well', 'I Knew You Were Trouble', 'We Are Never Getting Back Together',
            '22', 'Look What You Made Me Do'];

var audios = ["./tracklist/Cruel Summer.mp3", "./tracklist/Fearless.mp3", "./tracklist/Lover.mp3", "./tracklist/The Archer.mp3", 
"./tracklist/The Hearbreak Prince.mp3" , "./tracklist/The Man.mp3", "./tracklist/You Need To Calm Down.mp3", "./tracklist/Willow.mp3",
"./tracklist/Tis The Damn Season.mp3", "./tracklist/Love Story", "./tracklist/You Belong With Me.mp3", "./tracklist/Dont Blame Me.mp3",
"./tracklist/Delicate.mp3", "./tracklist/Ready For It.mp3", "./tracklist/Tolerate It.mp3", "./tracklist/Champagne Problems.mp3", 
"./tracklist/Majorie.mp3", "./tracks/Enchanted.mp3", "./tracklist/Betty.mp3", "./tracklist/The 1.mp3", "./tracklist/All Too Well.mp3", 
"./tracklist/I Knew You Were Trouble.mp3", "./tracklist/We Are Never Getting Back Together.mp3", "./tracklist/22.mp3", 
"./tracklist/Look What You Made Me Do.mp3"];

// var questions = [
//     {
//         question: 'btd',
//         correctAnswer: 'back to december'
//     },
//     {
//         question: 'btr',
//         correctAnswer: 'better than revenge'
//     },
//     {
//         question: 'cc',
//         correctAnswer: 'castles crumbling'
//     },
//     {
//         question: 'dj',
//         correctAnswer: 'dear john'
//     },
//     {
//         question: 'et',
//         correctAnswer: 'electric touch'
//     },
//     {
//         question: 'e',
//         correctAnswer: 'enchanted'
//     },
//     {
//         question: 'fo',
//         correctAnswer: 'foolish one'
//     },
//     {
//         question: 'h',
//         correctAnswer: 'haunted'
//     },
//     {
//         question: 'icsy', 
//         correctAnswer: 'i can see you'
//     },
//     {
//         question: 'i',
//         correctAnswer: 'innocent'
//     },
//     {
//         question: 'lk',
//         correctAnswer: 'last kiss'
//     },
//     {
//         question: 'll',
//         correctAnswer: 'long live'
//     },
//     {
//         question: 'mean', 
//         correctAnswer: 'mean'
//     },
//     {
//         question: 'mine',
//         correctAnswer: 'mine'
//     },
//     {
//         question: 'ngu',
//         correctAnswer: 'never grow up'
//     },
//     {
//         question: 'o',
//         correctAnswer: 'ours'
//     },
//     {
//         question: 'sf', 
//         correctAnswer: 'sparks fly'
//     },
//     {
//         question: 'sn',
//         correctAnswer: 'speak now'
//     },
//     {
//         question: 's',
//         correctAnswer: 'superman'
//     },
//     {
//         question: 'tsou',
//         correctAnswer: 'the story of us'
//     },
//     {
//         question: 't',
//         correctAnswer: 'timeless'
//     },
//     {
//         question: 'wefil',
//         correctAnswer: 'when emma falls in love'
//     }
// ];

// var questions = [
//     {
//         question: 'Back To December',
//         correctAnswer: 'back to december',
//         audio: new Audio('tracks/Back To December.mp3')
//     },
//     {
//         question: 'Better Than Revenge',
//         correctAnswer: 'better than revenge',
//         audio: new Audio('tracks/Better Than Revenge.mp3')
//     },
//     // ... add other questions with audio elements
// ];

var questions = [
    {
        question: 'cs',
        correctAnswer: 'cruel summer'
    },
    {
        question: 'f',
        correctAnswer: 'fearless'
    },
    {
        question: 'l',
        correctAnswer: 'lover'
    },
    {
        question: 'ta',
        correctAnswer: 'the archer'
    },
    {
        question: 'thp',
        correctAnswer: 'miss americana and the heartbreak prince'
    },
    {
        question: 'tm',
        correctAnswer: 'the man'
    },
    {
        question: 'yntcd',
        correctAnswer: 'you need to calm down'
    },
    {
        question: 'w',
        correctAnswer: 'willow'
    },
    {
        question: 'ttds',
        correctAnswer: 'tis the damn season'
    },
    {
        question: 'ls',
        correctAnswer: 'love story'
    },
    {
        question: 'ybwm',
        correctAnswer: 'you belong with me'
    },
    {
        question: 'dbm',
        correctAnswer: 'dont blame me'
    },
    {
        question: 'd',
        correctAnswer: 'delicate'
    },
    {
        question: 'rfi',
        correctAnswer: 'ready for it'
    },
    {
        question: 'ti',
        correctAnswer: 'tolerate it'
    },
    {
        question: 'cp',
        correctAnswer: 'champagne problems'
    },
    {
        question: 'm',
        correctAnswer: 'majorie'
    },
    {
        question: 'e',
        correctAnswer: 'enchanted'
    },
    {
        question: 'b',
        correctAnswer: 'betty'
    },
    {
        question: 't1',
        correctAnswer: 'the 1'
    },
    {
        question: 'atw',
        correctAnswer: 'all too well'
    },
    {
        question: 'ikywt',
        correctAnswer: 'i knew you were trouble'
    },
    {
        question: 'wangbt',
        correctAnswer: 'we are never ever getting back together'
    },
    {
        question: '22',
        correctAnswer: '22'
    },
    {
        question: 'lwymmd',
        correctAnswer: 'look what you made me do'
    }

];

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const photo = document.getElementsByClassName("TS");
const scoreValueElement = document.getElementById("scoreValue");
const submitButton = document.getElementById("submit-btn");
const answerField = document.getElementById("answerField");
// const songContainerElement = document.getElementById("song-container");
// const choicesContainer = document.getElementById("choices");
// const line = document.getElementById("line");

let selectedChoices = [];

var sad = [
    "sad/sad0",
    "sad/sad1",
    "sad/sad2",
    "sad/sad3",
    "sad/sad4",
];

var happy = [
    "happy/happy0",
    "happy/happy1",
    "happy/happy2",
    "happy/happy3",
    "happy/happy4",
    "happy/happy5",
    "happy/happy6",
];

var score = 0;

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});
submitButton.addEventListener("click", submitAnswer);

function getRandomNumber(minimum, maximum) {
    minimum = Math.ceil(minimum);
    maximum = Math.floor(maximum);

    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function startGame() {
    startButton.classList.add("hide");

    // selectedChoices = Array.from(choicesContainer.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);

    // let newQuestions = [];
    // selectedChoices.forEach(element => {
    //     newQuestions = newQuestions.concat([element]);
    // });

    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
}


function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

    answerField.value = "";
    answerField.classList.remove("correct-answer", "wrong-answer");
    submitButton.disabled = false;
}

function showQuestion(question) {

    var audio = document.getElementById(question.question);
    console.log(question)
    console.log(question.question)
    console.log(audio)
    setTimeout(function(){
        audio.play();

        setTimeout(function(){
            audio.pause();
            audio.currentTime = 0;
        }, 2000);
    }, 1000);
}

function resetState() {
    clearStatusClass(document.body);
    document.getElementById(
        "img"
    ).src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemGOaBH1ipIjvagC2qZb5DCfvlSAISV0p2A&usqp=CAU";
    nextButton.classList.add("hide");
}

function submitAnswer(event) {
    event.preventDefault();

    let input = answerField.value.toLowerCase();
    const correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;
    setStatusClass(document.body, input === correctAnswer);

    if (input === correctAnswer) {
        changeImage(happy[getRandomNumber(0, 6)]);
        answerField.classList.add("correct-answer");
        score++;
        scoreValueElement.innerText = score.toString();
    } else {
        alert("stoopid be better");
        answerField.classList.add("wrong-answer");
        answerField.value = correctAnswer;
        changeImage(sad[getRandomNumber(0, 4)]);
    }

    submitButton.disabled = true;

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        const end = score;
        questionElement.innerText = `You got ${end}/${shuffledQuestions.length}`;
        submitButton.classList.add("hide")
        // songContainerElement.classList.remove("hide");
        // line.classList.remove("hide");
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
        startButton.addEventListener("click", () => {
        questionElement.classList.add("hide")
        score = 0;
        scoreValueElement.innerText = score
        });
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

function changeImage(a) {
    document.getElementById("img").src = a + ".jpeg";
}
  
