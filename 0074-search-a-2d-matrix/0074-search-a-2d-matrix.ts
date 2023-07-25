function searchMatrix(matrix: number[][], target: number): boolean {
    const y: number = matrix.length;
    const x: number = matrix[0].length;
    
    for (let i = 0; i < y; i++){
        let L: number = 0;
        let R: number = x - 1;
        
        while (L <= R){
            let M: number = Math.floor((L + R) / 2);
            let current: number = matrix[i][M];
            
            if (target === matrix[i][L]) return true;
            if (target === matrix[i][R]) return true;
            if (target === current) return true;  
            
            if (target < current){
                R = M - 1;
                L++;
            } else if (target > current){
                L = M + 1;
                R--;
            }
        }
    }
    
    return false;
};