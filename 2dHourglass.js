function hourglassSum(arr) {
    let max = 0;
    let count = 0;
    for(let i = 0; i < (arr.length - 2); i++) {
        for(let j = 0; j < (arr.length - 2); j++) {
            let hourglass = [arr[i][j], arr[i][j + 1], arr[i][j + 2], arr[i + 1][j + 1], arr[i + 2][j], arr[i + 2][j + 1], arr[i + 2][j + 2]];
            let sum = hourglass.reduce(function(max, b) { return max + b; }, 0);
            count++;
            if(sum > max) {
                max = sum;
            }
        }
    }
    return max;
}


let arr = [
    [-9, -9, -9, 1, 1, 1], 
    [0, -9, 0, 4, 3, 2], 
    [-9, -9, -9, 1, 2, 3], 
    [0, 0, 8, 6, 6, 0], 
    [0, 0, 0, -2, 0, 0], 
    [0, 0, 1, 2, 4, 0]]; 
console.log(hourglassSum(arr));
// console.log(looping(arr));


// Looping over 2d array 
function looping(arr) {
    for(let i = 0; i < arr.length; i++) {
        var row = arr[i];
        console.log('row', row);
        for(var j = 0; j < arr.length; j++) {
            var column = row[j];
            console.log('column', column);
        }
    }
}