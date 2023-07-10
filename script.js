const timer = document.querySelector('#timer')
const answers = document.querySelectorAll('#answers button')
const menu = document.querySelector('#menu')
const inputs = document.querySelectorAll('#menu input')
const startGame = document.querySelectorAll('#menu button')
const gameSection = document.querySelector('#gameSection')
const tracks = document.querySelectorAll('header audio')
const scores = document.querySelectorAll('.scores')
const endGame = document.querySelector('#endGame')
const verdict = document.querySelector('#endGame h1')
const playAgain = document.querySelectorAll('.restart')

let player1 = 'Player 1'
let player2 = 'Player 2'
let players = 0;
let gameSongs = [];
let song;
let turn = 1;
let currentAnswer;
let rightAnswer;
let scoreP1 = 0;
let scoreP2 = 0;
let question = 'song';
let clicked = false;
let givenAnswer = 0;
let player2Clicked = false;
let rightGivenAnswer = false;


startGame.forEach(button => {
    button.onclick = () => {
        players = button.innerHTML.charAt(0)
        menu.style.display = 'none'
        gameSection.style.display = 'flex'
        setGame()
        chooseSongs()
        setTimeout(playNextSong, 2000)
        if (inputs[0].value !== '') {player1 = inputs[0].value }
        if (inputs[1].value !== '') {player2 = inputs[1].value }
        scores[0].innerHTML = `${player1} Score: ${scoreP1}`
        scores[1].innerHTML = `${player2} Score: ${scoreP2}`
    }
})

const setGame = () => {
    if (players === '1') {
        scores[1].style.display = 'none'
    }
}

const chooseSongs = () => {
    for (let i = 0; 10 > gameSongs.length; i++) {
        random = Math.floor(Math.random() * 22) + 1;

        if(gameSongs.includes(random)) {
        } else {
            gameSongs.push(random)
        }
    } console.log(gameSongs);
}

const playNextSong = () => {
    assignSongs()
    startTimer()
};

const assignSongs = () => {
    switch (turn) {
        case 1: song = gameSongs[0]
        break
        case 2: song = gameSongs[1]
        break
        case 3: song = gameSongs[2]
        break
        case 4: song = gameSongs[3]
        break
        case 5: song = gameSongs[4]
        break
        case 6: song = gameSongs[5]
        break
        case 7: song = gameSongs[6]
        break
        case 8: song = gameSongs[7]
        break
        case 9: song = gameSongs[8]
        break
        case 10: song = gameSongs[9]
        break
    }
    playSongs()
}

const playSongs = () => {
    if (song === 1) {
        tracks[0].play()
        prepareAnswers()
    } else if (song === 2) {
        tracks[1].play()
        prepareAnswers()
    } else if (song === 3) {
        tracks[2].play()
        prepareAnswers()
    } else if (song === 4) {
        tracks[3].play()
        prepareAnswers()
    } else if (song === 5) {
        tracks[4].play()
        prepareAnswers()
    } else if (song === 6) {
        tracks[5].play()
        prepareAnswers()
    } else if (song === 7) {
        tracks[6].play()
        prepareAnswers()
    } else if (song === 8) {
        tracks[7].play()
        prepareAnswers()
    } else if (song === 9) {
        tracks[8].play()
        prepareAnswers()
    } else if (song === 10) {
        tracks[9].play()
        prepareAnswers()
    } else if (song === 11) {
        tracks[10].play()
        prepareAnswers()
    } else if (song === 12) {
        tracks[11].play()
        prepareAnswers()
    } else if (song === 13) {
        tracks[12].play()
        prepareAnswers()
    } else if (song === 14) {
        tracks[13].play()
        prepareAnswers()
    } else if (song === 15) {
        tracks[14].play()
        prepareAnswers()
    } else if (song === 16) {
        tracks[15].play()
        prepareAnswers()
    } else if (song === 17) {
        tracks[16].play()
        prepareAnswers()
    } else if (song === 18) {
        tracks[17].play()
        prepareAnswers()
    } else if (song === 19) {
        tracks[18].play()
        prepareAnswers()
    } else if (song === 20) {
        tracks[19].play()
        prepareAnswers()
    } else if (song === 21) {
        tracks[20].play()
        prepareAnswers()
    } else if (song === 22) {
        tracks[21].play()
        prepareAnswers()
    }
}

