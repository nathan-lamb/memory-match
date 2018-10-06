//initialise grid

const grid = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12],[13],[14],[15],[16]];

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

//hover to show number

Array.from(document.getElementsByClassName("cell")).forEach((cell) => {
  cell.addEventListener("click", function(e) {
    if (e.target.className = "cell") {
      e.target.style.backgroundColor = "white";

      cell.addEventListener("mouseleave", function () {
        if (e.target.className = "cell") {
          e.target.style.backgroundColor = "black";
        }})
    }});
});

