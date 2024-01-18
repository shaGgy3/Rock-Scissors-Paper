const player = document.querySelector("#playerText")
const computer = document.querySelector("#computerText")
const result = document.querySelector("#resultText")
const rockButton = document.querySelector("#rockBtn")
const paperButton = document.querySelector("#paperBtn")
const scissorsButton = document.querySelector("#scissorsBtn")

let compPick ;
let playerPick ; 

const option = ["Rock" ,"Paper" , "Scissors"]

rockButton.addEventListener("click", () =>{
    playerPick = option[0]
    player.innerHTML = `Player: ${playerPick}`
    
    computerPick()
    resultFunc()
})

paperButton.addEventListener("click" , () =>{
    playerPick = option[1]
    player.innerHTML = `Player: ${playerPick}`
    
    computerPick()
    resultFunc()
})

scissorsButton.addEventListener("click" , () =>{
    playerPick = option[2]
    player.innerHTML = `Player: ${playerPick}`

    computerPick()    
    resultFunc()
})

function resultFunc(){
    if(compPick === playerPick)
    {
        result.innerHTML = "DRAW!!"
    }
    else if(compPick == "Rock" && playerPick == "Scissors")
    {
        result.innerHTML = "COMPUTER WIN!!"
    }
    else if(compPick == "Paper" && playerPick == "Rock")
    {
        result.innerHTML = "COMPUTER WIN!!"
    }
    else if(compPick == "Scissors" && playerPick == "Paper")
    {
        result.innerHTML = "COMPUTER WIN!!"
    }
    else if(playerPick == "Scissors" && compPick == "Paper")
    {
        result.innerHTML = "PLAYER WIN!!"
    }
    else if(playerPick == "Rock" && compPick == "Scissors")
    {
        result.innerHTML = "PLAYER WIN!!"
    }
    else if(playerPick == "Paper" && compPick == "Rock")
    {
        result.innerHTML = "PLAYER WIN!!"
    }
}
function computerPick(){
    let index = Math.floor(Math.random() * 3)
    compPick = option[index]
    computer.innerHTML = `Computer: ${compPick}`
}