const prepareAnswers = () => {
    if (song === 1) {
        answers[0].innerHTML = 'Bad romance'
        answers[1].innerHTML = 'Alejandro'
        answers[2].innerHTML = 'Smile'
        answers[3].innerHTML = 'La isla bonita'
        rightAnswer = 'Bad romance'
    } else if (song === 2) {
        answers[0].innerHTML = 'Rehab'
        answers[1].innerHTML = 'Lonely'
        answers[2].innerHTML = 'Love love love'
        answers[3].innerHTML = 'Back to black'
        rightAnswer = 'Back to black'
    } else if (song === 3) {
        answers[0].innerHTML = 'Your song'
        answers[1].innerHTML = 'Believe'
        answers[2].innerHTML = 'Need you now'
        answers[3].innerHTML = 'Them'
        rightAnswer = 'Believe'
    } else if (song === 4) {
        answers[0].innerHTML = 'One'
        answers[1].innerHTML = 'Angels'
        answers[2].innerHTML = 'Spirits'
        answers[3].innerHTML = 'Dancing on my own'
        rightAnswer = 'Dancing on my own'
    } else if (song === 5) {
        answers[0].innerHTML = 'Dust in the wind'
        answers[1].innerHTML = '1973'
        answers[2].innerHTML = 'The power of love'
        answers[3].innerHTML = 'Brave'
        rightAnswer = 'Dust in the wind'
    } else if (song === 6) {
        answers[0].innerHTML = 'Emily'
        answers[1].innerHTML = 'Here with me'
        answers[2].innerHTML = 'Girls just wanna have fun'
        answers[3].innerHTML = 'Strong enough'
        rightAnswer = 'Girls just wanna have fun'
    } else if (song === 7) {
        answers[0].innerHTML = 'Help'
        answers[1].innerHTML = 'Imagine'
        answers[2].innerHTML = 'Never ending story'
        answers[3].innerHTML = 'Angie'
        rightAnswer = 'Help'
    }  else if (song === 8) {
        answers[0].innerHTML = 'Numb'
        answers[1].innerHTML = 'Riders on the storm'
        answers[2].innerHTML = 'Karma police'
        answers[3].innerHTML = 'In the end'
        rightAnswer = 'In the end'
    }  else if (song === 9) {
        answers[0].innerHTML = 'I was made for loving you'
        answers[1].innerHTML = 'Kiss me'
        answers[2].innerHTML = 'Love song'
        answers[3].innerHTML = 'Gimme more'
        rightAnswer = 'I was made for loving you'
    }  else if (song === 10) {
        answers[0].innerHTML = 'I want to break free'
        answers[1].innerHTML = 'Lover'
        answers[2].innerHTML = 'Freedom'
        answers[3].innerHTML = 'I need'
        rightAnswer = 'I want to break free'
    }  else if (song === 11) {
        answers[0].innerHTML = 'True'
        answers[1].innerHTML = 'Sweet child of mine'
        answers[2].innerHTML = 'Fear of the dark'
        answers[3].innerHTML = "Knocking on heaven's door"
        rightAnswer = "Knocking on heaven's door"
    }  else if (song === 12) {
        answers[0].innerHTML = 'Your call'
        answers[1].innerHTML = 'Lego house'
        answers[2].innerHTML = 'Ring of fire'
        answers[3].innerHTML = 'Hero'
        rightAnswer = 'Lego house'
    }  else if (song === 13) {
        answers[0].innerHTML = 'Love story'
        answers[1].innerHTML = 'Love me'
        answers[2].innerHTML = 'You need to calm down'
        answers[3].innerHTML = 'Shallow'
        rightAnswer = 'Love story'
    }  else if (song === 14) {
        answers[0].innerHTML = 'Rise'
        answers[1].innerHTML = 'Time to dance'
        answers[2].innerHTML = 'My immortal'
        answers[3].innerHTML = 'Brother'
        rightAnswer = 'My immortal'
    }  else if (song === 15) {
        answers[0].innerHTML = 'Lullaby'
        answers[1].innerHTML = 'Ocean eyes'
        answers[2].innerHTML = 'Dear God'
        answers[3].innerHTML = 'Wonderful life'
        rightAnswer = 'Ocean eyes'
    }  else if (song === 16) {
        answers[0].innerHTML = 'Rude'
        answers[1].innerHTML = 'Numbers'
        answers[2].innerHTML = 'Ghost towns'
        answers[3].innerHTML = 'I know'
        rightAnswer = 'Rude'
    }  else if (song === 17) {
        answers[0].innerHTML = 'I miss you'
        answers[1].innerHTML = 'Here with me'
        answers[2].innerHTML = 'Take on me'
        answers[3].innerHTML = 'Sleeping sun'
        rightAnswer = 'Take on me'
    }  else if (song === 18) {
        answers[0].innerHTML = 'Let her go'
        answers[1].innerHTML = 'Heaven'
        answers[2].innerHTML = 'I will wait'
        answers[3].innerHTML = 'Thriller'
        rightAnswer = 'Thriller'
    }  else if (song === 19) {
        answers[0].innerHTML = 'Born this way'
        answers[1].innerHTML = 'Paint it black'
        answers[2].innerHTML = 'Fear of the dark'
        answers[3].innerHTML = 'Thunderstruck'
        rightAnswer = 'Thunderstruck'
    }  else if (song === 20) {
        answers[0].innerHTML = 'Applause'
        answers[1].innerHTML = 'You and I'
        answers[2].innerHTML = 'Unconditionally'
        answers[3].innerHTML = 'Judas'
        rightAnswer = 'Unconditionally'
    }  else if (song === 21) {
        answers[0].innerHTML = 'Always'
        answers[1].innerHTML = 'Zombies'
        answers[2].innerHTML = "What's up"
        answers[3].innerHTML = 'Sexy boy'
        rightAnswer = "What's up"
    }  else if (song === 22) {
        answers[0].innerHTML = 'Cancer'
        answers[1].innerHTML = 'Nothing to lose'
        answers[2].innerHTML = 'One day'
        answers[3].innerHTML = 'When you are gone'
        rightAnswer = 'When you are gone'
    }
}

