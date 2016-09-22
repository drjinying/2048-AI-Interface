// use grid to access the current layout in the game
function AI(grid) {
  this.grid = grid;
  //this.size = this.grid.size;
  //this.cells = this.grid.cells;
};

// return 0-3 for the next move
AI.prototype.nextMove = function() {
  //alert(this.cells[1][1]);
  return Math.floor(4 * Math.random());
};