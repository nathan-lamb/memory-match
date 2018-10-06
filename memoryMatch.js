//initialise grid

const grid = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12],[13],[14],[15],[16]];
const clickedNum = [];
const matchedCells = [];

const cellNumChooser = () => {
  return Math.floor(Math.random() * (17 - 1) + 1)
};

const randomNumChooser = () => {
  return Math.floor(Math.random() * (100 - 1) + 1);
};

const assignNumber = (grid) => {
  const cellNum = cellNumChooser();
  const randomNum = randomNumChooser();

  if (grid[cellNum - 1].length === 1) {
    grid[cellNum - 1].push(randomNum);

    document.getElementById(cellNum.toString()).innerHTML = grid[cellNum - 1][1];

    assignPartner(randomNum)
  } else {
    assignNumber(grid)
  }
};

const assignPartner = (randomNum) => {
  const partnerCell = cellNumChooser();

  if (grid[partnerCell - 1].length === 1){

    grid[partnerCell - 1].push(randomNum);

    document.getElementById(partnerCell.toString()).innerHTML = grid[partnerCell - 1][1];

    grid.map((item) => {
      if (item.length === 1) {
        assignNumber(grid)
      }
    });

  } else {
    assignPartner(randomNum)
  }
};

assignNumber(grid);

Array.from(document.getElementsByClassName("cell")).forEach((cell) => {
  cell.addEventListener("click", function(e) {
    if (e.target.className = "cell") {
      e.target.style.backgroundColor = "white";
      addClickedNum(e);
      checkNumbers();
    }});
});

const addClickedNum = (e) => {
  if (clickedNum.length !== 4) {
    clickedNum.push(grid[parseInt(e.target.id) - 1][0]);
    clickedNum.push(grid[parseInt(e.target.id) - 1][1]);
  }
};

const checkNumbers = () => {
  if (clickedNum.length === 4) {
    if (clickedNum[1] !== clickedNum[3]) {
      setTimeout(resetIncorrect, 1500);
    } else {
      matchedCells.push(clickedNum[0]);
      matchedCells.push(clickedNum[2]);

      checkWin()
    }
  }
};

const resetIncorrect = () => {
  document.getElementById(clickedNum[0].toString()).style.backgroundColor = "black";
  document.getElementById(clickedNum[2].toString()).style.backgroundColor = "black";
  clickedNum.pop();
  clickedNum.pop();
  clickedNum.pop();
  clickedNum.pop();

};

const checkWin = () => {
  if (matchedCells.length === 16){
    alert("You win!")
  }
};