answers.forEach(answer => {
    answer.onclick = () => {
        currentAnswer = answer.innerHTML
        if (question === 'song' && clicked === false && rightGivenAnswer === false){
            givenAnswer++
            if (currentAnswer === rightAnswer) {
                scoreP1 += 5
                answer.style.backgroundColor = 'green'
                rightGivenAnswer = true
            } else {
                answer.style.backgroundColor = 'red'
                scoreP1 -= 5
                if(scoreP1 < 0) {scoreP1 = 0}
            } clicked = true
            if (players === '1') {
                question = 'artist'
                setTimeout(artist, 1000)
            } else if (givenAnswer === 2 || currentAnswer === rightAnswer ) {
                question = 'artist'
                setTimeout(artist, 1000)
            }

        } else if (question === 'artist' && clicked === false && rightGivenAnswer === false){
            if (currentAnswer === rightAnswer) {
                scoreP1 += 5
                answer.style.backgroundColor = 'green'
                rightGivenAnswer = true
            } else {
                scoreP1 -= 5
                if(scoreP1 < 0) {scoreP1 = 0}
                answer.style.backgroundColor = 'red'
            } 
            clicked = true
        } scores[0].innerHTML = `${player1} Score: ${scoreP1}`
    }
})

window.addEventListener('keydown', (event) => {
    if (player2Clicked === false && rightGivenAnswer === false && players === '2') {
        if(event.keyCode === 37) {
            currentAnswer = answers[0].innerHTML
            if (currentAnswer === rightAnswer) {
                answers[0].style.backgroundColor = 'green'
            } else {
                answers[0].style.backgroundColor = 'red'
            }
        } else if(event.keyCode === 38) {
            currentAnswer = answers[1].innerHTML
            if (currentAnswer === rightAnswer) {
                answers[1].style.backgroundColor = 'green'
            } else {
                answers[1].style.backgroundColor = 'red'
            }
        } else if(event.keyCode === 40) {
            currentAnswer = answers[2].innerHTML
            if (currentAnswer === rightAnswer) {
                answers[2].style.backgroundColor = 'green'
            } else {
                answers[2].style.backgroundColor = 'red'
            }
        } else if(event.keyCode === 39) {
            currentAnswer = answers[3].innerHTML
            if (currentAnswer === rightAnswer) {
                answers[3].style.backgroundColor = 'green'
            } else {
                answers[3].style.backgroundColor = 'red'
            }
        } kbAnswer()
    } 
})

const kbAnswer = () => {
    if (question === 'song' && player2Clicked === false && rightGivenAnswer === false){
        givenAnswer++;
        if (currentAnswer === rightAnswer) {
            scoreP2 += 5;
            rightGivenAnswer = true;
        } else {
            scoreP2 -= 5;
            if(scoreP2 < 0) {scoreP2 = 0}
        } player2Clicked = true;
        if (givenAnswer === 2 || currentAnswer === rightAnswer ) {
            question = 'artist'
            setTimeout(artist, 1000)
        }    
    } else if (question === 'artist' && player2Clicked === false && rightGivenAnswer === false){
        if (currentAnswer === rightAnswer) {
            scoreP2 += 5;
            rightGivenAnswer = true;
        } else {
            scoreP2 -= 5;
            if(scoreP2 < 0) {scoreP2 = 0}
        }
        player2Clicked = true;
    } scores[1].innerHTML = `${player2} Score: ${scoreP2}`
}

