let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const handleMove = (index) => {
    if (gameState[index] !== '' || !gameActive) return;

    gameState[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;

    checkResult();
    togglePlayer();
};

const checkResult = () => {
    for (let condition of winningConditions) {
        let [a, b, c] = condition;
        if (gameState[a] !== '' && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            document.getElementById('status').innerText = `${currentPlayer} wins!`;
            gameActive = false;
            return;
        }
    }

    if (!gameState.includes('')) {
        document.getElementById('status').innerText = `It's a draw!`;
        gameActive = false;
    }
};

const togglePlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const resetGame = () => {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    document.getElementById('status').innerText = '';
    let cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
};
