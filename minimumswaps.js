function minimumSwaps(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if(indexOfMin !== i) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
            count++;
        }
    }
    // return arr;
    return count;
}



let arr = [2, 3, 4, 1, 5];
console.log(minimumSwaps(arr));