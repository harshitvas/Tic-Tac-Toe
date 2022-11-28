let playerOnePlays = true; // cross -> X
let turn = [];
let winner = false;
let playerOne = [];
let playerTwo = [];
let greeting = document.getElementById("message");
let gameBoard = document.getElementsByClassName("box");
let winning = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["1", "5", "9"], ["3", "5", "7"], ["3", "6", "9"], ["2", "5", "8"], ["1", "4", "7"]];

function reset(){
    // window.location.reload();
    for(let i = 1; i <= 9; i++){
        let resetBox = document.getElementById(i);
        resetBox.innerHTML = "";
    }
    turn = [];
    winner = false;
    playerOne = [];
    playerTwo = [];
}

function play(key) {
    if (!winner && playerOnePlays && !turn.includes(key)) {
        const message = "Player 2 turn";
        greeting.innerHTML = message;
        let box = document.getElementById(key);
        box.innerHTML = "X";
        playerOne.push(key);
        playerOnePlays = false;
        turn.push(key);
    }
    else if (!winner && !playerOnePlays && !turn.includes(key)) {
        const message = "Player 1 turn";
        greeting.innerHTML = message;
        let box = document.getElementById(key);
        box.innerHTML = "O";
        playerTwo.push(key);
        playerOnePlays = true;
        turn.push(key);
    }
    else {
        const message = "already played, choose another box";
        greeting.innerHTML = message;
    }
    if (playerOne.length >= 3) {
        let playerOneWins = false;
        playerOne.sort();
        for (let i = 0; i < winning.length; i++) {
            for (let j = 0; j < playerOne.length; j++) {
                if (playerOne[j] == winning[i][0]) {
                    let playerCount = 0;
                    for (let k = 0; k < 3; k++) {
                        for (let z = 0; z < playerOne.length; z++) {
                            if (playerOne[z] == winning[i][k]) {
                                playerCount++;
                            }
                        }
                    }
                    if (playerCount == 3) {
                        playerOneWins = true;
                        winner = true;
                        break;
                    }
                }
            }
        }
        if (playerOneWins) {
            const message = "Player 1 Wins 🥳🥳";
            greeting.innerHTML = message;
        }
    }
    if (playerTwo.length >= 3) {
        let playerTwoWins = false;
        playerTwo.sort();
        for (let i = 0; i < winning.length; i++) {
            for (let j = 0; j < playerTwo.length; j++) {
                if (playerTwo[j] == winning[i][0]) {
                    let playerCount = 0;
                    for (let k = 0; k < 3; k++) {
                        for (let z = 0; z < playerTwo.length; z++) {
                            if (playerTwo[z] == winning[i][k]) {
                                playerCount++;
                            }
                        }
                    }
                    if (playerCount == 3) {
                        winner = true;
                        playerTwoWins = true;
                        break;
                    }
                }
            }
        }
        if (playerTwoWins) {
            const message = "Player 2 Wins 🥳🥳";
            greeting.innerHTML = message;
        }
    }
    if (turn.length == gameBoard.length) {
        const message = "Draw 🏳️";
        greeting.innerHTML = message;
    }
}
