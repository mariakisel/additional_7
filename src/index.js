module.exports = function solveSudoku(matrix) {
   
  let solveMatrix = matrix;
    if(solve(matrix))  
      {solveMarix=matrix}
  return solveMatrix;
}

function solve(matrix)
{
  let cell = [];
    if(!findEmpSpc(matrix, cell))
    {return true;}

  let row = cell[0], column = cell[1];
  for(var number = 1; 10>number; number++)
  {
    if(!Row(matrix, row, number) && !Column(matrix, column, number) && !Box(matrix,row - row % 3, column - column % 3,number))
    {
      matrix[row][column] = number;
      if(solve(matrix))
      {return true;}
      matrix[row][column] = 0;
    }
  }
  return false;
}

function findEmpSpc(matrix, cell)
{
  for(var i = 0; i<9; i++)
  {
    for(var j=0; j<9; j++)
    {
      if(matrix[i][j] == 0)
      {
        cell[0] = i;
        cell[1] = j;
        return true;
      }
    }
  }
  return false;
}

function Row(matrix, row, number)
{
  for(var i = 0; i < 9; i++)
  {
    if(matrix[row][i] == number)
    {
      return true;
    }
  }
  return false;
}

function Column(matrix, column, number)
{
  for(var i = 0; i < 9; i++)
  {
    if(matrix[i][column] == number)
    {
      return true;
    }
  }
  return false;
}

function Box(matrix, row, column, number)
{
  for(var i = 0; i < 3; i++)
  {
    for(var j = 0; j < 3; j++)
    {
      if(matrix[i + row][j + column] == number)
      {
        return true;
      }
    }
  }
  return false;
}