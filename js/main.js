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
  console.log(event.target);
};

function handleClick(event) {
  checkForMine(event.target);
  revealTile();
  console.log(event.target);
};

function revealTile(event) {
  

};

function checkForMine(target) {
  if (target === true) {
    console.log('mine');
  } else {
    revealTile();
    console.log('not a mine')
  }

};

function renderGame() {

};



