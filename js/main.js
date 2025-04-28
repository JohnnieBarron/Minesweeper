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


function handleClick(event) {
  if (inPlay === false) return;

  const idx = Array.from(boardEls).indexOf(event.target);
  checkForMine(idx);
  revealTile(idx);
  console.log(event.target);
};

function revealTile(idx) {
  board[idx].isRevealed = true;
  if (board[idx].isMine === false) {
    boardEls[idx].style.backgroundColor ="lightgrey";
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


