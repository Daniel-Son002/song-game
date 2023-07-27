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
        question: 'cruel summer',
        correctAnswer: 'cruel summer'
    },
    {
        question: 'fearless',
        correctAnswer: 'fearless'
    },
    {
        question: 'lover',
        correctAnswer: 'lover'
    },
    {
        question: 'the archer',
        correctAnswer: 'the archer'
    },
    {
        question: 'thp',
        correctAnswer: 'miss americana and the heartbreak prince'
    },
    {
        question: 'the man',
        correctAnswer: 'the man'
    },
    {
        question: 'yntcd',
        correctAnswer: 'you need to calm down'
    },
    {
        question: 'willow',
        correctAnswer: 'willow'
    },
    // {
    //     question: 'ttds',
    //     correctAnswer: 'tis the damn season'
    // },
    {
        question: 'love story',
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
        question: 'delicate',
        correctAnswer: 'delicate'
    },
    {
        question: 'rfi',
        correctAnswer: 'ready for it'
    },
    {
        question: 'tolerate it',
        correctAnswer: 'tolerate it'
    },
    {
        question: 'champagne problems',
        correctAnswer: 'champagne problems'
    },
    {
        question: 'marjorie',
        correctAnswer: 'marjorie'
    },
    {
        question: 'enchanted',
        correctAnswer: 'enchanted'
    },
    {
        question: 'betty',
        correctAnswer: 'betty'
    },
    {
        question: 'the 1',
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
    },
    {
        question: 'karma',
        correctAnswer: 'karma'
    },
    {
        question: 'mastermind',
        correctAnswer: 'mastermind'
    },
    {
        question: 'bejeweled',
        correctAnswer: 'bejeweled'
    },
    {
        question: 'vigilante shit',
        correctAnswer: 'vigilante shit'
    },
    {
        question: 'midnight rain',
        correctAnswer: 'midnight rain'
    },
    {
        question: 'antihero',
        correctAnswer: 'anti-hero'
    },
    {
        question: 'lavender haze',
        correctAnswer: 'lavender haze'
    },
    {
        question: 'bad blood',
        correctAnswer: 'bad blood'
    },
    {
        question: 'wildest dreams',
        correctAnswer: 'wildest dreams'
    },
    {
        question: 'sio',
        correctAnswer: 'shake it off'
    },
    {
        question: 'blank space',
        correctAnswer: 'blank space'
    },
    {
        question: 'style',
        correctAnswer: 'style'
    },
    {
        question: 'cardigan',
        correctAnswer: 'cardigan'
    },
    {
        question: 'mtr',
        correctAnswer: 'my tears ricochet'
    },
    {
        question: 'illicit affairs',
        correctAnswer: 'illicit affairs'
    },
    {
        question: 'august',
        correctAnswer: 'august'
    },
    {
        question: 'tlgad',
        correctAnswer: 'the last great american dynasty'
    },
    {
        question: 'nbnc',
        correctAnswer: 'no body, no crime'
    },
    {
        question: 'll',
        correctAnswer: 'long live'
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
const levelContainerElement = document.getElementById("level-container");
const choicesContainer = document.getElementById("choices");
const line = document.getElementById("line");
const choiceRadios = document.querySelectorAll('.choice-radio');
const hearMoreButton = document.getElementById("hear-more-btn");

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
var totalPoints = 0

let shuffledQuestions, currentQuestionIndex;
let audio = null;


startButton.disabled = true;

choiceRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    const anySelected = Array.from(choiceRadios).some(radio => radio.checked);
    startButton.disabled = !anySelected;
  });
});

startButton.addEventListener("click", startGame);
hearMoreButton.addEventListener("click", hearMore);

function hearMore() {
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        hearMoreButton.classList.add("hide");
    }
}

function handleAudioEnded() {
    hearMoreButton.classList.remove("hide");
    audio.removeEventListener("timeupdate", handleTimeUpdate);
    audio = null;
}

