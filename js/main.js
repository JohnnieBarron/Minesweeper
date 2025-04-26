/*----- constants -----*/
  
/*----- state variables -----*/
let board;
let flags;
let winner;

/*----- cached elements  -----*/

const msgEl = document.querySelector('#message');
const buttonEl = document.querySelector('.head button');
const flagEL = document.querySelector('#flags');
const mineCounterEL = document.querySelector('#mines');
const boardEls = document.querySelectorAll('section.minefield div');
const isMine = false;

  

/*----- event listeners -----*/

buttonEl.addEventListener('click', init);

boardEls.forEach((El) => {
   El.addEventListener('click', handleClick);
 });

 


/*----- functions -----*/


function init(event) {
  renderGame();
  
};

function createMines() {
  const mineIdx = [];
  while (mineIdx.length < 7) {
    const randomIndex = Math.floor(Math.random() * boardEls.length);
    mineIdx.push(randomIndex);
    boardEls[randomIndex].dataset.mine = "true";
    console.log(mineIdx);
  }

};

function handleClick(event) {
  checkForMine(event.target);
  revealTile(event.target);
  console.log(event.target);
};

function revealTile(target) {
  target.style.backgroundColor ="lightgrey";
};

function checkForMine(target) {
  if (target === true) {
    console.log('mine');
  } else {
    revealTile(target);
    console.log('not a mine')
  }

};

function renderGame() {
  createMines();
  minesCounter();

};


function minesCounter() {
  let mineCount = 0;
  boardEls.foreach(tile => {
    if(tile.dataset.mine === 'true') {
      mineCount++;
    }
  })};
