// To-Do List:
// 1) Assign X and O to player and Computer by trying out a new (newly found) approach of popping up an alert to store which 'playPiece' (X or O) the user wants
// 2) Make click function to store/display which square user clicked in & display his 'playing piece x/o'


var content = document.getElementById('content');



// coded out temporarily : var ticTacToe;

// create function?? to store steps in determining players symbol/play-piece and computer's
// creating a prompt to store the user/human-player's 'play piece' symbol selection

// function pickPiece() {
//     var playPiece = prompt('Select your symbol: X or O');
//     alert('You picked ' + playPiece '!')
// };


// Just going to declare two variables to hold info for both players
var playerX;
var playerO;

function clickFunc (clicked_id) {

    alert(clicked_id);


}


content.innerHTML = renderGame();




function renderGame(game) {

    // Created onclick attributes ref'ing the click function we're making above. Also added the 'this.id' parameter
    // to test out and give reference to each button.

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>It's player O's turn!</h4>
            <div class="w-50 text-center">
                <button class="board-button" id="1-1" onclick="clickFunc(this.id)">-</button>
                <button class="board-button" id="1-2" onclick="clickFunc(this.id)">-</button>
                <button class="board-button" id="1-3" onclick="clickFunc(this.id)">-</button>
            </div>
            <div class="w-50 text-center">
                <button class="board-button" id="2-1" onclick="clickFunc(this.id)">-</button>
                <button class="board-button" id="2-2" onclick="clickFunc(this.id)">-</button>
                <button class="board-button" id="2-3" onclick="clickFunc(this.id)">-</button>
            </div>
            <div class="w-50 text-center">
                <button class="board-button" id="3-1" onclick="clickFunc(this.id)">-</button>
                <button class="board-button" id="3-2" onclick="clickFunc(this.id)">-</button>
                <button class="board-button" id="3-3" onclick="clickFunc(this.id)">-</button>
            </div>
        </div>
        
    `
}