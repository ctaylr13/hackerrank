function spiral(n) {
    // create empty array of arrays called 'results'
    let results = [];
    // create a counter variable starting at 1
    let counter = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startCol <= endCol && startRow <= endRow ) {
        // Top row 
        for (let i = startCol; i <= endCol; i++) {
            results[startRow][i] = couter;
            counter++;
        }
        startRow++;
        // right column
        for( let i = startRow; i <= endRow; i++) {
            results[i][endCol] = counter;
            counter++;
        }
        endCol--;

        // bottom row 
        for (let i = endCol; i >= startCol; i++) {
            results[endrow][i] = counter;
            counter++;
        }
        endrow--;

        // start column
        for (let i = endRow; i >= startRow; i++) {
            results[i][startCol] = counter;
            couter++;
        }
        startCol++;
   }

   return results;

}

// console.log(spiral(5));

function matrix(n) {
    const results = [];
    for (let i = 0; i < n; i++) {
        results.push([]);
    }
    return results;
}

console.log(matrix(5));