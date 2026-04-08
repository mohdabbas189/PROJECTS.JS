const randomNumber=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt')
const userinput=document.querySelector('#guessField')
const guessslot=document.querySelector('.guesses')
const remainslot=document.querySelector(".lastResult")
const lowOrhigh=document.querySelector(".lowOrHi")
const StartOver=document.querySelector(".resultParas")

const p=document.createElement('p')
let prevGuess=[];
let numGuess=1;
let playGame =true;

if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault();
        const guess=parseInt(userinput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if (isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess<1){
        alert('please enter number greater than or equal to 1')
    }
    else if(guess>100){
        alert('please enter a number less than 100 or equal to 100')
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayguess(guess)
            displaymessage(`game over ${randomNumber}`)
            endgame()
        }
        else{
            displayguess(guess)
            checkGuess(guess)
        }
    }

}
function checkGuess(guess){
    if(guess===randomNumber){
        displaymessage(`you guess it right`)
        endgame()
    }
    if(guess<randomNumber){
        displaymessage(`number is too low`)
    }
    if(guess>randomNumber){
        displaymessage(`number is too high`)
    }
}
function displayguess(guess){
    userinput.value=``
    guessslot.innerHTML=`${guess} `
    numGuess++;
    remainslot.innerHTML=`${10-numGuess}`

}
function displaymessage(message){
    lowOrhigh.innerHTML=`<h2>${message}</h2>`


}
function endgame(){
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame>Start new Game</h2>`
    StartOver.appendChild(p)
    playGame=false;
    newgame()
}
function newgame(){
   const newgamebtn= document.querySelector('#newGame')
   newgamebtn.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1);
    prevGuess=[]
    numGuess=1
    guessslot.innerHTML=''
    remainslot.innerHTML=`${10-numGuess}`
    userinput.removeAttribute('disabled')
    StartOver.removeChild(p)

})
}



