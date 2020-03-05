// To-Do List:
// Assign X and O to player and Computer
// Make click function to store/display which square user clicked in & display his 'playing piece x/o'



var content = document.getElementById('content');

var ticTacToe;

// creating array to store the play-piece symbols
var playPiece = ["X","O"];

// Just going to declare two variables to hold info for both players
var playerX;
var playerO;

function clickFunc (clicked_id) {

    alert(clicked_id);


}


content.innerHTML = renderGame(ticTacToe);




function renderGame(game) {

    // Created onclick attributes ref'ing the click function we're making above. Also added the 'this.id' parameter
    // to test out and give reference to each button.

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>It's player O's turn!</h4>
            <div class="w-50 text-center">
                <button id="11" onclick="clickFunc(this.id)">-</button>
                <button id="12" onclick="clickFunc(this.id)">-</button>
                <button id="13" onclick="clickFunc(this.id)">-</button>
            </div>
            <div class="w-50 text-center">
                <button onclick="clickFunc">-</button>
                <button onclick="clickFunc">-</button>
                <button onclick="clickFunc">-</button>
            </div>
            <div class="w-50 text-center">
                <button onclick="clickFunc">-</button>
                <button onclick="clickFunc">-</button>
                <button onclick="clickFunc">-</button>
            </div>
        </div>
    `
}