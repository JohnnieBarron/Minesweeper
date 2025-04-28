//*----- constants -----*/
const tile = {
  isMine: false,
  isRevealed: false,
  isFlagged: false,

}
  
/*----- state variables -----*/
let board;
let flags;
let inPlay = true;

/*----- cached elements  -----*/

const msgEl = document.querySelector('#message');
const buttonEl = document.querySelector('.head button');
const flagEL = document.querySelector('#flags');
const mineCounterEL = document.querySelector('#mines');
const boardEls = document.querySelectorAll('section.minefield div');

  

/*----- event listeners -----*/

buttonEl.addEventListener('click', init);

boardEls.forEach((El) => {
   El.addEventListener('click', handleClick);
 });

 


/*----- functions -----*/
init();

function init() {
  inPlay = true;
  renderGame();

  
};

function placeFlag() {
  
};

function handleClick(event) {
  if (inPlay === false) return;

  const idx = Array.from(boardEls).indexOf(event.target);
  checkForMine(idx);
  revealTile(idx);
  console.log(event.target);
};

function revealTile(idx) {
  if (board[idx].isRevealed) return;

  board[idx].isRevealed = true;
  if (board[idx].isMine === false) {
    boardEls[idx].style.backgroundColor ="lightgrey";
    const adjMines = countAdjacentMines(idx);
    if (adjMines > 0) {
      boardEls[idx].textContent = adjMines;
    } else {
      flood(idx);
    }
  } else if (board[idx].isMine === true) {
    boardEls[idx].textContent = "💣";
    boardEls[idx].style.backgroundColor = "red";
    msgEl.textContent = "Game Over!"
    inPlay = false;
  }
};

  /*----------------------------- mine functions ---------------------------------*/

function checkForMine(idx) {
  if (board[idx].isMine) {
    console.log('mine');
  } else {
    console.log('not a mine')
  }
};

function createMines() {
  const mineIdx = new Set(); 
  while (mineIdx.size < 7) {
    const randomIndex = Math.floor(Math.random() * boardEls.length);
    if (!mineIdx.has(randomIndex)) {
      mineIdx.add(randomIndex);
      board[randomIndex].isMine = true;
    }
  }

};

function minesCounter() {
 const mineCount = board.filter(tile => tile.isMine).length;
 mineCounterEL.textContent = mineCount;
 console.log(`mine count is ${mineCount}`);
  };

  function countAdjacentMines (idx) {
    const adjacentIndices = getAdjacentIndices(idx);
    let count = 0;
    adjacentIndices.forEach(i => {
      if (board[i] && board[i].isMine) count++;
    });
    return count;
  };

  function getAdjacentIndices(idx) {
    const width = Math.sqrt(boardEls.length); 
    const neighbors = [];
  
    const row = Math.floor(idx / width);
    const col = idx % width;
  
    for (let r = -1; r <= 1; r++) {
      for (let c = -1; c <= 1; c++) {
        if (r === 0 && c === 0) continue; 
        const newRow = row + r;
        const newCol = col + c;
        if (newRow >= 0 && newRow < width && newCol >= 0 && newCol < width) {
          neighbors.push(newRow * width + newCol);
        }
      }
    }
    return neighbors;
  }

  function flood(idx) {
    const neighbors = getAdjacentIndices(idx);
    neighbors.forEach(nidx => {
      if (!board[nidx].isRevealed && !board[nidx].isMine) {
        revealTile(nidx);
      }
    });
  };

  /*---------- render -------------------*/

  function renderBoard() {
    board = boardEls.length ? Array.from({length: boardEls.length }, () => ({
      isMine: false,
      isRevealed: false,
      isFlagged: false,
    })) : [];
    boardEls.forEach(tile => {
      tile.style.backgroundColor = 'grey';
      tile.textContent = "";
    });
    msgEl.textContent = ""
  }

function renderGame() {
  renderBoard();
  createMines();
  minesCounter();
};


