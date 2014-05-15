function AI(grid) {
	//use this.grid to access the data you need
	//for more infomation about grid, please read the code in grid.js, or use console.log(grid);
  this.grid = grid;
};

AI.prototype.nextMove = function() {
	// add your AI code here. The following line returns a radom number as an example, you'd better replace it. 1-4 represent moving derections
  //console.log(this.grid.cells);
  return Math.floor(4 * Math.random());
};