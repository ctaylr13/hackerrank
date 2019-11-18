const repeatedStrin = (s, n) => {
    const countA = s => s.split('a').length - 1;

    let len = s.length;
    let reps = Math.floor(n / len);
    let remainder = s.slice(0, n % len);

    return reps * countA(s) + countA(remainder);
};

function repeatedString(s, n) {
    // const countA = s => s.split('a').length - 1;
    const aTotal = countA(s); //aTotal = 2
    let len = s.length; // length = 3 
    let reps = Math.floor(n / len); // reps  = 3
    let remainder = s.slice(0, n % len); //remainder = a 
    return reps * aTotal + countA(remainder);
    console.log("remainder", remainder);
    
}

function countA(s) {
    return s.split('a').length - 1;
}





// Original 
// function repeatedString(s, n) {
//     let sArr = s.split(''); // create an array of s
//     // console.log('s array', sArr);
//     let i = 0; // let i be the ponter 
//     while(sArr.length < n) { // while less than n.length 
//         sArr.push(sArr[i]); // push to the end of the array 
//         i++;
//     }
//     // convert to a string, match to a, return length of array of a
//     let results = sArr.join('').match(/[a]/gi).length; 
//     return results;

// }
let s = 'aba';
let n = 10;
console.log(repeatedString(s, n));