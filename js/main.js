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

  

/*----- event listeners -----*/

buttonEl.addEventListener('click', init);

 boardEls.forEach((El) => {
   El.addEventListener('click', handleClick);
 });





/*----- functions -----*/



function init(event) {
  console.log(event.target);
};

function handleClick(event) {
  console.log(event.target);
};

function renderGame() {

};



