/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
    let row = [1];
    if (rowIndex === 0) return row;
  
    let counter = rowIndex;
    while (counter >= 1){
        let prevRow = row;
        let nextRow = getNextRow(prevRow);
        row = (nextRow);
        counter--;
    }
    
    return row;
};


const getNextRow = (arr) => {
    let nextRow = [1];
    
    for (let i = 0; i < arr.length - 1; i++){
        nextRow.push(arr[i] + arr[i + 1])
    }
    
    nextRow.push(1);
    
    return nextRow;
};