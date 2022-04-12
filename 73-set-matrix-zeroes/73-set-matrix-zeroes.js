/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = matrix => {
    let rowLength = matrix.length;
    let colLength = matrix[0].length;
    let colsWithZeros = [];
    
    for (let row = 0; row < rowLength; row++){
        for (let col = 0; col < colLength; col++){
            if (matrix[row][col] === 0){
                colsWithZeros.push(col)
            }
        }
    }
    
    for (let row = 0; row < rowLength; row++){
        if (matrix[row].includes(0)){
            matrix[row] = Array(colLength).fill(0);
            continue;
        }
        for (let col = 0; col < colLength; col++){
            if (colsWithZeros.includes(col)){
                matrix[row][col] = 0;
            }
        }
    }
};