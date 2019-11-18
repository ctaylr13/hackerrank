function maximumToys(prices, k) {
    let sum = 0;
    let sorter = prices.sort((a, b) => a - b); 
    console.log('sorter', sorter);
    let counter = 0;
    for(var i = 0; i < sorter.length; i++) {
        if(sorter[i] < k) {
            sum += sorter[i];
            if(sum <= k) {
                counter++;
            }
        }
    }
    return counter;
}
let k = 7;
let prices = [4,2, 1, 3];

console.log(maximumToys(prices, k));