const runTimer = () => {
    if (timer.innerHTML !== '0') {
        timer.innerHTML--
    } else {
        clearInterval(myvar)
        question = ''
        answers[4].style.display = 'block'
        playAgain[0].style.display = 'block'
    }
}

answers[4].addEventListener('click', () => {
    answers[4].style.display = 'none'
    playAgain[0].style.display = 'none'
    nextSong()
});

const startTimer = () => myvar = setInterval(runTimer, 1000)

nextSong = () => {
    if (turn < 10) {
        turn++
        timer.innerHTML = 10
        answers.forEach(answer => {answer.innerHTML = ''})
        answers.forEach(answer => {answer.style.backgroundColor = 'unset'})
        clicked = false;
        player2Clicked = false;
        rightGivenAnswer = false;
        givenAnswer = 0;
        question = 'song'
        setTimeout(playNextSong, 1000)
        if (turn < 9) {
            answers[4].innerHTML = 'Next Song'
        } else if (turn < 10){
            answers[4].innerHTML = 'Last Song'
        } else {
            answers[4].innerHTML = 'End'
        }
    } else {
        winner()
    }
}

const winner = () => {
    if (players === '1') {
        gameSection.style.display = 'none'
        endGame.style.display = 'block'
        verdict.innerHTML = `Well done! <br> You totalised ${scoreP1} points`
    } else {
        gameSection.style.display = 'none'
        endGame.style.display = 'block'
        if (scoreP1 > scoreP2) {
        verdict.innerHTML = `Well done ${player1} <br> You won! <br> You totalised ${scoreP1} points against the ${scoreP2} of player 2`
        } else if (scoreP1 < scoreP2) {
            verdict.innerHTML = `Well done ${player2} <br> You won! <br> You totalised ${scoreP2} points against the ${scoreP1} of player 1`
        } else if (scoreP1 = scoreP2) {
            verdict.innerHTML = `Well done the both of you! <br> You both won <br> You both totalised ${scoreP1} points`
        }
    }
}

playAgain.forEach(button => {
button.onclick = () => {
    answers.forEach(answer => {answer.innerHTML = ''})
    answers.forEach(answer => {answer.style.backgroundColor = 'unset'})
    playAgain[0].style.display = 'none'
    timer.innerHTML = 10
    gameSongs = [];
    turn = 1;
    scoreP1 = 0;
    scoreP2 = 0;
    question = 'song'    
    clicked = false;
    player2Clicked = false;
    rightGivenAnswer = false;
    givenAnswer = 0;
    scores[0].innerHTML = `Score: ${scoreP1}`
    scores[1].innerHTML = `Score: ${scoreP2}`
    answers[4].innerHTML = 'Next Song'
    endGame.style.display = 'none'
    gameSection.style.display = 'none'
    menu.style.display = 'flex'
}
})



var titles = ['Back To December', 'Better Than Revenge', 'Castles Crumbling', 'Dear John', 'Electric Touch', 'Enchanted', 'Foolish One', 
              'Haunted', 'I Can See You', 'Innocent', 'Last Kiss', 'Long Live', 'Mean', 'Mine', 'Never Grow Up', 'Ours', 'Sparks Fly', 'Speak Now', 
              'Superman', 'The Story Of Us', 'Timeless', 'When Emma Falls in Love'];


var audios = ['tracks/Back To December.mp4', 'tracks/Better Than Revenge.mp4', 'tracks/Castles Crumbling.mp4', 'tracks/Dear John.mp4', 
                'tracks/Electric Touch.mp4', 'tracks/Enchanted.mp4', 'tracks/Foolish One.mp4', 'tracks/Haunted.mp4', 'tracks/I Can See You.mp4', 
                'tracks/Innocent.mp4', 'tracks/Last Kiss.mp4', 'tracks/Long Live.mp4', 'tracks/Mean.mp4', 'tracks/Mine.mp4', 'tracks/Never Grow Up.mp4',
                'tracks/Ours.mp4', 'tracks/Sparks Fly.mp4', 'tracks/Speak Now.mp4', 'tracks/Superman.mp4', 'tracks/The Story Of Us.mp4', 'tracks/Timeless.mp4',
                'tracks/When Emma Falls in Love.mp4'];


var max = 15;
var min = 0;


function disp() {
    var rand = Math.floor(Math.random()*(max-min+1)+min);
    return rand
}


var val;

function getVal() {
    val = disp();
}


function picDisp() {
    setTimeout(() => document.getElementById("myPicture").src=images[val], 7000)
}