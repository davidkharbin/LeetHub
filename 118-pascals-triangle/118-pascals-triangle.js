/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
    let triangle = [[1]];
    if (numRows === 1) return triangle;
  
    let counter = numRows;
    while (counter > 1){
        let prevRow = triangle[triangle.length - 1];
        let nextRow = getNextRow(prevRow);
        triangle.push(nextRow);
        counter--;
    }
    
    return triangle;
};


const getNextRow = (arr) => {
    let row = [1];
    
    for (let i = 0; i < arr.length - 1; i++){
        row.push(arr[i] + arr[i + 1])
    }
    
    row.push(1);
    
    return row;
};