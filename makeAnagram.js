// function makeAnagram(a, b) {
//     let anagramLength = a.length + b.length;
//     let total = 0;
//     // First figure out which string is longer 
//     if (a.length >= b.length) {
//         let maxString = a;
//         let minString = b; 
//         let i = 0; 
//         let matches = 0;
//         while(i < maxString.length) {
//             if(b[i] === a[i]) {
//                 matches++;
//             }
//             i++;
//         }
//         total = anagramLength - (matches * 2);
//         return total;
//     } else {
//         let maxString = b;
//         let minString = a; 
       
//         // Loop over the length of the 
//         let i = 0; 
//         let matches = 0;
//         while(i < maxString.length) {
//             console.log(maxString[i]);
//             if(b[i] === a[i]) {
//                 matches++;
//             }
//             i++;
//         }

//         total = anagramLength - (matches * 2);
//         return total;
//     }
// }

const a = 'cbaffff';
const b = 'abc';
console.log(makeAnagram(a, b));


function makeAnagram(a, b) {
   const charsA = {};

    for (let x of a) {
        if(charsA[x]) {
            charsA[x]++;
        } else {
            charsA[x] = 1;
        }
    }

    for (let x of b) {
        if(charsA[x]) {
            charsA[x]--;
        } else {
            charsA[x] = -1;
        }
    }
    var counter = 0;

    for(let x in charsA) {
        if(charsA[x] !== 0) {
            counter += Math.abs(charsA[x]);
        }
    }
    console.log('lol', counter);
}