function handleTimeUpdate() {
    if (audio && audio.paused) {
        hearMoreButton.classList.remove("hide"); // Show the "Hear More" button when audio is paused
    } else {
        hearMoreButton.classList.add("hide"); // Hide the "Hear More" button when audio is playing
    }
}

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

function defineLevel() {
    var ele = document.getElementsByName('choice');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value === "custom") {
                const customPlayDuration = parseInt(document.getElementById('custom-play-duration').value);
                return ["custom", customPlayDuration];
            } else {
                return [ele[i].value];
            }
        }
    }
}


var obj = {
    "easy": [12000, 1000],
    "medium": [4000, 1000],
    "hard": [1000, 1000],
    "...": [500, 1000]
};


var level, fst, snd = 1000;

function startGame() {
    startButton.classList.add("hide");
    submitButton.classList.remove("hide")
    var selectedLevel = defineLevel();
    if (selectedLevel[0] === "custom") {
        level = selectedLevel;
        fst = level[1];
    } else {
        level = obj[selectedLevel[0]];
        fst = level[0];
    }
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;

    questionContainerElement.classList.remove("hide");
    line.classList.add("hide")
    levelContainerElement.classList.add("hide");

    setNextQuestion();
}

let startTime, maxTime;

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

    answerField.value = "";
    answerField.classList.remove("correct-answer", "wrong-answer");
    submitButton.disabled = false;

    shuffledQuestions[currentQuestionIndex].startTime = new Date().getTime();
}

function showQuestion(question) {
    questionElement.innerText = `Question ${currentQuestionIndex + 1}:`;
    audio = document.getElementById(question.question);
    audio.addEventListener("ended", handleAudioEnded);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    setTimeout(function(){
        audio.play();

        setTimeout(function(){
            audio.pause();
            audio.currentTime = 0;
        }, fst);
    }, snd);
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

    let input = answerField.value.toLowerCase().replace(/\s+/g, '').replace(/[^\w\s]/gi, '');
    const correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;
    const ans = correctAnswer.split(" ");

    const question = shuffledQuestions[currentQuestionIndex];
    const endTime = new Date().getTime();
    const timeTaken = endTime - question.startTime;
    // const basePoints = input === correctAnswer.toLowerCase().replace(/\s+/g, '').replace(/[^\w\s]/gi, '') ? 1000 : 0;

    const formatted_ans = ans.map((word) => { 
            return word[0].toUpperCase() + word.substring(1); 
        }).join(" ");    

    setStatusClass(document.body, input === correctAnswer.toLowerCase().replace(/\s+/g, '').replace(/[^\w\s]/gi, ''));

    if (input === correctAnswer.toLowerCase().replace(/\s+/g, '').replace(/[^\w\s]/gi, '')) {

        const bonusPoints = Math.max(10000 - timeTaken, 0);
        totalPoints += 1000 + bonusPoints;
        document.getElementById("totalPointsValue").innerText = totalPoints.toString();
        
        changeImage(happy[getRandomNumber(0, 6)]);
        answerField.classList.add("correct-answer");
        answerField.value = formatted_ans;
        score++;
        scoreValueElement.innerText = score.toString();
    } else {
        alert("stoopid be better");
        answerField.classList.add("wrong-answer");
        answerField.value = formatted_ans;
        changeImage(sad[getRandomNumber(0, 4)]);
    }

    submitButton.disabled = true;

    if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audio = null;
    }

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        const end = score;
        const tot = totalPoints
        questionElement.innerText = `Final score: ${tot}. \n You got ${end}/${shuffledQuestions.length}`;
        submitButton.classList.add("hide")
        hearMoreButton.classList.add("hide")
        levelContainerElement.classList.remove("hide");
        line.classList.remove("hide");
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
        startButton.addEventListener("click", () => {
        score = 0;
        scoreValueElement.innerText = score
        totalPoints = 0
        document.getElementById("totalPointsValue").innerText = totalPoints.toString();
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
  
