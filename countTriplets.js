// Complete the countTriplets function below.
function countTriplets(arr, r) {
    let count = 0;
    let num_counts = {};
    let triplet_store = {};
  
    for (const num of arr) {
        if(!num_counts[num]){
            num_counts[num] = 0;
        }
        console.log('num counts', num_counts);

        // *no care for remainders*
        const prev_num = num / r;
        console.log('prev num', prev_num);
        if(!num_counts[prev_num]){
            num_counts[prev_num] = 0;
        }
        const prev_count = num_counts[prev_num];

        if(!triplet_store[prev_num]){
            triplet_store[prev_num] = 0;
        }
        // prev_num used to store aggregate of 2nd and 1st position counts
        count += triplet_store[prev_num];
        
        num_counts[num]++;
        if(!triplet_store[num]){
            triplet_store[num] = 0;
        }
        // storing current num (2nd pos) counts plus previous (1st pos) counts
        triplet_store[num] = triplet_store[num] + prev_count;
    }
    return count;
}

function countTriplets2(arr, r) {
    let map = {}
    let total = [];
    let duplicates = [];
    for(let x of arr) {
        if(map[x]) {
            map[x]++
        } else {
            map[x] = 1;
        }
    }
    console.log('map', map);
    // get duplicates out 
    for(let x in map) {
        if(map[x] > 1) {

        }
    }
    let arrSet = Object.getOwnPropertyNames(map);
    // console.log('arrset', arrSet);
    for (let i = 0; i < arrSet.length; i++) {
        if(arrSet.slice(i, i+3).length === 3) {
            total.push(arrSet.slice(i, i+3));
        }

    }
    console.log('total', total);
    //loop over total array 
    for(let i = 0; i < total.length; i++) {
        var row = total[i];
        console.log('row',row);
        for(var j = 0; j < row.length; j++) {
            console.log('value', row[j]);
            // if(row[j] === )
        }
    }


}
let arr = [1, 3, 9, 9, 27, 81];
let r = 3
console.log(countTriplets(arr, r));