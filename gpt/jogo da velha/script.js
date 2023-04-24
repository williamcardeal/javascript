let currentPlayer = 'X';
let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function makeMove(row, col) {
    if (gameBoard[row][col] === '') {
        gameBoard[row][col] = currentPlayer;
        document.getElementById('game-board').children[row].children[col].innerText = currentPlayer;
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        checkWinner();
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}

function checkWinner() {
    const winningCombinations = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];

    for (let combination of winningCombinations) {
        let [a, b, c] = combination;
        if (gameBoard[a[0]][a[1]] !== '' &&
            gameBoard[a[0]][a[1]] === gameBoard[b[0]][b[1]] &&
            gameBoard[a[0]][a[1]] === gameBoard[c[0]][c[1]]) {
            alert(`O jogador ${gameBoard[a[0]][a[1]]} venceu!`);
            resetGame();
            return;
        }
    }

    // Verificar empate
    let isDraw = true;
    for (let row of gameBoard) {
        if (row.includes('')) {
            isDraw = false;
            break;
        }
    }
    if (isDraw) {
        alert('Empate!');
        resetGame();
    }
}